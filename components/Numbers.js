import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from '../styles';

const Numbers = props => {
    let numRows = [];
    let nums = [[7, 8, 9], [4, 5, 6], [1, 2, 3], ['.', 0, '=']]
    for(let i=0; i<nums.length; i++){
      let row = [];
      for(let j=0; j<nums[i].length; j++){
        row.push(
          <TouchableOpacity style={styles.btn} onPress={() => props.onNumberClick(nums[i][j])} key={j}>
            <Text style={styles.btnText}>{nums[i][j]}</Text>
          </TouchableOpacity>
        );
      }
      numRows.push(<View style={styles.row} key={i}>{row}</View>)
    }
    return(
      <View style={styles.numbers}>
        {numRows}
      </View>
    )
}

export default Numbers;