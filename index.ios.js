import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class PushNotification extends Component {
  render() {
    return (
        <View style={styles.container}>
          <App />
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});

AppRegistry.registerComponent('PushNotification', () => PushNotification);
