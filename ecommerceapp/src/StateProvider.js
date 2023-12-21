import React ,{createContext,useContext,useReducer} from "react";

//prepare the data layer

export const StateContext = createContext();

//wrap our app and provide the data layer
const data = [{
    id:1
}]


export const StateProvider = ({reducer,data,children}) =>{
    <StateContext.Provider value={useReducer(reducer,data)}>
        {children}
    </StateContext.Provider>
}

//pull information from the data layer

export const useStateValue =()=> useContext(StateContext);