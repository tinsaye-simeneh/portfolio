import React from "react";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const Project = () => {
    return (
        <>
        <Sidebar ProjectIconColor="text-primary" />
        <div className="container bg-primary mt-4 bg-dark me-auto">
            <Topbar PageName="Project" />
            <div className="row mt-5 bg-dark border mx-auto">
            <div className="col-md-6 col-12">
                <h1 className="text-white">Project</h1>
            </div>
            </div>
        </div>
        </>
    );
    }

export default Project;