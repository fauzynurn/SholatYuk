/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { YellowBox } from "react-native";
import PushNotification from "react-native-push-notification";
import { Platform, StyleSheet, Text, View } from "react-native";
import BackgroundTimer from "react-native-background-timer";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

export default class App extends React.Component {
  makeNotification() {
    PushNotification.localNotification({
      /* Android Only Properties */
      id: "0", // (optional) Valid unique 32 bit integer specified as string. default: Autogenerated Unique ID
      ticker: "Time is coming!", // (optional)
      autoCancel: true, // (optional) default: true
      largeIcon: "ic_launcher", // (optional) default: "ic_launcher"
      smallIcon: "ic_notification", // (optional) default: "ic_notification" with fallback for "ic_launcher"
      bigText: "My big text that will be shown when notification is expanded", // (optional) default: "message" prop
      subText: "This is a subText", // (optional) default: none
      color: "green", // (optional) default: system default
      vibrate: true, // (optional) default: true
      vibration: 300, // vibration length in milliseconds, ignored if vibrate=false, default: 1000
      tag: "some_tag", // (optional) add tag to message
      group: "group", // (optional) add group to message
      ongoing: false, // (optional) set whether this is an "ongoing" notification
      priority: "high", // (optional) set notification priority, default: high
      visibility: "private", // (optional) set notification visibility, default: private
      importance: "high", // (optional) set notification importance, default: high

      /* iOS and Android properties */
      title: "My Notification Title", // (optional)
      message: "My Notification Message", // (required)
      playSound: false, // (optional) default: true
      soundName: "default", // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
      number: "10", // (optional) Valid 32 bit integer specified as string. default: none (Cannot be zero)
      // repeatType: "day", // (optional) Repeating interval. Check 'Repeating Notifications' section for more info.
      actions: '["Yes", "No"]' // (Android only) See the doc for notification actions to know more
    });
  }
  componentDidMount() {
    const currentTime = new Date().getTime(); //current unix timestamp
    const execTime = new Date().setHours(17, 5, 0, 0); //API call time = today at 20:00
    let timeLeft;
    if (currentTime < execTime) {
      //it's currently earlier than 20:00
      timeLeft = execTime - currentTime;
    } else {
      //it's currently later than 20:00, schedule for tomorrow at 20:00
      timeLeft = execTime + 24 * 60 * 60 * 1000 - currentTime;
    }
    console.log("timeleft:", timeLeft);
    var ref = this;
    BackgroundTimer.setTimeout(function() {
      ref.makeNotification();
      BackgroundTimer.setInterval(function() {
        ref.makeNotification();
      }, 86400000);
    }, timeLeft);
    console.log("tingting");
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});