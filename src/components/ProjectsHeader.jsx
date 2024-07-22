import Arrow from "../assets/icons/Arrow"
import { Link } from "react-router-dom"

const ProjectsHeader = () => {
  return (
    <div className='projects-header'>
      <h3>Projects</h3>
      <div className="projects-container">
        <Link to={"/projects"}>
          <span>Complete project list</span>
          <Arrow />
        </Link>
      </div>
    </div>
  )
}

export default ProjectsHeader