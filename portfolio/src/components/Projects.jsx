import GithubIcon from "../assets/icons/GithubIcon";
import initialProjects from "../utils/initialProjects";

const Projects = () => {

  const emj = ['🤠', '✨', '😎', '👾', '🤖', '⛷️']

  const formatProjectName = (name) => {
    return name.replace(/[-_]/g, ' ');
  };

  return (
    <div className='projects'>
      {
        initialProjects.map((project, index) => (
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
          </div>
        ))
      }
    </div>
  )
}

export default Projects