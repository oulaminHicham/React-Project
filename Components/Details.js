import React from 'react';

const FoodDetails = ({food  ,setShowdetails}) => {
    return (
        <div className="card details--box bg-warning w-100 p-0" onClick={()=>setShowdetails(p=>!p)}>
           <img className="card-img-top" src={`FoodImages/${food.img}`} alt="Card image" />
           <div className="card-body">
               <h4 className="card-title"><span className='text-success'>Name</span> : {food.Name}</h4>
               <p className="card-text h4"><span className='text-success'>Price</span>  : {food.price} DH</p>
               <p className="card-text text-success h4">Ingridients :</p>
               <ul className="list-group">
                {
                    food.Ingridient.map((e,i)=><li key={i} className="list-group-item ">{e}</li>)
                }
               </ul>
           </div>
        </div>
    );
}

export default FoodDetails;
