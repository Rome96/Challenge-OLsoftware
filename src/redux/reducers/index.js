import {ADD_USER, UPDATE_USER, DELETE_USER} from '../constants/actions-types'

const initialState = {
  users: [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      name: "Elon",
      age: '34',
      lastName: 'Musk',
      position: 'Empresario',
      photo:"https://static2.abc.es/media/estilo/2020/05/06/elon-musk-2-kg7B--620x349@abc.jpg",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      name: "Bill",
      age: '35',
      lastName: 'Gates',
      position: 'Director Ejecutivo - Mifrosoft',
      photo:"https://www.infochannel.info/sites/default/files/2020/08/06/agregar_un_titulo_15.jpg",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      name: "Steve",
      age: '36',
      lastName: 'Jobs',
      position: 'Director Ejecutivo Apple Inc',
      photo: "https://i.blogs.es/f7b0ed/steve-jobs/1366_2000.jpg",
    },
  ],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: state.users.concat(action.payload),
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    case UPDATE_USER: 
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id !== action.payload.id) {
            return user
          } else {
            return {
              ...user,
              id: action.payload.id,
              age: action.payload.age,
              name: action.payload.name,
              photo: action.payload.photo,
              lastName: action.payload.lastName,
              position: action.payload.position,
            }
          }
        })
      }
    default:
      break;
  }
  return state;
}

export default rootReducer;
