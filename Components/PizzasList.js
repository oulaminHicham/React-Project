import React from 'react';
import { useSelector} from 'react-redux';
import NavBar from './NavBar';
import FoddLayout from './FoddLayout';
const PizzasList = () => {
    const pizzas = useSelector((state)=>state.Pizza)
    return (
        <div className='gabary pb-5'>
            <NavBar />
            <FoddLayout foods={pizzas} clasStyle='pizzas'/>
        </div>
    );
}

export default PizzasList;
