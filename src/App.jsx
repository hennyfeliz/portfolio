import { useEffect } from 'react';
import './App.css'
import GitHubContributions from './components/GitHubContributions'
import Header from './components/Header';
import Projects from './components/Projects';
import ProjectsHeader from './components/ProjectsHeader';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import ProjectList from './components/ProjectList';
import Experience from './components/Experience';
import CeriticateViewer from './CeriticateViewer';

function App() {

  useEffect(() => {
    const elements = document.querySelectorAll('.fade-up');
    elements.forEach(element => {
      element.classList.add('animate');
    });
  }, []);

  return (
    <BrowserRouter>
      <CeriticateViewer />
    </BrowserRouter>
  );
}

export default App;

