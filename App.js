/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Platform, Text, View } from 'react-native';
import styles from './styles';
import Numbers from './components/Numbers';
import Operators from './components/Operators';

type Props = {};
export default class App extends Component<Props> {

  // Here we are considering two inputs
  // One that is being displayed to user
  // And other with value of symbols
  // Example: input = 7+π  =>  actualInput = 7+3.14159
  state = {
    input: '',
    actualInput: '',
    result: '0'
  }

  calculateResult = () => {
    let input = this.state.actualInput;
    // To remove last char if we have operator in end
    if(this.operators.indexOf(input[input.length-1]) !=-1){
      input = input.slice(0, input.length-1);
      this.setState({input});
    }
    // Evaluating result
    let result = eval(input);
    this.setState({
      result,
      input: result,
      actualInput: result
    });
  }

  onNumberClick = (recievedNumber) => {
    if(recievedNumber === '='){
      return this.calculateResult();
    }
    this.setState({
      input: this.state.input+recievedNumber,
      actualInput: this.state.actualInput+recievedNumber
    })
  }

  operate = (operator) => {
    let input = this.state.input;
    let actualInput = this.state.actualInput;
    if(!input){
      return;
    }
    switch(operator){
      case 'C': 
          this.setState({
            input: '',
            actualInput: '',
            result: '0'
          });
          break;
      case '<-':
          this.setState({
            input: input.slice(0, input.length-1),
            actualInput: actualInput.slice(0, actualInput.length-1)
          });
          break;
      case 'π':
          this.setState({
            input: input+operator,
            actualInput: actualInput+String(Math.PI)
          });
          break;
      case 'e':
          this.setState({
            input: input+operator,
            actualInput: actualInput+String(Math.E)
          });
          break;
      default:
          // Preventing two operators together
          if(this.operators.indexOf(input[input.length-1]) !=-1){
            return;
          }
          this.setState({
            input: input+operator,
            actualInput: actualInput+operator
          });
    }
  }

  operators = ['C','<-','+', '-', '*', '/','i', 'e', 'π'];

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.result}>
            <Text style={styles.resultText}>{this.state.result}</Text>
          </View>
          <View style={styles.inputs}>
            <Text style={styles.inputText}>{this.state.input}</Text>
          </View>
          <View style={styles.buttons}>
            <Numbers onNumberClick={this.onNumberClick} />
            <Operators operate={this.operate} operators={this.operators} />
          </View>
      </View>
    );
  }
}
