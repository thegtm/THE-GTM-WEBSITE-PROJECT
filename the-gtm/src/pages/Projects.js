import React from "react";
import './Projects.css'
import Placeholder from "./placeholder";
import '@fortawesome/fontawesome-free/css/all.min.css';


function Projects() {
    return(
        <div>
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
            
        </div>
    )
}
export default Projects;