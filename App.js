/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {StyleSheet, View, Animated} from 'react-native';

export default class App extends Component {
  state = {
    ballX: new Animated.Value(0),
    ballY: new Animated.Value(0),
  };

  componentDidMount() {
    Animated.sequence([
      Animated.timing(this.state.ballY, {
        toValue: 200,
        duration: 500,
      }),

      Animated.delay(1000),

      Animated.timing(this.state.ballX, {
        toValue: 200,
        duration: 500,
      }),
    ]).start();
  }

  render() {
    console.disableYellowBox = true;
    return (
      <View style={styles.container}>
        <Animated.View
          style={[styles.ball, {top: this.state.ballY, left: this.state.ballX}]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  ball: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#F00',
  },
});
