import React from 'react'
import { exercises, exerciseCategories } from '../data/exerciseData'

const Progress = ({ completedExercises }) => {
  // Calculate total exercises
  const totalExercises = Object.values(exercises).flat().length
  const completionPercentage = totalExercises > 0 ? Math.round((completedExercises.length / totalExercises) * 100) : 0
  
  // Calculate progress by category
  const categoryProgress = exerciseCategories.map(category => {
    const categoryExercises = exercises[category.id] || []
    const completedInCategory = categoryExercises.filter(ex => completedExercises.includes(ex.id)).length
    const percentage = categoryExercises.length > 0 ? Math.round((completedInCategory / categoryExercises.length) * 100) : 0
    
    return {
      ...category,
      total: categoryExercises.length,
      completed: completedInCategory,
      percentage
    }
  })

  return (
    <div>
      <h2 style={{ color: 'white', marginBottom: '2rem', fontSize: '2.5rem', textAlign: 'center' }}>
        Your Fitness Progress
      </h2>
      
      <div className="progress-section">
        <h3 style={{ marginBottom: '1rem', fontSize: '1.8rem', color: '#333' }}>Overall Progress</h3>
        <div 
          className="progress-circle" 
          style={{ '--progress': `${completionPercentage * 3.6}deg` }}
        >
          <div className="progress-inner">
            <div className="progress-percentage">{completionPercentage}%</div>
            <div className="progress-label">Complete</div>
          </div>
        </div>
        <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '1rem' }}>
          You've completed <strong>{completedExercises.length}</strong> out of <strong>{totalExercises}</strong> exercises
        </p>
        
        {completionPercentage === 100 && (
          <div style={{ 
            background: 'linear-gradient(45deg, #4CAF50, #45a049)', 
            color: 'white', 
            padding: '1rem', 
            borderRadius: '10px', 
            margin: '1rem 0' 
          }}>
            <h4><i className="fas fa-trophy"></i> Congratulations!</h4>
            <p>You've completed all available exercises! You're a fitness champion! 🏆</p>
          </div>
        )}
      </div>

      <div className="progress-section">
        <h3 style={{ marginBottom: '2rem', fontSize: '1.8rem', color: '#333' }}>Progress by Category</h3>
        <div className="category-progress">
          {categoryProgress.map(category => (
            <div key={category.id} className="category-card">
              <div className="category-icon">
                {category.icon}
              </div>
              <h4>{category.name}</h4>
              <div className="progress-bar">
                <div 
                  className={`progress-fill ${category.percentage === 100 ? 'complete' : 'incomplete'}`}
                  style={{ width: `${category.percentage}%` }}
                ></div>
              </div>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>
                {category.completed} / {category.total} exercises ({category.percentage}%)
              </p>
              {category.percentage === 100 && (
                <div style={{ color: '#4CAF50', marginTop: '0.5rem', fontWeight: '600' }}>
                  <i className="fas fa-star"></i> Category Complete!
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {completedExercises.length === 0 && (
        <div className="progress-section">
          <div style={{ textAlign: 'center', padding: '2rem', color: '#666' }}>
            <i className="fas fa-info-circle" style={{ fontSize: '3rem', marginBottom: '1rem', color: '#2196F3' }}></i>
            <h3 style={{ marginBottom: '1rem', color: '#333' }}>Start Your Fitness Journey!</h3>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
              You haven't completed any exercises yet. Head over to the exercises section to get started 
              and begin tracking your progress!
            </p>
            <div style={{ marginTop: '2rem' }}>
              <div style={{ fontSize: '0.9rem', color: '#888' }}>
                💪 {totalExercises} exercises waiting for you across {exerciseCategories.length} categories
              </div>
            </div>
          </div>
        </div>
      )}

      {completedExercises.length > 0 && completionPercentage < 100 && (
        <div className="progress-section" style={{ background: 'linear-gradient(45deg, #e3f2fd, #f3e5f5)', border: '2px solid #2196F3' }}>
          <div style={{ textAlign: 'center', padding: '1rem' }}>
            <h4 style={{ color: '#333', marginBottom: '1rem' }}>Keep Going! 💪</h4>
            <p style={{ color: '#666', fontSize: '1rem' }}>
              You're doing great! You have <strong>{totalExercises - completedExercises.length}</strong> more exercises to complete.
            </p>
            <div style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#888' }}>
              Every exercise brings you closer to your fitness goals!
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Progress