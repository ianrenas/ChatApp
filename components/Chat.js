import React from 'react';
import { Text, Button, StyleSheet } from 'react-native';
import { GiftedChat, SystemMessage, Bubble } from 'react-native-gifted-chat'
import { View, Platform, KeyboardAvoidingView } from 'react-native';

export default class Chat extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: [],
    }
  }

  //called after chat component mounts
  componentDidMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
        {
          _id: 2,
          text: 'This is a system message',
          createdAt: new Date(),
          system: true,
        },
      ]
    })
  }

  //called when a user sends a message
  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }

  //changes color of the bubbles
  renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#000'
          }
        }}
      />
    )
  }

  componentDidUpdate() {
    let name = this.props.route.params.name; // OR ...
    //let { name } = this.props.route.params;
    this.props.navigation.setOptions({ title: name });
  }


  render() {
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

          <GiftedChat
            renderBubble={this.renderBubble.bind(this)}
            messages={this.state.messages}
            onSend={messages => this.onSend(messages)}
            user={{
              _id: 1,
            }}
          />
          {Platform.OS === 'android' ? <KeyboardAvoidingView behavior="height" /> : null}


          <Button
            title="Go to Start"
            onPress={() => this.props.navigation.navigate("Start")}
          />
        </View>
      </View>
    );
  }
}