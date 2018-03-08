import React, { Component } from 'react';
import Quote from "./Quote.js"
import NextButton from "./NextButton.js"
import {
    Text,
    View,
    StyleSheet,
    ImageBackground,
    LayoutAnimation
} from 'react-native';

const bgImage = require("./assets/bg.jpg")
const { quotes } = require('./quotes.json')


export default class QuoteScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            quoteIndex: 0
        }
    }

    componentWillUpdate(){
        LayoutAnimation.configureNext(tranquil)
    }

    updateQuoteIndex = () => {
        console.log("hello")
        var quoteIndex = this.state.quoteIndex
        if (quoteIndex === quotes.length - 1) {
            quoteIndex = 0
        } else {
            quoteIndex = quoteIndex + 1
        }
        this.setState({ quoteIndex })
    }

    render() {
        const quote = quotes[this.state.quoteIndex]

        return (
            <ImageBackground source={bgImage} style={styles.backgroundContainer}>
                <View style={styles.container}>
                    <Quote quoteText={quote.text} quoteSource={quote.source} />
                    <NextButton updateQuoteIndex={this.updateQuoteIndex} />
                </View>
            </ImageBackground>

        )
    }
}

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1, //fill space as much as it can equally
        resizeMode: "cover",//cover as much as screen
        width: undefined, //undefined means scale image to size of viewport irrespective of landscape
        height: undefined
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

const tranquil = {
    duration:500,
    create:{
        duration:1000,
        delay:300,
        type:LayoutAnimation.Types.easeIn,
        property:LayoutAnimation.Properties.opacity
    },
    update:{
        type:LayoutAnimation.Types.easeInEaseOut,
        property:LayoutAnimation.Properties.opacity
    },
    delete:{
        duration:200,
        type:LayoutAnimation.Types.easeOut,
        property:LayoutAnimation.Properties.opacity
    }
}