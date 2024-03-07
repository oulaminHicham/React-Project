import {Proposition} from '../Data/Proposition'
import {Pizzas} from '../Data/Pizza'
import {Sandwitch} from '../Data/Sandawitch'

const initailState={
    Propostion:Proposition,
    Pizza:Pizzas,
    Sandawitch:Sandwitch,
    isAdmin:false,
    showDetails:false,
    seurshKey:''
}

export default function foodReducer(state = initailState , action){
    switch(action.type){
        case "CHECK_ADMIN" :
            return {...state , isAdmin:true} ;
        case "SEURSH" :
            return {...state , seurshKey:action.payload} ;
        case "ADD_PIZZA" :
            return {...state ,
                    Pizza:[...state.Pizza , action.payload ],
                    Propostion:[...state.Propostion , action.payload] } ;
        case "ADD_SANDAWITCH" :
            return {...state ,
                    Sandawitch:[...state.Sandawitch , action.payload ],
                    Propostion:[...state.Propostion , action.payload] } ;
        case "DLETE_ITEM":
            return {...state ,
                    Pizza:state.Pizza.filter(p=>p.id != action.payload) ,
                    Sandawitch:state.Sandawitch.filter(p=>p.id != action.payload),
                    Propostion:state.Propostion.filter(p=>p.id != action.payload)}
        case 'EDIT_FOOD':
            return {...state ,
                    Pizza:state.Pizza.map(piza => piza.id == action.payload.id ? { ...piza,
                        id:action.payload.id ,Name:action.payload.Name , price:action.payload.price ,
                        Ingridient:action.payload.Ingridient}:piza ),

                    Sandawitch:state.Sandawitch.map(san => san.id == action.payload.id ? {...san,
                        id:action.payload.id, Name:action.payload.Name , price:action.payload.price ,
                        Ingridient:action.payload.Ingridient}:san ),

            
                    }
        default :
            return state ;
    }
}
