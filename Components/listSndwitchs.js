import React from 'react';
import { useSelector } from 'react-redux';
import FoddLayout from './FoddLayout';
import NavBar from './NavBar';

const ListSndwitchs = () => {
    const sandwitchs = useSelector((state)=>state.Sandawitch)
    return (
        <div className='gabary pb-5'>
            <NavBar />
            <FoddLayout foods={sandwitchs} clasStyle='sandwitchs'/>
        </div>
    );
}

export default ListSndwitchs;
