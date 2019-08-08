import React from 'react';
import {View, Linking, StyleSheet, WebView, Platform} from 'react-native';
import BaseComponent from '../sharedComponents/Base';
import styles from './styles';
import WebWebView from 'react-native-web-webview'

export default class Content extends BaseComponent {

    constructor(props) {
        super(props);
        this.getHtmlStyles = this.getHtmlStyles.bind(this);
    }

    getHtmlStyles() {
        return {
            p: {
                ...StyleSheet.flatten(styles.p),
            color: this.props.colors.textColor,
        },
    };
}

render() {

    if (Platform.OS === 'web') {
        return (
            <WebWebView
                style={{"borderWidth": 1, height: '100%'}}
                originWhitelist={['*']}
                source={{ uri: "https://volodymyr-sokol.github.io/pdf-form.html" }}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                scalesPageToFit={true}/>
        );
    }
    return (
        <WebView
            style={styles.webview}
            originWhitelist={['*']}
            source={{ uri: 'https://volodymyr-sokol.github.io/pdf-form.html' }}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            scalesPageToFit={true}/>
        );
    }
}
