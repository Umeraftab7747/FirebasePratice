/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import auth from '@react-native-firebase/auth';

export class Signup extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder={'EMAIL'}
          style={[styles.txtinput, {marginTop: '20%'}]}
        />
        <TextInput placeholder={'Passowrd'} style={styles.txtinput} />
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.txt}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  txt: {color: '#fff', fontWeight: 'bold', fontSize: 15},
  txtinput: {
    backgroundColor: '#ff3',
    width: '60%',
    height: '7%',
    marginTop: '4%',
  },
  btn: {
    backgroundColor: 'tomato',
    height: '6%',
    width: '30%',
    marginTop: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
