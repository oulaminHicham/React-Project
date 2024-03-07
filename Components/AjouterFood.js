import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import { useDispatch } from 'react-redux';
import { addpizza , addsandwitsh } from './Actions';

const AjouterFood = () => {
    const [foods , setFoods] = useState({})
    const [ingredients , setIngredients]=useState([])
    const [generatedId , setGeneratedId] = useState(10)
    // function to handel change
    function handelChange(e){
        setGeneratedId(lastId =>lastId +5)
        const {name , value} =e.target;
        const val = name === 'img'? value.slice(12) :value
        setFoods(foods =>({...foods , [name]:val ,Ingridient:ingredients, id:generatedId}))
    }
    //dispatcher function 
    const dispatch = useDispatch()
    // function to handel add food to list 
    function onAddfood(e){
        if(foods.categorie == 'Sandwitch') dispatch(addsandwitsh(foods))
        if(foods.categorie == 'Pizas') dispatch(addpizza(foods))
    }
    return (
       <div className='pb-5'>
       <NavBar />
        <div className='add--food w-50 mx-auto p-3 mt-4 rounded-4'>
            <div className="mb-3 mt-3">
                <label htmlFor="name" className="form-label text-white">Name Of Plat :</label>
                <input type="text" className="form-control" id="name" placeholder="Name Of Plat" name="Name" 
                        value={foods.Name || ''}
                        onChange={(e)=>handelChange(e)}
                />
            </div>
            <div className="mb-3 mt-3">
                <label htmlFor="name" className="form-label text-white">Price Of Plat :</label>
                <input type="text" className="form-control" id="name" placeholder="Name Of Plat" name="price" 
                    value={foods.price || ''}
                    onChange={(e)=>handelChange(e)}
                />
            </div>
            <div className="mb-3 mt-3">
                <label className="form-label text-white">Ingredients:</label>
                <textarea className="form-control" rows="5" id="comment" name="Ingridient"
                          value={ingredients || ''}
                          onChange={(e)=>setIngredients([e.target.value])}
                ></textarea>
            </div>
            <div className="mb-3 mt-3">
                <label className="form-label text-white">Images:</label>
                <input type="file" className="form-control" id="name" placeholder="Name Of Plat" name="img" 
                    onChange={(e)=>handelChange(e)}
                />
            </div>
            <div className="mb-3 mt-3">
                <label className="form-label text-white">Categorie:</label>
                <select className="form-select" name='categorie'
                        value={foods.categorie}
                        onChange={(e)=>handelChange(e)}
                >
                    <option value='Sandwitch'>Sandwitch</option>
                    <option value='Pizas'>Pizas</option>
                </select>
            </div>
            <Link  className="btn btn-primary mt-3 w-50" to='/proposition' onClick={(e)=>onAddfood(e)}>Add </Link>
       </div>
       </div>
    );
}

export default AjouterFood;
