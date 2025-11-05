# 🏋️‍♂️ FitTrack – AI-Powered Fitness & Calorie Tracker

FitTrack is a fitness web application built with **React** for the frontend and connected to an external **FastAPI + ML model** for calorie prediction.  
It allows users to explore exercises by category, view detailed steps, track their workout progress, and estimate calories burned using an AI model.

---

## 🚀 Features

- 💪 **Category-Wise Exercises:** Browse exercises based on muscle type or equipment.
- 📋 **Exercise Details:** Step-by-step guide for each selected exercise.
- 📈 **Progress Tracker:** Track and visualize your workout activity.
- 🤖 **AI-Driven Calorie Prediction:** Sends user input to a FastAPI ML model to get calorie burn estimates.
- ⚡ **Responsive Interface:** Clean, fast, and interactive design using React.

---

## 🧠 Tech Stack

**Frontend (Main App):**
- React.js  
- HTML5, CSS3  
- Axios (for API requests)

**Backend (External ML API):**
- FastAPI (Python)
- Scikit-learn / TensorFlow *(depending on your model)*
- NumPy, Pandas

---

## 🗂️ Project Structure

fittrack/
│
├── frontend/ # React application
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── App.js
│ │ └── index.js
│ └── package.json
│
├── backend_ml_model/ # (Separate FastAPI project for ML model)
│ ├── main.py
│ ├── model/
│ │ ├── calorie_predictor.pkl
│ │ └── utils.py
│ ├── requirements.txt
│ └── README.md
│
├── README.md
└── LICENSE


---

## Screenshots

<img width="1896" height="870" alt="Screenshot 2025-11-05 001910" src="https://github.com/user-attachments/assets/94e7e440-8a6b-49be-acf6-b0d708c76cfe" />
<img width="1895" height="866" alt="Screenshot 2025-11-05 001955" src="https://github.com/user-attachments/assets/6c41c8cd-8688-496b-8bf4-02e99109f94b" />
<img width="1902" height="771" alt="Screenshot 2025-11-05 002022" src="https://github.com/user-attachments/assets/deea99cf-ba4a-438d-8bae-7f682c79b8f6" />
<img width="1893" height="866" alt="Screenshot 2025-11-05 002045" src="https://github.com/user-attachments/assets/49b639cc-dd28-4e85-8ecc-08d92c640cef" />
<img width="1898" height="867" alt="Screenshot 2025-11-05 002120" src="https://github.com/user-attachments/assets/b5b58090-e504-4da4-964f-3bc16c6271e1" />
<img width="1891" height="869" alt="Screenshot 2025-11-05 002143" src="https://github.com/user-attachments/assets/1f0252b2-dd28-47f2-9c58-2e1fd93e4b3e" />
<img width="1898" height="867" alt="Screenshot 2025-11-05 002209" src="https://github.com/user-attachments/assets/269a8d0b-9683-4427-b61a-b46d820eed46" />

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/yourusername/fittrack.git
cd fittrack


