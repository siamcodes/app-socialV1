import React, { Component } from 'react';
import {StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import firebase from 'firebase';
import Fire from "../Fire";

export default class LoadingPage extends Component {

    componentDidMount() {
  /*       firebase.auth().onAuthStateChanged(user => {
            this.props.navigation.navigate(user ? "App" : "Auth");
        }) */
        if (Fire.shared.uid) {
            this.props.navigation.navigate("App");
        } else {
            firebase.auth().onAuthStateChanged(user => {
                this.props.navigation.navigate(user ? "App" : "Auth");
            });
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" />
                <Text> Loading... </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
