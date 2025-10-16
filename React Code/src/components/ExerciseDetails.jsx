import React from 'react'

const ExerciseDetails = ({ exercise, onBack, onComplete, isCompleted }) => {
  return (
    <div>
      <button className="back-button" onClick={onBack}>
        <i className="fas fa-arrow-left"></i> Back to Exercises
      </button>
      
      <div className="exercise-detail">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
          <h2>{exercise.name}</h2>
          {isCompleted && (
            <div style={{ color: '#4CAF50', fontSize: '2rem' }}>
              <i className="fas fa-check-circle"></i>
            </div>
          )}
        </div>
        
        <div className="detail-header">
          <div>
            <strong><i className="fas fa-signal"></i> Difficulty:</strong>
            <span className={`difficulty-badge ${exercise.difficulty}`} style={{ marginLeft: '0.5rem' }}>
              {exercise.difficulty}
            </span>
          </div>
          <div>
            <strong><i className="fas fa-clock"></i> Duration:</strong> {exercise.duration}
          </div>
          <div>
            <strong><i className="fas fa-bullseye"></i> Target Muscles:</strong>
            <div className="target-muscles" style={{ marginTop: '0.5rem' }}>
              {exercise.targetMuscles.map((muscle, index) => (
                <span key={index} className="muscle-tag">{muscle}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="detail-section">
          <h3><i className="fas fa-list-ol"></i> Instructions</h3>
          <ol className="instruction-list">
            {exercise.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
        </div>

        <div className="detail-section">
          <h3><i className="fas fa-lightbulb"></i> Pro Tips</h3>
          <ul className="tips-list">
            {exercise.tips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </div>

        <div className="detail-section">
          <h3><i className="fas fa-star"></i> Benefits</h3>
          <ul className="benefits-list">
            {exercise.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>

        {!isCompleted && (
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <button 
              className="cta-button"
              onClick={() => onComplete(exercise.id)}
            >
              <i className="fas fa-check"></i> Mark as Completed
            </button>
          </div>
        )}

        {isCompleted && (
          <div style={{ 
            textAlign: 'center', 
            marginTop: '2rem', 
            padding: '1rem',
            background: 'linear-gradient(45deg, #4CAF50, #45a049)',
            borderRadius: '10px',
            color: 'white'
          }}>
            <i className="fas fa-trophy" style={{ marginRight: '0.5rem' }}></i>
            <strong>Exercise Completed!</strong> Great job on finishing this workout!
          </div>
        )}
      </div>
    </div>
  )
}

export default ExerciseDetails