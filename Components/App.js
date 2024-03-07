import React, { useState } from 'react';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './Store';
import './../layout.css'
import Home from './Home';
import Proposition from './Proposition';
import AjouterFood from './AjouterFood';
import PizzasList from './PizzasList';
import ListSndwitchs from './listSndwitchs';
import Login from './login';

const App = () => {
    const [isAdmin , setIsAdmin] = useState(false)
    return (
       <>
        {
            isAdmin?
            <div className='body'>
                <Provider store={store}>
                    <BrowserRouter>
                            <Routes>
                                <Route path='/' element={<Home />}/>
                                <Route path='/proposition' element={<Proposition />}/>
                                <Route path='/addFood'element={<AjouterFood />}/>
                                <Route path='/pizzasList' element={<PizzasList />} />
                                <Route path='/sandwichs' element={<ListSndwitchs />}/>
                            </Routes>
                    </BrowserRouter>
                </Provider>:
            </div>:
            <div className='bg-dark p-5' style={{height:!isAdmin?'800px':''}}>
                <Login setIsadmin={setIsAdmin}/>
            </div>
        }
       </>
    );
}

export default App;
