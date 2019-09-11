import { REMOVE_FEATURE } from '../actions';
import { BUY_ITEM } from '../actions';

const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    store: [
      { id: 1, name: 'V-6 engine', price: 1500, boughtItem: false },
      { id: 2, name: 'Racing detail package', price: 1500, boughtItem: false },
      { id: 3, name: 'Premium sound system', price: 500, boughtItem: false },
      { id: 4, name: 'Rear spoiler', price: 250, boughtItem: false }]
}

const reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case REMOVE_FEATURE:
      console.log('Is the action getting here????');
      return {
        ...state,
        additionalPrice: state.additionalPrice - action.payload.price, 
        car: {...state.car, 
        features: state.car.features.filter(item => !(item.id===action.payload.id)) }
      };
    case BUY_ITEM:
    console.log('Is the buy action getting here????');
    return {
         ...state,
        //  store: state.store.map(item => {if(item.id === action.payload.id)return {...item, boughtItem: true}}),
         additionalPrice: state.additionalPrice + action.payload.price,
         car: {...state.car, 
            features: [...state.car.features, action.payload] }
        };
    default:
      return state;
  }
};

export default reducer; 