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

function App() {

  useEffect(() => {
    const elements = document.querySelectorAll('.fade-up');
    elements.forEach(element => {
      element.classList.add('animate');
    });
  }, []);

  return (
    <BrowserRouter>
      <div className='page-container fade-up'>
        {/* HEADER */}
        <Header />
        <Routes>

          {/* BASE INITIAL COMPONENT */}
          <Route path='/' element={<>
            {/* PROJECTS HEADER */}
            <ProjectsHeader />

            {/* PROJECTS */}
            <Projects />

          </>} />

          {/* CONTRIBUTIONS */}
          <Route path='/contributions' element={<>
            <GitHubContributions username='hennyfeliz' />
          </>} />

          {/* PROJECT LIST */}
          <Route path='/projects' element={<>
            <ProjectList />
          </>} />

          {/* EXPERIENCE */}
          <Route path='/experience' element={<>
            <Experience />
          </>} />


        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;

