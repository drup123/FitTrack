import React, { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import ExerciseTypes from './components/ExerciseTypes'
import ExerciseDetails from './components/ExerciseDetails'
import Progress from './components/Progress'
import CaloriePredictor from './components/CaloriePredictor' // Add this import

function App() {
  const [currentSection, setCurrentSection] = useState('home')
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [selectedExercise, setSelectedExercise] = useState(null)
  const [completedExercises, setCompletedExercises] = useState([])

  const handleSectionChange = (section) => {
    setCurrentSection(section)
    if (section !== 'exercises') {
      setSelectedCategory(null)
      setSelectedExercise(null)
    }
  }

  const handleCategorySelect = (category) => {
    setSelectedCategory(category)
    setSelectedExercise(null)
  }

  const handleExerciseSelect = (exercise) => {
    setSelectedExercise(exercise)
    setCurrentSection('exercises')
  }

  const handleBackToTypes = () => {
    setSelectedCategory(null)
    setSelectedExercise(null)
  }

  const handleBackToExercises = () => {
    setSelectedExercise(null)
  }

  const markExerciseComplete = (exerciseId) => {
    if (!completedExercises.includes(exerciseId)) {
      setCompletedExercises([...completedExercises, exerciseId])
    }
  }

  const renderContent = () => {
    switch (currentSection) {
      case 'home':
        return <Home onGetStarted={() => handleSectionChange('exercises')} />
      case 'exercises':
        if (selectedExercise) {
          return (
            <ExerciseDetails 
              exercise={selectedExercise}
              onBack={handleBackToExercises}
              onComplete={markExerciseComplete}
              isCompleted={completedExercises.includes(selectedExercise.id)}
            />
          )
        } else {
          return (
            <ExerciseTypes 
              selectedCategory={selectedCategory}
              onCategorySelect={handleCategorySelect}
              onExerciseSelect={handleExerciseSelect}
              onBack={handleBackToTypes}
              completedExercises={completedExercises}
            />
          )
        }
      case 'progress':
        return <Progress completedExercises={completedExercises} />
      case 'calorie-predictor': // Add this case
        return <CaloriePredictor />
      default:
        return <Home onGetStarted={() => handleSectionChange('exercises')} />
    }
  }

  return (
    <div className="app">
      <Header 
        currentSection={currentSection}
        onSectionChange={handleSectionChange}
      />
      <main className="main-content">
        {renderContent()}
      </main>
    </div>
  )
}

export default App