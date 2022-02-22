import {useState, useEffect} from "react"

function About(props) {

    // const [about, setAbout] = useState(null)

    // const getAboutData = async () => {
    //     const response = await fetch(props.URL + "about")

    //     const data = await response.json()

    //     setAbout(data)
    // }
    
    // useEffect(() => getAboutData(), [])

    // const loaded = () => (
    //     <div>
    //         <h2>{about.name}</h2>
    //         <h3>{about.email}</h3>
    //         <p>{about.bio}</p>
    //     </div>
    // )

    const loaded = () => (
        <div className="about">
            <h2>Full-stack software engineer with a background in information technology</h2>
            <h2>Looking to create and deliver appealing, efficient, and practical software</h2>
            <br/>
            <h3>Skills & Technology</h3>HTML | CSS | JavaScript | TypeScript | Python | Ruby | React | Node.js | Express | MongoDB | Mongoose | PostgreSQ
        </div>
    )

    return loaded()
}

export default About