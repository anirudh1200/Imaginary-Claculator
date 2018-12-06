/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  state = {
    input: ''
  }

  onNumberClick = (recievedNumber) => {
    if(recievedNumber == '='){
      return this.calculateResult();
    }
    this.setState({
      input: this.state.input+recievedNumber
    })
  }

  render() {

    let numRows = [];
    let nums = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ['.', 0, '=']]
    for(let i=0; i<4; i++){
      let row = [];
      for(let j=0; j<3; j++){
        row.push(
          <TouchableOpacity style={styles.btn} onPress={() => this.onNumberClick(nums[i][j])}>
            <Text style={styles.btnText}>{nums[i][j]}</Text>
          </TouchableOpacity>
        );
      }
      numRows.push(<View style={styles.row}>{row}</View>)
    }

    let operatorCols = [];
    let operators = ['+', '-', '*', '/'];
    for(let i=0; i<4; i++){
      operatorCols.push(
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>{operators[i]}</Text>
        </TouchableOpacity>
      )
    }

    return (
      <View style={styles.container}>
          <View style={styles.result}></View>
          <View style={styles.inputs}>
            <Text>{this.state.input}</Text>
          </View>
          <View style={styles.buttons}>
            <View style={styles.numbers}>
              {numRows}
            </View>
            <View style={styles.operators}>
              {operatorCols}
            </View>
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
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  column: {
    flex: 1
  },
  inputs: {
    flex: 1,
    backgroundColor: '#CCCCCC'
  },
  buttons: {
    flex: 7,
    flexDirection: 'row'
  },
  btn: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  btnText: {
    fontSize: 25
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
