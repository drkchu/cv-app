import React from 'react';
import GeneralInformation from './components/GeneralInformation';
import EducationalExperience from './components/EducationalExperience';
import PracticalExperience from './components/PracticalExperience';
import './styles/default.css';

function App() {
  return (
    <div className="App">
      <h1>Derek's CV Application</h1>
      <GeneralInformation />
      <EducationalExperience />
      <PracticalExperience />
    </div>
  );
}

export default App;