import React from 'react';

import {AiFillHome as HomeIcon} from 'react-icons/ai';

const Sidebar = () => {
    return (
        <div className='container-fluid bg-warning'>
            <div className='row bg-primary'>
                <div className='col-md-1 bg-dark'>
                    <div className='col-md-10 col-12 text-center pt-5'>
                    <HomeIcon className='text-white' size={30}/>
                    </div>
                </div>
            </div>
            
        </div>
    );
    }

export default Sidebar;