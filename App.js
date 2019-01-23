import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DragItem from './components/DragItem';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.redZone}>
          <Text style={styles.redZoneText}>Red Zone</Text>
        </View>

          <View style={styles.itemFlex}>
            <DragItem />
            <DragItem />
            <DragItem />
            <DragItem />
            <DragItem />
          </View>

          <Text style={styles.itemContainerText}>Blue Zone</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  redZone: {
    height: 250,
    borderBottomWidth: 2,
    borderBottomColor: "#333333",
  },
  redZoneText: {
    color: "red",
    fontSize: 25,
    textAlign: "center",
    marginTop: 50,
  },
  itemContainer: {
    height: 250,
    backgroundColor: "#c0c0c0",
  },
  itemContainerText: {
    color: "blue",
    fontSize: 25,
    textAlign: "center",
    marginTop: 40,
  },
  itemFlex: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    marginTop: 80,
  }
});
