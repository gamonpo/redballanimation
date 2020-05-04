/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {StyleSheet, View, Animated} from 'react-native';

const ballY = new Animated.Value(0);
const ballX = new Animated.divide(ballY, 2);

export default class App extends Component {
  state = {
    ballY: ballY,
    ballX: ballX,
  };

  componentDidMount() {
    Animated.decay(this.state.ballY, {
      velocity: 1,
    }).start();
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
