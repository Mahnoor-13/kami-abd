import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import DynamicallySelectedPicker from "./DynamicallySelectedPicker";

const hrs = [
  { label: "01", value: 1 },
  { label: "02", value: 2 },
  { label: "03", value: 3 },
  { label: "04", value: 4 },
  { label: "05", value: 5 },
  { label: "06", value: 6 },
  { label: "07", value: 7 },
  { label: "08", value: 8 },
  { label: "09", value: 9 },
  { label: "10", value: 10 },
  { label: "11", value: 11 },
  { label: "12", value: 12 },
];

const sec = [
  { label: "00", value: 0 },
  { label: "01", value: 1 },
  { label: "02", value: 2 },
  { label: "03", value: 3 },
  { label: "04", value: 4 },
  { label: "05", value: 5 },
  { label: "06", value: 6 },
  { label: "07", value: 7 },
  { label: "08", value: 8 },
  { label: "09", value: 9 },
  { label: "10", value: 10 },
  { label: "11", value: 11 },
  { label: "12", value: 12 },
  { label: "13", value: 13 },
  { label: "14", value: 14 },
  { label: "15", value: 15 },
  { label: "16", value: 16 },
  { label: "17", value: 17 },
  { label: "18", value: 18 },
  { label: "19", value: 19 },
  { label: "20", value: 20 },
  { label: "21", value: 21 },
  { label: "22", value: 22 },
  { label: "23", value: 23 },
  { label: "24", value: 24 },
  { label: "25", value: 25 },
  { label: "26", value: 26 },
  { label: "27", value: 27 },
  { label: "28", value: 28 },
  { label: "29", value: 29 },
  { label: "30", value: 30 },
  { label: "31", value: 31 },
  { label: "32", value: 32 },
  { label: "33", value: 33 },
  { label: "34", value: 34 },
  { label: "35", value: 35 },
  { label: "36", value: 36 },
  { label: "37", value: 37 },
  { label: "38", value: 38 },
  { label: "39", value: 39 },
  { label: "40", value: 40 },
  { label: "41", value: 41 },
  { label: "42", value: 42 },
  { label: "43", value: 43 },
  { label: "44", value: 44 },
  { label: "45", value: 45 },
  { label: "46", value: 46 },
  { label: "47", value: 47 },
  { label: "48", value: 48 },
  { label: "49", value: 49 },
  { label: "50", value: 50 },
  { label: "51", value: 51 },
  { label: "52", value: 52 },
  { label: "53", value: 53 },
  { label: "54", value: 54 },
  { label: "55", value: 55 },
  { label: "56", value: 56 },
  { label: "57", value: 57 },
  { label: "58", value: 58 },
  { label: "59", value: 59 },
];

const ampm = [
  { label: "AM", value: "AM" },
  { label: "PM", value: "PM" },
];

export default class Example extends React.Component {
  
  componentDidMount(){
    console.log(this.props);
  }

  state = {
    selectedItemIndex1: this.props.hrs,
    selectedItemIndex2: this.props.mins,
    selectedItemIndex3: "AM",
  };

  updateSelectedItem1(index) {
    this.setState({ selectedItemIndex1: index });
  }

  updateSelectedItem2(index) {
    this.setState({ selectedItemIndex2: index });
  }

  updateSelectedItem3(index) {
    this.setState({ selectedItemIndex3: index });
  }

  componentWillReceiveProps(nextProps){
    console.log("nextProps",nextProps.hrs, nextProps.mins)
    this.setState({
      selectedItemIndex1:nextProps.hrs,
      selectedItemIndex2:nextProps.mins,
    })
  }

  render() {
    const windowWidth = Dimensions.get("window").width / 3;
console.log(this.state.selectedItemIndex1)
    return (
      <View style={styles.parent}>
        <View nestedScrollEnabled={true} style={styles.subparent}>

        <View style={{ width: "20%" }}>
            <DynamicallySelectedPicker
              items={[]}
              onScroll={({ index, item }) => {
                this.updateSelectedItem3(item.value);
              }}
              height={150}
              selectedItemIndex={this.state.selectedItemIndex3}
              type="ampm"
              width={windowWidth}
            />
          </View>
          <View style={{ width: "100%" }}>
            <DynamicallySelectedPicker
              items={hrs}
              onScroll={({ index, item }) => {
                this.updateSelectedItem1(item.value);
              }}
              height={150}
              selectedItemIndex={this.state.selectedItemIndex1}
              type="hr"
              width={windowWidth}
            />
          </View>
          <View style={{ width: "100%" }}>
            <DynamicallySelectedPicker
              items={sec}
              onScroll={({ index, item }) => {
                this.updateSelectedItem2(item.label);
              }}
              height={150}
              selectedItemIndex={this.state.selectedItemIndex2}
              type="min"
              width={windowWidth}
            />
          </View>
          <View style={{ width: "100%" }}>
            <DynamicallySelectedPicker
              items={ampm}
              onScroll={({ index, item }) => {
                this.updateSelectedItem3(item.value);
              }}
              height={150}
              selectedItemIndex={this.state.selectedItemIndex3}
              type="ampm"
              width={windowWidth}
            />
          </View>

          <View style={{ width: "100%" }}>
            <DynamicallySelectedPicker
              items={[]}
              onScroll={({ index, item }) => {
                this.updateSelectedItem3(item.value);
              }}
              height={150}
              selectedItemIndex={this.state.selectedItemIndex3}
              type="ampm"
              width={windowWidth}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parent: {
    display: "flex",
    position: "relative",
    flexDirection: "row",
    height: 80,
    overflow: "hidden",
  },
  subparent: {
    position: "absolute",
    left: 0,
    right: 0,
    top: -35,
    width: "25%",
    display: "flex",
    flexDirection: "row",
  },
});
