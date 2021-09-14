import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import firebase from 'firebase';

export default class LoginPage extends Component {

    state = {
        email: "",
        password: "",
        errorMessage: null
    };

    handleLogin = () => {
        const { email, password } = this.state;
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch(error => this.setState({ errorMessage: error.message }));
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={{ textTransform: "uppercase", fontSize: 30, fontWeight:600 }}>Login</Text>
                <View style={styles.errorMessage}>
                    {
                        this.state.errorMessage &&
                        <Text style={{ color: "red" }}>{this.state.errorMessage}</Text>
                    }
                </View>
                <View>
                    <Text style={styles.inputTitle}>Email:</Text>
                    <TextInput
                        autoCapitalize="none"
                        onChangeText={email => this.setState({ email })}
                        value={this.state.email}
                        style={styles.input}
                    />
                </View>
                <View>
                    <Text style={styles.inputTitle}>Password:</Text>
                    <TextInput
                        secureTextEntry
                        autoCapitalize="none"
                        onChangeText={password => this.setState({ password })}
                        value={this.state.password}
                        style={styles.input}
                    />
                </View>
                <TouchableOpacity onPress={this.handleLogin} style={styles.button}>
                    <Text style={{ color: "#FFF" }}>Sign in</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ alignSelf: "center", marginTop: 30 }}
                    onPress={() => this.props.navigation.navigate("Register")}
                >
                    <Text style={{ color: "#414959", fontSize: 13 }}>
                        Not yet registered? <Text style={{ fontWeight: "500", color: "#E9446A" }}>Register</Text>
                    </Text>
                </TouchableOpacity>

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
    inputTitle: {
        color: "#8A8F9E",
        fontSize: 10,
        textTransform: "uppercase"
    },
    input: {
        borderBottomColor: "#8A8F9E",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: "#161F3D"
    },
    button: {
        marginTop: 10,
        marginHorizontal: 30,
        backgroundColor: "#FF0099",
        borderRadius: 20,
        height: 40,
        width: 100,
        alignItems: "center",
        justifyContent: "center"
    },
    errorMessage: {
        height: 72,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 30
    },

});