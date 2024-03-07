import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ediFood } from './Actions';

const EditFood = ({food , setShowEditForm}) => {
    const [editedFood , setEditedFood] = useState({})
    const [ingredients , setIngredient]=useState([])
    const dispatch = useDispatch()
    // function to handel change
    function handelChange(e){
        const {name , value} = e.target;
        setEditedFood(old=>({...old , [name]:value ,Ingridient:ingredients, id:food.id}))
    }
    // function to handel edit
    function handelEdit(){
        if(editedFood.Name == undefined) setEditedFood(p=>({...p , Name:food.Name}))
        if(editedFood.price == undefined) setEditedFood(p=>({...p , price:food.price}))
    console.log(food.Name)
        dispatch(ediFood(editedFood));
        setShowEditForm(p=>!p);
    }
    return (
        <>
        <div className='w-100 mx-auto bg-secondary mt-4 p-3 rounded-4 edit--food'>
            <label className='form-label text-white'>Name</label>
            <input className='form-control' type='text' name='Name'
                    value={editedFood.Name || ''}
                    onChange={(e)=>handelChange(e)}
             />

            <label className='form-label text-white'>Price</label>
            <input className='form-control' type='text' name='price' 
                   value={editedFood.price || ''}
                   onChange={(e)=>handelChange(e)}
            />
            
            <label className="form-label text-white">Ingredients:</label>
            <textarea className="form-control" rows="5" id="comment" name="Ingridient"
                      value={ingredients || ''}
                      onChange={(e)=>setIngredient(e.target.value)}
            ></textarea>

            <button className='btn btn-success w-25 mt-2'
                    onClick={handelEdit}
            >Edit</button>
            <button className='btn btn-info text-white w-25 mx-3 mt-2'  onClick={()=>setShowEditForm(p=>!p)}>Close</button>
        </div>
        </>
    );
}

export default EditFood;
