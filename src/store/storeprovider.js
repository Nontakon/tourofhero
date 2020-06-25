import { createContext, useReducer,useContext } from "react"

const initialState = {
  data: [{
    Name: "Hero 1",
    Score: 20
  }, 
  {
    Name: "Hero 2",
    Score: 18
  }, 
  {
    Name: "Hero 3",
    Score: 15
  }]
}
  const counterReducer = (state,action) => {
    switch (action.type) {
      case "ADD_HERO":
        return {
          ...state,
          data: [...state.data, action.payload],
        };
      case "SET_HERO":
        return {
          ...state,
          data: state.data.map(({ Name, Score }, index) => {
            if (index === action.index) return action.payload;
            else return { Name, Score };
          }),
        };
      case "DEL_HERO":
        return {
          ...state,
          data: state.data.filter(({ Name, Score }, index) => {
            return (index !== action.index)
          }),
        };
      default:
        return state;
    };
    }
export const useStoreReducer = () => useReducer(counterReducer, initialState)
export const StoreContext = createContext({state : initialState, dispatch: (value) => null})
export const useStoreContext = () => useContext(StoreContext)
