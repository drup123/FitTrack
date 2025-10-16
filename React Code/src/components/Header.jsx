// In your Header.jsx component, update the nav links:
const Header = ({ currentSection, onSectionChange }) => {
  return (
    <header className="header">
      <nav className="nav">
        <a href="#" className="logo" onClick={() => onSectionChange('home')}>
          FitTrack
        </a>
        <ul className="nav-links">
          <li>
            <a 
              href="#" 
              className={currentSection === 'home' ? 'active' : ''}
              onClick={() => onSectionChange('home')}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#" 
              className={currentSection === 'exercises' ? 'active' : ''}
              onClick={() => onSectionChange('exercises')}
            >
              Exercises
            </a>
          </li>
          <li>
            <a 
              href="#" 
              className={currentSection === 'calorie-predictor' ? 'active' : ''} // Add this
              onClick={() => onSectionChange('calorie-predictor')}
            >
              Calorie Calculator
            </a>
          </li>
          <li>
            <a 
              href="#" 
              className={currentSection === 'progress' ? 'active' : ''}
              onClick={() => onSectionChange('progress')}
            >
              Progress
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;