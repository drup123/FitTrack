from fastapi import FastAPI, Form, Request
from fastapi.templating import Jinja2Templates
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import pickle
import pandas as pd
import numpy as np

# 1. Define a Pydantic model for the incoming JSON data from React
class PredictionRequest(BaseModel):
    gender: str
    age: int
    height: float
    weight: float
    duration: float
    heart_rate: float
    body_temp: float

# 2. Create the FastAPI app instance
app = FastAPI()

# 3. Add CORS middleware to allow your React app to communicate with the API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:5173"],  # React dev servers
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 4. Load the trained machine learning model
try:
    with open("pipeline_model.pkl", "rb") as f:
        pipeline = pickle.load(f)
except FileNotFoundError:
    print("Error: 'pipeline_model.pkl' not found. Make sure the model file is in the same directory.")
    pipeline = None

# --- API Endpoint for the React Application ---
@app.post("/predict-calories")
async def predict_calories_api(data: PredictionRequest):
    """
    This endpoint is for the React app. It accepts JSON data,
    predicts calories, and returns a JSON response.
    """
    if pipeline is None:
        return {"success": False, "error": "Model not loaded."}
        
    try:
        # Create a DataFrame from the Pydantic model's data
        sample = pd.DataFrame({
            "Gender": [data.gender],
            "Age": [data.age],
            "Height": [data.height],
            "Weight": [data.weight],
            "Duration": [data.duration],
            "Heart_Rate": [data.heart_rate],
            "Body_Temp": [data.body_temp]
        }, index=[0])

        # Make the prediction
        result = pipeline.predict(sample)[0]
        
        return {
            "success": True,
            "calories_burned": round(float(result), 2),
            "input_data": data.dict()
        }
    
    except Exception as e:
        return {
            "success": False,
            "error": str(e)
        }

# --- Health Check Endpoint ---
@app.get("/api/health")
def health_check():
    """A simple endpoint to check if the API is running."""
    return {"status": "healthy", "message": "Calorie Prediction API is running"}


# --- (Optional) Keep old routes if you still want to use the HTML forms ---
templates = Jinja2Templates(directory="templates")

@app.get("/")
def home(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})

@app.post("/predict")
def predict(
    request: Request, Gender: str=Form(...), Age: float=Form(...), Height: float=Form(...),
    Weight: float=Form(...), Duration: float=Form(...), Heart_Rate: float=Form(...), Body_Temp: float=Form(...)
):
    sample = pd.DataFrame({
        "Gender": [Gender], "Age": [Age], "Height": [Height], "Weight": [Weight],
        "Duration": [Duration], "Heart_Rate": [Heart_Rate], "Body_Temp": [Body_Temp]
    }, index=[0])
    result = pipeline.predict(sample)[0]
    return templates.TemplateResponse("result.html", {"request": request, "calories": result})

# 5. This block runs the server and should be at the VERY END of the file
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
