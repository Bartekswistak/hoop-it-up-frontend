const initialState = { users: []}

export default function usersReducer(state = initialState, action) {

  switch (action.type) {

    case 'DISPLAY_USERS':
    return  {users: action.users}

    case "ADD_USER":
    return {...state, users: [...state.users, action.user]}

        default:
        return state
  }
}