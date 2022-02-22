import {Link} from "react-router-dom"

function Header(props) {

    const navStyle = {
        display: "flex",
        justifyContent: "space-around",
        padding: "8px",
        width: "90%",
        margin: "auto",
        marginBottom: "10vh",
        backgroundColor: "edcd92",
    }

    return (<header>
        <h1 id="headername">stephen hong</h1>
        <nav style={navStyle}>
            <Link to="/">
                <div>ABOUT</div>
            </Link>

            <Link to="/projects">
                <div>PROJECTS</div>
            </Link>

            <Link to="/connect">
                <div>CONNECT</div>
            </Link>
        </nav>
    </header>)
}

export default Header