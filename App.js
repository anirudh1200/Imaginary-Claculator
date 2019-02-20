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
