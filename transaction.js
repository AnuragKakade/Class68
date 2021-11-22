import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class TransactionScreen extends Component(){
    render() {
        return (
          <View style={styles.container}>
            <Text style={styles.text}> TRANSACTION SCREEN </Text>
          </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#5653D4',
    },
    text: {
      color: '#ffff',
      fontSize: 30,
    },
  });