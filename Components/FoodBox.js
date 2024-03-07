import React, { useState } from 'react';
import { useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import { delItem } from './Actions';
import FoodDetails from './Details';
import EditFood from './EditFood'

export default function FoodBox({food,isProp}){
    const dispatch = useDispatch()
    const [showdetails , setShowdetails] =useState(false);
    const [showEditForm , setShowEditForm]=useState(false);
    // function to confirm the dlete of item and delt it if its true
    function deleteFood(id , name){
        const AgreeToDlete = window.confirm("Are You Sure You Went To Delete The" + name)
        AgreeToDlete && dispatch(delItem(id));
    }
    return(
       <>
        <div className='col-sm-12 col-md-6 col-lg-4 mb-3 gabarie'>
         <div className="card">
            <img className="card-img-top" src={`FoodImages/${food.img}`} alt="Card image" />
            <div className="card-body">
                <h4 className="card-title">{food.Name}</h4>
                <p className="card-text">Price : {food.price} DH</p>
                {
                !isProp&&
                <div>
                        <button className='btn btn-danger w-25'
                                onClick={()=>deleteFood(food.id , food.Name)}
                        >Delete</button>
                        <button className='btn btn-success w-25 mx-2'
                                onClick={()=>setShowEditForm(p=>!p)}
                        >Edit</button>
                        <button className='btn btn-primary w-25 mx-2'
                                onClick={()=>setShowdetails(p=>!p)}
                        >Details</button>
                </div>
                }
            </div>
         </div>
        {showdetails && <FoodDetails food={food} setShowdetails={setShowdetails}/>}
        {showEditForm && <EditFood food={food} setShowEditForm={setShowEditForm}/>}
       </div>
       </>
    )
}