import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import moment from 'moment';
import firebase from 'firebase';

let posts=[
    {
        id:"1",
        name:"สมเกียรติ ใจดี",
        text:"เซนเซอร์วัดความชื้นในดิน",
        timestamp: 1631593713016,
        avatar: "https://firebasestorage.googleapis.com/v0/b/app-ch3-27bc3.appspot.com/o/photos%2FeiHwCEsmY0UiLkAAIYhaI18zmw03%2F1631593711902.jpg?alt=media&token=0b239da9-5494-4330-8211-1df55acd3a16",
        image:"https://firebasestorage.googleapis.com/v0/b/app-ch3-27bc3.appspot.com/o/photos%2FeiHwCEsmY0UiLkAAIYhaI18zmw03%2F1631593711902.jpg?alt=media&token=0b239da9-5494-4330-8211-1df55acd3a16"
    },
    {
        id:"2",
        name:"สมเกียรติ ใจดี",
        text:"RS485 to TTL",
        timestamp: 1631593650117,
        avatar: "https://firebasestorage.googleapis.com/v0/b/app-ch3-27bc3.appspot.com/o/photos%2FeiHwCEsmY0UiLkAAIYhaI18zmw03%2F1631593649182.jpg?alt=media&token=e954685b-afa9-465b-a81a-02ac559fcccd",
        image:"https://firebasestorage.googleapis.com/v0/b/app-ch3-27bc3.appspot.com/o/photos%2FeiHwCEsmY0UiLkAAIYhaI18zmw03%2F1631593649182.jpg?alt=media&token=e954685b-afa9-465b-a81a-02ac559fcccd"
    },
    {
        id:"3",
        name:"สมเกียรติ ใจดี",
        text:"RS485 to TTL",
        timestamp: 1631593650117,
        avatar: "https://firebasestorage.googleapis.com/v0/b/app-ch3-27bc3.appspot.com/o/photos%2FeiHwCEsmY0UiLkAAIYhaI18zmw03%2F1631593649182.jpg?alt=media&token=e954685b-afa9-465b-a81a-02ac559fcccd",
        image:"https://firebasestorage.googleapis.com/v0/b/app-ch3-27bc3.appspot.com/o/photos%2FeiHwCEsmY0UiLkAAIYhaI18zmw03%2F1631593649182.jpg?alt=media&token=e954685b-afa9-465b-a81a-02ac559fcccd"
    }
]; 


export default class HomePage extends Component {
    state = {
        email: "",
        displayName: "",
    };

    componentDidMount() {
        const { email, displayName } = firebase.auth().currentUser;
        this.setState({ email, displayName });
    }

    signOutUser = () => {
        firebase.auth().signOut();
    };

    renderPost = post =>{
        return(
            <View style={styles.feedItem}>
                <Image source={post.avatar} style={styles.avatar} />
                <View style={{ flex: 1 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <View>
                            <Text style={styles.name}>{post.name}</Text>
                            <Text style={styles.timestamp}>{moment(post.timestamp).fromNow()}</Text>
                        </View>

                        <Ionicons name="ios-more" size={24} color="#73788B" />
                    </View>
                    <Text style={styles.post}>{post.text}</Text>
                    <Image source={post.image} style={styles.postImage} resizeMode="cover" />
                    <View style={{ flexDirection: "row" }}>
                        <Ionicons name="ios-heart-empty" size={24} color="#73788B" style={{ marginRight: 16 }} />
                        <Ionicons name="ios-chatboxes" size={24} color="#73788B" />
                    </View>
                </View>
            </View>
        )    
    }

    render() {
        return (
            <View style={styles.container}>
                 <View style={styles.header}>
                    <Text style={styles.headerTitle}>Feed</Text>
                </View> 
                <FlatList
                  style={styles.feed}
                  data={posts}
                  renderItem={({item}) => this.renderPost(item)}
                  keyExtractor={item => item.id}
                  showsVerticalScrollIndicator={false}
                />

               {/*  <Text>Welcome to application</Text>
                <Text>Hi {this.state.displayName} </Text>
                <Text> {this.state.email}</Text>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={this.signOutUser}
                >
                   <Text> Logout </Text>  
                </TouchableOpacity> */}

            </View>
        )
    }
}

const styles = StyleSheet.create({
   
    container: {
        flex: 1,
        backgroundColor: "#EBECF4"
    },
    header: {
        paddingTop: 30,
        paddingBottom: 16,
        backgroundColor: "#FFF",
        alignItems: "center",
        justifyContent: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#EBECF4",
        shadowColor: "#454D65",
        shadowOffset: { height: 5 },
        shadowRadius: 15,
        shadowOpacity: 0.2,
        zIndex: 10
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: "500"
    },
    feed: {
        marginHorizontal: 16
    },
    feedItem: {
        backgroundColor: "#FFF",
        borderRadius: 5,
        padding: 8,
        flexDirection: "row",
        marginVertical: 8
    },
    avatar: {
        width: 36,
        height: 36,
        borderRadius: 18,
        marginRight: 16
    },
    name: {
        fontSize: 15,
        fontWeight: "500",
        color: "#454D65"
    },
    timestamp: {
        fontSize: 11,
        color: "#C4C6CE",
        marginTop: 4
    },
    post: {
        marginTop: 16,
        fontSize: 14,
        color: "#838899"
    },
    postImage: {
        width: undefined,
        height: 150,
        borderRadius: 5,
        marginVertical: 16
    }

});
