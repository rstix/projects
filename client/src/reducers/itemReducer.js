import uuid from 'uuid'
import { GET_ITEMS, DELETE_ITEM, ADD_ITEM } from '../actions/types' 

const initialState = {
  items: [
    {id: uuid(),name: 'Egg'},
    {id: uuid(),name: 'Cheese'},
    {id: uuid(),name: 'Butter'},
    {id: uuid(),name: 'Candy'}
  ]
}

export default function(state = initialState,  action ){
  switch(action.type){
    case GET_ITEMS:
     return {...state}
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item=>item.id !== action.payload )
      }
    default:
      return state
  } 
}

