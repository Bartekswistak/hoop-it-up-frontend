import React from 'react'
import { connect } from 'react-redux'
import { updatePlayerCard} from '../actions/myPlayerCard.js'
import NewPlayerCard from '../components/NewPlayerCard.js'
// import PlayerCard from '../components/PlayerCard.js'

class EditPlayerCard extends React.Component { 

  constructor(props){
    super(props)

    this.state = {
    id: this.props.currentUser.playercard.id,
    player_nickname: this.props.currentUser.playercard.player_nickname,
    player_height_in_feet: this.props.currentUser.playercard.player_height_in_feet,
    player_height_in_inches: this.props.currentUser.playercard.player_height_in_inches,
    player_age: this.props.currentUser.playercard.player_age,
    player_weight: this.props.currentUser.playercard.player_weight,
    player_fav_player: this.props.currentUser.playercard.player_fav_player,
    submitted: false
  } 
  this.handleChange= this.handleChange.bind(this);
  this.handleSubmit= this.handleSubmit.bind(this); 
}

   handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

   handleSubmit = (event) => {
    event.preventDefault()
    //  debugger
    let playercardId = this.props.currentUser.playercard.id
    this.props.updatePlayerCard(this.state, playercardId, this.props.history)
    this.state.submitted = true
  }

  render() {
    // debugger
      if (this.state.submitted === false) {

    return ( 
      
      <div id="form">
        <form onSubmit= {this.handleSubmit}> 

       <h1>Edit Your PlayerCard</h1>
        
          <label>What is your nickname on the court?</label>
            <input type="text"
              value={this.state.player_nickname}
              name="player_nickname" 
              onChange={this.handleChange}/><br/>

          <label>How tall are you?</label>
            <input type="integer"
              value={this.state.player_height_in_feet}
              name="player_height_in_feet" 
              size="1"
              onChange={this.handleChange}/> Feet
            <input type="integer" 
              value={this.state.player_height_in_inches}
              name="player_height_in_inches"
              size="1" 
              onChange={this.handleChange}/>Inches<br/>
        
          <label>How much do you weigh?</label>
            <input 
              type="integer" 
              value={this.state.player_weight}
              name="player_weight" 
              size="1" 
              onChange={this.handleChange}/>Lbs<br/>
       
       <label>How old are you?</label>
            <input type="integer"
              value={this.state.player_age} 
              name="player_age" 
              size="1" 
              onChange={this.handleChange}/><br/>
       
          <label>Who is your favorite basketball player?</label>
            <input type="text" 
              value={this.state.player_fav_player}
              name="player_fav_player" 
              onChange={this.handleChange}/><br/>
        
        <input type="submit" value={"Update Player Card"} />
      </form>
    </div> 
    )
    } else {
      return( <NewPlayerCard />)
   }
  } 
}

const mapStateToProps = (state) => {
  return{
      playercard: state.myPlayerCardReducer,
      currentUser: state.currentUserReducer
    }
  }



export default connect(mapStateToProps, {updatePlayerCard})(EditPlayerCard)
