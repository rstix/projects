import uuid from 'uuid'
import { GET_ITEM, DELETE_ITEM, ADD_ITEM } from '../actions/types' 

const initialState = {
  items: [
    {id: uuid(),name: 'Egg'},
    {id: uuid(),name: 'Cheese'},
    {id: uuid(),name: 'Butter'},
    {id: uuid(),name: 'Milk'}
  ]
}

export default function(state=initialState, action){
  switch(action.type){
    case GET_ITEM:
     return {...state}
    default:
      return state
  } 
}

