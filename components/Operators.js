import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from '../styles';

const Operators = props => {
	let operatorCols = [];
	for(let i=0; i<props.operators.length; i++){
		operatorCols.push(
			<TouchableOpacity style={styles.btn} onPress={() => props.operate(props.operators[i])} key={i}>
				<Text style={styles.btnText}>{props.operators[i]}</Text>
			</TouchableOpacity>
		)
	}
  return(
		<View style={styles.operators}>
			{operatorCols}
		</View>
  )
}

export default Operators;