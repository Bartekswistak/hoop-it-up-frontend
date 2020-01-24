import { resetLoginForm } from './loginForm.js'
import { resetSignupForm } from './signupForm.js'
import { getMyPlayerCard } from './myPlayerCard.js'

export const setCurrentUser = (user) => {
    return {
        type: "SET_CURRENT_USER",
        user
    }
}

export const clearCurrentUser = () => {
    return {
        type: "CLEAR_CURRENT_USER"
    }
}

export const addUser = user => {
    return {
      type: "ADD_USER",
      user
    }
  }

export const login = (credentials, history) => {

    return dispatch => {
        return fetch('http://localhost:3000/api/v1/login', {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(credentials)
    }).then(res => res.json())
      .then(user => {
        if(user.error) {
            alert(user.error)
        } else {
            // debugger
            dispatch(setCurrentUser(user))
            dispatch(getMyPlayerCard())
            dispatch(resetLoginForm())
            history.push(`/user/${user.id}`)
        }
    }).catch(console.log)
  }
}

export const logout = () => {
    return dispatch => {
        dispatch(clearCurrentUser())
        return fetch('http://localhost:3000/api/v1/logout', {
            credentials: "include",
            method: "DELETE"    
        })
    }
}

export const getCurrentUser = () => {
    return dispatch => {
        return fetch('http://localhost:3000/api/v1/get_current_user', {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": 'application/json'
            }
    }).then(res => res.json())
    .then(user => {
        if(user.error) {
            alert(user.error)
        } else {
             dispatch(setCurrentUser(user))
             dispatch(getMyPlayerCard())
        }
    }).catch(console.log)
  }
}

export const signup = (credentials, history) => {
    return dispatch => {
       const userInfo = {
           user: credentials
       }
        return fetch('http://localhost:3000/api/v1/signup', {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(userInfo),     
            }).then(res => res.json())
             .then(user => {
               if(user.error) {
                 alert(user.error)
               } else {
                dispatch(setCurrentUser(user))
                dispatch(resetSignupForm())
                dispatch(addUser(signup))
                history.push(`/user/${user.id}`)
            }
         }).catch(console.log)
    }
}