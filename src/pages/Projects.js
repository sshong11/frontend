import {useState, useEffect} from "react"

function Projects(props) {

    const [projects, setProjects] = useState(null)

    const getProjectsData = async () => {
        const response = await fetch(props.URL + "projects")
        const data = await response.json()
        setProjects(data)
    }

    useEffect(() => getProjectsData(), [])

    const loaded = () => {
        return projects.map((project, key) => (<>
            <div className="projects" id={`proj${key}`}>
                <a href={project.live} id="projref"><img src={project.image} alt ="projpicture" class="projimg"/></a>
                {/* <img src={project.image} alt ="projpicture" class="projimg"/> */}
                <div className="desc">
                    <h1>{project.name}</h1>
                    <p>{project.desc}</p>
                    <div className="projButtons">
                        <a href={project.git}>
                            <button>Github</button>
                        </a>
                        <a href={project.live}>
                            <button>Live Site</button>
                        </a>
                    </div>
                    
                </div>
                
            </div>
            </>
        ))
    }

    return projects ? loaded() : <h1>Loading...</h1>
}

export default Projects