import actionTypes from "../configs/actionTypes";

const Auth  = (state = [], action) => {
   switch(action.type) {
    case actionTypes.LOGIN:
        return[...state]
    default:
        return state
   }
}

export default Auth;
