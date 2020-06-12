export const updateObjInArrey = (item, id, objPropName, objNewProp) => {
    return item.map( u => {
        if (u[objPropName] === id){
            return {...u, ...objNewProp}
        } 
        return u;
    })
}

            // state.users.map( u => {
            //     if (u.id === action.id){
            //         return {...u, followed: false}
            //     } 
            //     return u;