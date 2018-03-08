import React, { Component} from 'react';
import PropTypes from 'prop-types'
import Quote from "./Quote.js"
import {
    Text,
    View,
    StyleSheet,
    ImageBackground,
    TouchableOpacity
} from 'react-native';


export default class NextButton extends Component {
    render() {
        console.log(this.props)
        return (

        <TouchableOpacity style={styles.button} onPress= {() => this.props.updateQuoteIndex()}>
            <Text style = {styles.buttonText}>Next Thought</Text>
        </TouchableOpacity>

        )
    }
}

NextButton.propTypes= {
    updateQuoteIndex:PropTypes.func.isRequired
}

const styles = StyleSheet.create({
    button:{
        borderWidth:2,
        borderColor:"#ffffff",
        padding:10
    },
    buttonText:{
        color:"#ffffff",
        fontSize:18
    }
});