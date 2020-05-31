const initialState = { users: []}

export default function usersReducer(state = initialState, action) {

  switch (action.type) {

    case 'DISPLAY_USERS':
    return  {users: action.users}

    case "ADD_USER":
    return {...state, users: [...state.users, action.user]}


    case "FETCH_PLAYERCARD":
 
    let users = state.users.map(user => {
      if (user.id === action.user.id) {
        return action.payload
      } else {
        return user
      }
    })
      return {...state, users: users}


    default:
    return state
  }
}