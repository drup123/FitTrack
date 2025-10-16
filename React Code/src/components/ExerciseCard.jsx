import React from 'react'

const ExerciseCard = ({ exercise, onClick, isCompleted }) => {
  return (
    <div className="exercise-card" onClick={onClick}>
      <div className="exercise-header">
        <div>
          <h4>{exercise.name}</h4>
          <div className="exercise-meta">
            <i className="fas fa-clock"></i> {exercise.duration}
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.5rem' }}>
          <span className={`difficulty-badge ${exercise.difficulty}`}>
            {exercise.difficulty}
          </span>
          {isCompleted && (
            <div style={{ color: '#4CAF50', fontSize: '1.2rem' }}>
              <i className="fas fa-check-circle"></i>
            </div>
          )}
        </div>
      </div>
      
      <div className="target-muscles">
        {exercise.targetMuscles.map((muscle, index) => (
          <span key={index} className="muscle-tag">
            {muscle}
          </span>
        ))}
      </div>
      
      <div style={{ 
        marginTop: '1rem', 
        padding: '0.5rem', 
        background: '#f0f8ff', 
        borderRadius: '8px',
        fontSize: '0.9rem',
        color: '#666'
      }}>
        <i className="fas fa-info-circle" style={{ marginRight: '0.5rem', color: '#2196F3' }}></i>
        Click to view detailed instructions
      </div>
    </div>
  )
}

export default ExerciseCard