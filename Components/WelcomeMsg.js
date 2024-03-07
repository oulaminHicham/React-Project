import React from 'react';
import { Link } from 'react-router-dom';

function WelcomeMessage(){
    return (
        <>
            <header id="home">
                <main className="wlcome--messge px-3">
                    <h4 className='text-dark'>You welecome in your Online Restorent </h4>
                    <Link to='/proposition' className='btn btn-primary mt-5 w-50' >All Plats</Link>
                </main>
                <img className="FoodImages d-block w-100 h-100" src="./FoodImages/food8.jpg" alt="Hamburger Catering"/>
            </header>
        </>
    ) 
}

export default WelcomeMessage;
