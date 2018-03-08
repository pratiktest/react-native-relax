import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  View,
  Navigator,
  TouchableOpacity
} from 'react-native';
import QuoteScreen from './QuoteScreen.js'

const relaxImage = require("./assets/relax.jpeg")
const {quotes} = require('./quotes.json')

export default class HomeScreen extends React.Component {

constructor(props){
    super(props)
    this.state={
        quoteIndex:0
    }
}

updateQuoteIndex = () => {
    console.log("hello")
    var quoteIndex = this.state.quoteIndex
    console.log(quoteIndex)
    if(quoteIndex === quotes.length-1){
        quoteIndex = 0
    }else {
        quoteIndex = quoteIndex + 1
    }
    this.setState({quoteIndex})
}

  render() {
      const quote = quotes[this.state.quoteIndex]
      console.log(quote)
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => 
          this.props.navigation.navigate('QuoteScreen', { quoteText: quote.text, quoteSource:quote.source, updateQuoteIndex:this.updateQuoteIndex })
        }>
           <Image source={relaxImage} style={styles.buttonImage}  />
         <Text style = {styles.readyText}>Click to relax</Text>
         </TouchableOpacity>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#efefef',
  },
  readyText: {
    fontSize: 20,
    fontStyle: "italic",
    color: "purple"
  },
  button: {
    backgroundColor:"#859a9b",
    borderRadius:20,
    padding:10,
    marginBottom:20,
    shadowColor:"#303838",
    shadowOffset:{width:0, height:5},
    shadowRadius:10,
    shadowOpacity:0.35
  },
  buttonImage:{
    width:200,
    height:200
  }
});

