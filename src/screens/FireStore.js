/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import firestore from '@react-native-firebase/firestore';

export class FireStore extends Component {
  state = {user: ''};

  componentDidMount = () => {
    // this.userData();
    firestore()
      .collection('users')
      .doc('lsx0ibzyu3lf7KLkmd7v')
      .onSnapshot((documentSnapshot) => {
        this.setState({user: documentSnapshot.data().name});
      });
  };

  //   userData = async () => {
  //     const user = await firestore()
  //       .collection('users')
  //       .doc('lsx0ibzyu3lf7KLkmd7v')
  //       .get();
  //     this.setState({user: user});
  //     console.log(user);
  //   };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.txt}>Name:{this.state.user}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  txt: {color: '#fa6', fontWeight: 'bold', fontSize: 25},
});
