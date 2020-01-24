import React from 'react'
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import Logout from './Logout.js'
import PlayerCardContainer from '../containers/PlayerCardContainer.js'

 const NavBar = ({currentUser}) => {

    return (
    
       <div className="NavBar">
       <h3 className="navlink">Welcome {currentUser.username}</h3>
            
            <Route  component ={PlayerCardContainer}/>
            {!!currentUser ? <Logout/> : null}
       </div>
    )
}

const mapStateToProps = (state) => {
    return ({
      currentUser: state.currentUser
    })
  }
  
export default connect(mapStateToProps)(NavBar)