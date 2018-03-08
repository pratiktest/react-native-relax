import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {
    Text,
    View,
    Platform,
    StyleSheet
} from 'react-native';

export default class Quote extends Component {
    render() {
        console.log(this.props.quoteText)
        return (
            <View>
                <Text style={styles.quoteText}>"{this.props.quoteText}"</Text>
                <Text style={styles.sourceText}>-{this.props.quoteSource}</Text>
            </View>

        )
    }
}

Quote.propTypes = {
    quoteText: PropTypes.string.isRequired,
    quoteSource: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
  quoteText: {
    fontFamily: Platform.OS==="ios"?"AvenirNext-Bold":"Roboto",
    fontSize:36,
    color:"#ffffff",
    marginVertical:30
  },

  sourceText: {
    fontFamily: Platform.OS==="ios"?"AvenirNext-Italic":"Roboto",
    fontSize:20,
    color:"#4f2f4d",
    marginVertical:30,
    textAlign:"right",
    fontStyle:"italic"
  }
});