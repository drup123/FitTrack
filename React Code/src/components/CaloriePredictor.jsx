import React, { useState } from 'react';
import './CaloriePredictor.css';

const CaloriePredictor = () => {
  const [formData, setFormData] = useState({
    age: '',
    gender: '',
    weight: '',
    height: '',
    duration: '',
    heart_rate: '',
    body_temp: ''
  });
  
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setPrediction(null);

    try {
      const response = await fetch('http://localhost:8000/predict-calories', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          age: parseInt(formData.age),
          gender: formData.gender,
          weight: parseFloat(formData.weight),
          height: parseFloat(formData.height),
          duration: parseFloat(formData.duration),
          heart_rate: parseFloat(formData.heart_rate),
          body_temp: parseFloat(formData.body_temp)
        }),
      });

      const data = await response.json();

      if (data.success) {
        setPrediction(data);
      } else {
        setError(data.error || 'Prediction failed');
      }
    } catch (err) {
      setError('Failed to connect to the prediction service');
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      age: '',
      gender: '',
      weight: '',
      height: '',
      duration: '',
      heart_rate: '',
      body_temp: ''
    });
    setPrediction(null);
    setError('');
  };

  return (
    <div className="calorie-predictor">
      <div className="predictor-header">
        <h2>Calorie Burn Calculator</h2>
        <p>Predict how many calories you'll burn during your workout</p>
      </div>

      <div className="predictor-container">
        <form onSubmit={handleSubmit} className="calorie-form">
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="age">Age (years)</label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                min="10"
                max="100"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="gender">Gender</label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="weight">Weight (kg)</label>
              <input
                type="number"
                id="weight"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                min="30"
                max="200"
                step="0.1"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="height">Height (cm)</label>
              <input
                type="number"
                id="height"
                name="height"
                value={formData.height}
                onChange={handleChange}
                min="100"
                max="250"
                step="0.1"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="duration">Workout Duration (minutes)</label>
              <input
                type="number"
                id="duration"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                min="1"
                max="300"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="heart_rate">Average Heart Rate (BPM)</label>
              <input
                type="number"
                id="heart_rate"
                name="heart_rate"
                value={formData.heart_rate}
                onChange={handleChange}
                min="40"
                max="200"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="body_temp">Body Temperature (°C)</label>
              <input
                type="number"
                id="body_temp"
                name="body_temp"
                value={formData.body_temp}
                onChange={handleChange}
                min="35"
                max="42"
                step="0.1"
                required
              />
            </div>
          </div>

          <div className="form-actions">
            <button 
              type="submit" 
              className="predict-button"
              disabled={loading}
            >
              {loading ? 'Calculating...' : 'Predict Calories Burned'}
            </button>
            <button 
              type="button" 
              className="reset-button"
              onClick={resetForm}
            >
              Reset
            </button>
          </div>
        </form>

        {error && (
          <div className="error-message">
            <span>⚠️</span> {error}
          </div>
        )}

        {prediction && (
          <div className="prediction-result">
            <div className="result-card">
              <h3>🔥 Calorie Burn Prediction</h3>
              <div className="calorie-display">
                <span className="calorie-value">
                  {prediction.calories_burned}
                </span>
                <span className="calorie-unit">calories</span>
              </div>
              <p>Based on your input parameters:</p>
              <div className="input-summary">
                <div className="summary-item">
                  <span>Duration:</span>
                  <span>{prediction.input_data.duration} minutes</span>
                </div>
                <div className="summary-item">
                  <span>Heart Rate:</span>
                  <span>{prediction.input_data.heart_rate} BPM</span>
                </div>
                <div className="summary-item">
                  <span>Weight:</span>
                  <span>{prediction.input_data.weight} kg</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CaloriePredictor;