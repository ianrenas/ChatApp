import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default class Chat extends React.Component {

  render() {
    let name = this.props.route.params.name; // OR ...
    //let { name } = this.props.route.params;
    this.props.navigation.setOptions({ title: name });

    let bgColor = this.props.route.params.bgColor;

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View
          style={{
            backgroundColor: bgColor,
            width: '100%',
            height: '100%',
          }}
        >
          <Button
            title="Go to Start"
            onPress={() => this.props.navigation.navigate("Start")}
          />
        </View>
      </View>
    );
  }
}