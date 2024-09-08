import React from "react";
import Navbar from './Navbar'
import './Projects.css'
import Placeholder from "./placeholder";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from "./Footer";

function Projects() {
    return(
        <div>
            <Navbar/>
            <div className="projects-container">
                <div className="projects">
                    <h1 id="currprojects">Current Projects</h1>
                </div>
            </div>
            <Placeholder/>
            <Placeholder/>
            <div className="pagination">
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
            </div>
            <Footer/>
        </div>
    )
}
export default Projects;