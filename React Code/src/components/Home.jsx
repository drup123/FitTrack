import React from 'react'

const Home = ({ onGetStarted }) => {
  return (
    <div>
      <section className="hero">
        <h1>Your Fitness Journey Starts Here</h1>
        <p>
          Discover personalized workout routines, learn proper exercise techniques, 
          and track your progress with our comprehensive fitness guide. Whether you're 
          a beginner or an experienced athlete, we have something for everyone.
        </p>
        <button className="cta-button" onClick={onGetStarted}>
          <i className="fas fa-play"></i> Get Started
        </button>
      </section>

      <section className="features">
        <div className="feature-card">
          <div className="feature-icon">🎯</div>
          <h3>Targeted Workouts</h3>
          <p>
            Choose from strength training, cardio, flexibility, and core exercises 
            designed to help you reach your specific fitness goals.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">📚</div>
          <h3>Step-by-Step Instructions</h3>
          <p>
            Learn proper form with detailed instructions, helpful tips, and 
            safety guidelines for every exercise in our database.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">📊</div>
          <h3>Track Your Progress</h3>
          <p>
            Monitor your fitness journey with our built-in progress tracker 
            and celebrate your achievements along the way.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">💡</div>
          <h3>Expert Tips</h3>
          <p>
            Get professional advice and modifications for each exercise to 
            ensure you're working out safely and effectively.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Home