/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  state = {
    textValue: 'default'
  }

  handleInputChange = (newText) => {
    this.setState({
      textValue: newText
    })
  }

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.result}></View>
          <View style={styles.inputs}></View>
          <View style={styles.buttons}>
            <View style={styles.numbers}></View>
            <View style={styles.operators}></View>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  result: {
    flex: 2,
    backgroundColor: '#FFFFFF'
  },
  inputs: {
    flex: 1,
    backgroundColor: '#CCCCCC'
  },
  buttons: {
    flex: 7,
    flexDirection: 'row'
  },
  numbers: {
    flex: 3,
    backgroundColor: '#999999'
  },
  operators: {
    flex: 1,
    backgroundColor: '#777777'
  }
});
