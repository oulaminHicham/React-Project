export function checkAdmin(){
    return {type:'CHECK_ADMIN'}
}

export function addpizza(data){
    return {type:'ADD_PIZZA' , payload:data}
}

export function addsandwitsh(data){
    return {type:'ADD_SANDAWITCH' , payload:data}
}

export function delItem(id){
    return {type:'DLETE_ITEM' , payload:id}
}

export function ediFood(data){
    return {type:'EDIT_FOOD' , payload:data}
}

