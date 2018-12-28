import { Text, StyleSheet, View } from "react-native";
import React, { Component } from "react";

class ScheduleItem extends React.Component {
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.namelabel}>
          {this.props.name != null ? this.props.name : "Not initialized"}
        </Text>
        <Text style={styles.timelabel}>
          {this.props.time != null ? this.props.time : "Not initialized"}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderBottomColor: "#efefef",
    borderBottomWidth: 1
  },
  namelabel: {
    fontSize: 22,
    marginTop: 12,
    marginLeft: 22,
    marginBottom: 2
  },
  timelabel: {
    fontSize: 18,
    color: "#786BFF",
    marginLeft: 22,
    marginBottom: 12
  }
});
export default ScheduleItem;
