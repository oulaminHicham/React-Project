import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import NavBar from './NavBar';
import FoddLayout from './FoddLayout';
const Proposition = () => {
    const seursh = useSelector((state)=>state.seurshKey)
    const allFoods =useSelector((state)=>state.Propostion)
    const finalFoods = seursh == ''?allFoods:
            allFoods.filter(f=>f.categorie == seursh)
    return ( 
        <div className='gabary'>
            <NavBar />
            <FoddLayout foods={finalFoods} isProp={true}/>
        </div>
    );
}
export default Proposition;


