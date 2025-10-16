import React from 'react'
import { exerciseCategories, exercises } from '../data/exerciseData'
import ExerciseCard from './ExerciseCard'

const ExerciseTypes = ({ 
  selectedCategory, 
  onCategorySelect, 
  onExerciseSelect, 
  onBack,
  completedExercises 
}) => {
  if (selectedCategory) {
    const categoryExercises = exercises[selectedCategory.id] || []
    
    return (
      <div>
        <button className="back-button" onClick={onBack}>
          <i className="fas fa-arrow-left"></i> Back to Categories
        </button>
        <h2 style={{ color: 'white', marginBottom: '2rem', fontSize: '2.5rem', textAlign: 'center' }}>
          {selectedCategory.name} Exercises
        </h2>
        <div className="exercise-list">
          {categoryExercises.map(exercise => (
            <ExerciseCard 
              key={exercise.id}
              exercise={exercise}
              onClick={() => onExerciseSelect(exercise)}
              isCompleted={completedExercises.includes(exercise.id)}
            />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div>
      <h2 style={{ color: 'white', marginBottom: '2rem', fontSize: '2.5rem', textAlign: 'center' }}>
        Choose Your Exercise Type
      </h2>
      <div className="exercise-types">
        {exerciseCategories.map(category => (
          <div 
            key={category.id}
            className="type-card"
            onClick={() => onCategorySelect(category)}
          >
            <span className="type-icon">{category.icon}</span>
            <h3>{category.name}</h3>
            <p>{category.description}</p>
            <div style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>
              {exercises[category.id]?.length || 0} exercises available
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ExerciseTypes