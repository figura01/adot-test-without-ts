import {v4 as uuidv4 } from 'uuid'
import destsData from '../data/dests.json';

export const initialState = destsData;


export const destReducer = (state, action) => {
  console.log('state reducer: ', state)
  switch(action.type) {
    case 'ADD_DEST': 
      return [...state, { 
        name: action.destination.name,
        imgUrl: action.destination.imgUrl,
        address: action.destination.address,
        population: action.destination.population,
        nbrHotels: action.destination.nbrHotels,
        averageIncome: action.destination.averageIncome,
        surface: action.destination.surface,
        isActive: action.destination.isActive, 
        id: uuidv4()
      }]
      
    default:
      return state
  }
}