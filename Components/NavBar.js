import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector , useDispatch } from 'react-redux';

const NavBar = () => {
    const seursh = useSelector((state)=>state.seurshKey)
    const dispatch = useDispatch()
    function handelChange(e){
        dispatch({type:'SEURSH' , payload:e.target.value})
    }
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark p-2">
            <div className="container-fluid">
                <a className="navbar-brand logo fs-3" href="#">FastFood</a>
                    <select className='form-control w-25' onChange={(e)=>handelChange(e)}>
                        <option value=''>...</option>
                        <option value='pizza'>pizza</option>
                        <option value='sandwich'>sandwich</option>
                    </select>
                <div className="collapse navbar-collapse d-flex justify-content-end" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link fs-4 " to='/'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fs-4 " to='/addFood'>Add Food</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fs-4 " to='/pizzasList'>Pizas</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fs-4 " to='/sandwichs'>Sandwitch</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
