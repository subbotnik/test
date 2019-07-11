import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class Home extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    const { data, clickCounter } = this.props;
    return (
      <View>
        <Text>Home Screen</Text>
        <TouchableOpacity onPress={clickCounter}>
          <Text>{`Click ${data}`}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Home;
