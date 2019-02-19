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
    input: '',
    result: '0'
  }

  calculateResult = () => {
    let input = this.state.input;
    if(this.operators.indexOf(input[input.length-1]) !=-1){
      input = input.slice(0, input.length-1);
      this.setState({input});
    }
    let result = eval(input);
    this.setState({result});
  }

  onNumberClick = (recievedNumber) => {
    if(recievedNumber === '='){
      return this.calculateResult();
    }
    this.setState({
      input: this.state.input+recievedNumber
    })
  }

  operate = (operator) => {
    let input = this.state.input;
    if(!input){
      return;
    }
    switch(operator){
      case 'C': 
          this.setState({
            input: '',
            result: '0'
          });
          break;
      case '<-':
          this.setState({
            input: input.slice(0, input.length-1)
          });
          break;
      default:
          if(this.operators.indexOf(input[input.length-1]) !=-1){
            return;
          }
          this.setState({
            input: input+operator
          });
    }
  }

  operators = ['C','<-','+', '-', '*', '/'];

  render() {

    let numRows = [];
    let nums = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ['.', 0, '=']]
    for(let i=0; i<nums.length; i++){
      let row = [];
      for(let j=0; j<nums[i].length; j++){
        row.push(
          <TouchableOpacity style={styles.btn} onPress={() => this.onNumberClick(nums[i][j])} key={j}>
            <Text style={styles.btnText}>{nums[i][j]}</Text>
          </TouchableOpacity>
        );
      }
      numRows.push(<View style={styles.row} key={i}>{row}</View>)
    }

    let operatorCols = [];
    for(let i=0; i<this.operators.length; i++){
      operatorCols.push(
        <TouchableOpacity style={styles.btn} onPress={() => this.operate(this.operators[i])} key={i}>
          <Text style={styles.btnText}>{this.operators[i]}</Text>
        </TouchableOpacity>
      )
    }

    return (
      <View style={styles.container}>
          <View style={styles.result}>
            <Text style={styles.resultText}>{this.state.result}</Text>
          </View>
          <View style={styles.inputs}>
            <Text style={styles.inputText}>{this.state.input}</Text>
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
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center'
  },
  resultText: {
    fontSize: 35,
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
    backgroundColor: '#CCCCCC',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center'
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
    fontSize: 25,
    color: 'white'
  },
  numbers: {
    flex: 3,
    backgroundColor: '#434343'
  },
  operators: {
    flex: 1,
    backgroundColor: '#636363'
  }
});
