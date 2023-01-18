import React from 'react';

import {AiFillHome as HomeIcon} from 'react-icons/ai';
import {VscProject as ProjectIcon} from 'react-icons/vsc';
import {BsBookmarks as ResumeIcon} from 'react-icons/bs';
import {BsCodeSquare as SkillIcon} from 'react-icons/bs';

const Sidebar = () => {
    return (
        <div className='container-fluid bg-warning'>
            <div className='row bg-primary'>
                <div className='col-md-1'>
                    <div className="row mx-auto bg-dark">
                    <div className='col-md-10 col-12 text-center mx-auto pt-5 mt-3'>
                    <HomeIcon className='text-white' size={30}/>
                    </div>
                    </div>
                    <div className="row mx-auto bg-dark">
                    <div className='col-md-10 col-12 text-center mx-auto pt-5 mt-4'>
                    <ProjectIcon className='text-white' size={30}/>
                    </div>
                    </div>
                    <div className="row mx-auto bg-dark">
                    <div className='col-md-10 col-12 text-center mx-auto pt-5 mt-4'>
                    <ResumeIcon className='text-white' size={30}/>
                    </div>
                    </div>
                    <div className="row mx-auto bg-dark">
                    <div className='col-md-10 col-12 text-center mx-auto pt-5 mt-4'>
                    <SkillIcon className='text-white' size={30}/>
                    </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
    }

export default Sidebar;