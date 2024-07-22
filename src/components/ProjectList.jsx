import { Link } from 'react-router-dom'
import '../../styles/ProjectList.css'
import BackArrow from '../assets/icons/BackArrow'
import { useEffect, useState } from 'react';
import fetchProjects from '../utils/fetchGithub';
import GithubIcon from '../assets/icons/GithubIcon';
import StarIcon from '../assets/icons/StarIcon';

const ProjectList = () => {

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const emj = ['🤠', '✨', '😎', '👾', '🤖', '⛷️']

  useEffect(() => {
    setLoading(true);
    fetchProjects(setProjects, setLoading)
      .then((projects) => {
        setProjects(projects);
        // setLoading(false); // Reactivate for production
      })
      .catch((error) => {
        console.error('Error fetching GitHub projects', error);
        // setLoading(false);
      });
  }, []);

  const formatProjectName = (name) => {
    return name.replace(/[-_]/g, ' ');
  };

  return (
    <div className='complete-project-list'>
      {/* PROJECT LIST HEADER */}
      <div className='project-list-header'>
        <Link to={"/"}>
          <BackArrow />
          <span>Go back</span>
        </Link>
      </div>


      {/* PROJECTS */}
      <div className='projects_list'>
        {loading ? (
          <p>Loading projects...</p>
        ) : (
          projects.map((project, index) => (
            <div key={project.id} className='project'>
              <div className='title'>
                <div className='emoji'>{emj[index]}</div>
                <span>{formatProjectName(project.name)}</span>
              </div>
              <p className='text text_s'>
                {
                  project.description === null
                    ? "No description provided 💀"
                    : project.description
                }
              </p>
              <div className='technologies'>
                {project.topics.map((topic, index) => (
                  index < 3 ? <span key={index} className='technologie text_s'>{topic}</span> : null
                ))}
              </div>
              <div className='github-link'>
                <GithubIcon url={project.html_url} />
              </div>
              <div className='stars'>
                <StarIcon />
                {
                  project.stargazers_count === null
                    ? "0"
                    : project.stargazers_count
                }
              </div>
            </div>
          ))
        )}
      </div>
    </div>

  )
}

export default ProjectList