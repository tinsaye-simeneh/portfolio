import React from 'react';

import Topbar from "../components/Topbar";

import Image from "../assets/Images/memoji.png";

const Home = () => {
    return (
        <div className="container bg-primary mt-4 bg-dark me-auto">
        <Topbar />
            <div className="row">
                <div className="col-md-6 col-12">
                    <h1 className="text-white">Hello, I'm <span className="text-primary">Sajjad</span></h1>
                    <h1 className="text-white">I'm a <span className="text-primary">Front-End Developer</span></h1>
                    <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                    <button className="btn btn-primary">Hire Me</button>
                </div>
                <div className="col-md-6 col-12">
                    <img src={Image} alt="undraw-Developer-re" border="0" height={400}/>
                </div>
            </div>
        </div>
    );
    }

export default Home;