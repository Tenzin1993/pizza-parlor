import React, { Component } from 'react';
import { connect } from 'react-redux';

class Checkout extends Component {
    
    render(){
        return(
            <div>
            <input type="text" placeholder="Your name"></input>    
            <h2>This is the checkout component</h2>
            </div>
        )
    }
}
const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Checkout);
