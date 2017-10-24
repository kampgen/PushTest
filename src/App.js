import React, { Component } from 'react'
import {
    View,
    Text,
    Button,
    TextInput
} from 'react-native'
import firebase from 'firebase'
import FCM, { FCMEvent } from 'react-native-fcm'
import {Platform} from 'react-native'

export default class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            valor: '',
            valorAtual: ''
        }
    }

    componentDidMount() {
        if (Platform.OS === 'ios') FCM.requestPermissions()

        FCM.getFCMToken().then(token => {
            console.log(token)
            // store fcm token in your server
        });

        FCM.getFCMToken().then(token => {
            console.log("TOKEN", token)
            // store fcm token in your server
        });

        FCM.getInitialNotification().then(notif => {
            if(!notif) return
            // App is closed
            if(Platform.OS === 'ios' || (notif.opened_from_tray && notif.from)) {
                this.actionsAfterLoading.push( () => this.notificationRedirect(notif.action))
            }
        }, (err) => console.warn(err))
        this.notificationListener = FCM.on(FCMEvent.Notification, notif => {
            if(!notif) return
            // App is in background
            if(notif.opened_from_tray && (Platform.OS === 'ios' || notif.from)) {
                this.notificationRedirect(notif.action)
            // App is opened
            } else {
                console.log("action");
            }
        })
    }

    notificationRedirect() {
        console.warn("teste");
    }

    componentWillMount() {
        // Initialize Firebase
        var config = {
        apiKey: "AIzaSyDwVPQum03_DMEII-Zh47N_1YYTFAb8ZAU",
        authDomain: "push-notification-2b639.firebaseapp.com",
        databaseURL: "https://push-notification-2b639.firebaseio.com",
        projectId: "push-notification-2b639",
        storageBucket: "push-notification-2b639.appspot.com",
        messagingSenderId: "379616857660"
        }
        firebase.initializeApp(config)

        // watching firebase value
        firebase.database().ref("valor").on("value", snapshot => this.setState({ valorAtual: snapshot.val() }))
    }

    salvarDados() {
        firebase.database().ref("valor").set(this.state.valor)
    }

    render() {
        return(
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}>
                <Text style={{ fontSize: 22 }}>{ this.state.valorAtual }</Text>
                <TextInput onChangeText={v => this.setState({ valor: v })} style={{ height: 60, width: 150 }} placeholder="valor aqui" value={this.state.valor} keyboardType="numeric" />
                <Button onPress={() => this.salvarDados()} title="Modificar dado" />
            </View>
        )
    }
}
