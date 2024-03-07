import React from 'react';
import FoodBox from './FoodBox';

const FoddLayout = ({foods ,clasStyle , isProp}) => {
    return (
        <div className={`all--foods text-white container p-3 mt-4 ${clasStyle}`}>
            <div className='row'>
                {
                    foods.map(food =><FoodBox key={food.id} food={food} isProp={isProp}/>)
                }
            </div>
        </div>
    );
}

export default FoddLayout;
