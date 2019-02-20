import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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
      paddingLeft: '2%',
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
      textAlign: 'center',
      paddingLeft: '2%',
    },
    inputText: {
        fontSize: 18,
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