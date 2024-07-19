import { Link } from 'react-router-dom';
import '../../styles/Indic.css'

const Indic = () => {

  const paths = [
    {
      name_: "projects",
      goTo: "/"
    }, {
      name_: "contributions",
      goTo: "/contributions"
    }, {
      name_: "experience",
      goTo: "/experience"
    },
  ]

  return (
    <div className='indice-container'>
      {paths.map((pt, index) => {
        return (
          <div key={index} className='path-element'>
            <Link to={pt.goTo}>
              <span>{pt.name_}</span>
            </Link>
          </div>
        );
      })}
    </div>
  )
}

export default Indic