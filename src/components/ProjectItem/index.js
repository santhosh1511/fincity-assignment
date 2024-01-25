import './index.css'
import 'bootstrap/dist/css/bootstrap.css';

const ProjectItem = props => {
    const {details} = props
    const {id, title, description, url} = details     
    return (
        <div>
            {id === '2' ?(
        <li className="project_show" key={id}>
             <div className="picture">
                <img src={url} alt="ram" className="field_picture" />
            </div>
            <div className="content">
                <h1 className="project_title">{title}</h1>
                <p className="project_content">{description}</p>
                <button className="view">View Project</button>
            </div>
        </li>
         ):(
            <li className="project_show" key={id}>
            <div className="content">
                <h1 className="project_title">{title}</h1>
                <p className="project_content">{description}</p>
                <button className="view">View Project</button>
            </div>
            <div className="picture">
                <img src={url} alt="ram" className="field_picture" />
            </div>
        </li>
         )}
        </div>
    )
}

export default ProjectItem
