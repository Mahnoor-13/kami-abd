import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, ScrollView, Platform, Text } from "react-native";
export default class DynamicallySelectedPicker extends React.Component {
  constructor(props) {
    super(props);
    // set picker item height for android and ios
    const { height, transparentItemRows, initialSelectedIndex } = props;
    let itemHeight = height / (transparentItemRows * 2 + 1);
    // In ios we have to manually ceil items height to eliminate distortion in the visualization, when we have big data.
    if (Platform.OS === "ios") {
      itemHeight = Math.ceil(itemHeight);
    }
    this.state = {
      itemHeight: itemHeight,
      itemIndex: initialSelectedIndex,
    };
  }
  /**
   * Generate fake items for picker top and bottom.
   * @param n
   * @returns {[]}
   */
  fakeItems(n = 3) {
    const itemsArr = [];
    for (let i = 0; i < n; i++) {
      itemsArr[i] = {
        value: -1,
        label: "",
      };
    }
    return itemsArr;
  }
  /**
   * Get extended picker items length.
   * @returns {number}
   */
  allItemsLength() {
    return this.extendedItems().length - this.props.transparentItemRows * 2;
  }
  /**
   *
   * @param event
   */
  onScroll(event) {
    const { items, onScroll } = this.props;
    const tempIndex = this.getItemTemporaryIndex(event);
    if (
      this.state.itemIndex !== tempIndex &&
      tempIndex >= 0 &&
      tempIndex < this.allItemsLength()
    ) {
      this.setItemIndex(tempIndex);
      onScroll({ index: tempIndex, item: items[tempIndex] });
    }
  }
  /**
   *
   * @param event
   * @returns {number}
   */
  getItemTemporaryIndex(event) {
    return Math.round(
      event.nativeEvent.contentOffset.y / this.state.itemHeight
    );
  }
  /**
   *
   * @param index
   */
  setItemIndex(index) {
    this.setState({
      itemIndex: index,
    });
  }
  /**
   * Add fake items to make picker almost like IOS native wheel picker.
   * @returns {*[]}
   */
  extendedItems() {
    const { transparentItemRows } = this.props;
    return [
      ...this.fakeItems(transparentItemRows),
      ...this.props.items,
      ...this.fakeItems(transparentItemRows),
    ];
  }
  /**
   *
   * @param item
   * @param index
   * @returns {*}
   */
  renderPickerListItem(item, index) {
    const { itemHeight } = this.state;
    const { allItemsColor, itemColor } = this.props;
    return (
      <View
        key={index}
        style={[
          styles.listItem,
          {
            height: itemHeight,
          },
        ]}
      >
        {this.props.type === "hr" ? (
          <Text
            style={{
              fontSize: this.props.selectedItemIndex === item.value ? 20 : 15,
              color:
                this.props.selectedItemIndex === item.value
                  ? "#ffffff"
                  : "gray",
              fontWeight: "bold",
            }}
          >
            {item.label}
          </Text>
        ) : null}
        {this.props.type === "min" ? (
          <Text
            style={{
              fontSize: this.props.selectedItemIndex === item.label ? 20 : 15,
              color:
                this.props.selectedItemIndex === item.label
                  ? "#ffffff"
                  : "gray",
              fontWeight: "bold",
            }}
          >
            {item.label}
          </Text>
        ) : null}

        {this.props.type === "ampm" ? (
          <Text
            style={{
              fontSize: this.props.selectedItemIndex === item.value ? 20 : 15,
              color:
                this.props.selectedItemIndex === item.value
                  ? "#ffffff"
                  : "gray",
              fontWeight: "bold",
            }}
          >
            {item.label}
          </Text>
        ) : null}
      </View>
    );
  }
  render() {
    const { itemIndex, itemHeight } = this.state;
    const {
      width,
      height,
      topGradientColors,
      transparentItemRows,
    } = this.props;
    return (
      <View
        style={{
          height: height,
          width: width,
        }}
      >
        <ScrollView
          nestedScrollEnabled={true}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          onScroll={(event) => {
            this.onScroll(event);
          }}
          initialScrollIndex={itemIndex}
          snapToInterval={itemHeight}
        >
          {this.extendedItems().map((item, index) => {
            return this.renderPickerListItem(item, index);
          })}
        </ScrollView>
        <View
          style={[styles.gradientWrapper, styles.bottomgradientwrapper]}
          pointerEvents="none"
        >
          <View
            colors={topGradientColors}
            style={[
              styles.pickerGradient,
              {
                height: transparentItemRows * itemHeight,
              },
            ]}
          />
        </View>
        <View
          style={[styles.gradientWrapper, styles.topgradientwrapper]}
          pointerEvents="none"
        >
          <View
            style={[
              styles.pickerGradient,
              { height: transparentItemRows * itemHeight },
            ]}
          />
        </View>
      </View>
    );
  }
}
DynamicallySelectedPicker.defaultProps = {
  items: [{ value: 0, label: "No items" }],
  onScroll: () => {},
  initialSelectedIndex: 0,
  transparentItemRows: 3,
  allItemsColor: "#000",
  selectedItemBorderColor: "#cecece",
  topGradientColors: [
    "rgba( 255, 255, 255, 1 )",
    "rgba( 255, 255, 255, 0.9 )",
    "rgba( 255, 255, 255, 0.7 )",
    "rgba( 255, 255, 255, 0.5 )",
  ],
  bottomGradientColors: [
    "rgba( 255, 255, 255, 0.5 )",
    "rgba( 255, 255, 255, 0.7 )",
    "rgba( 255, 255, 255, 0.9 )",
    "rgba( 255, 255, 255, 1 )",
  ],
};
DynamicallySelectedPicker.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.string,
      itemColor: PropTypes.string,
    })
  ),
  onScroll: PropTypes.func,
  initialSelectedIndex: PropTypes.number,
  height: PropTypes.number,
  width: PropTypes.number,
  allItemsColor: PropTypes.string,
  selectedItemBorderColor: PropTypes.string,
  topGradientColors: PropTypes.array,
  bottomGradientColors: PropTypes.array,
};
const styles = StyleSheet.create({
  listItem: {
    alignItems: "center",
    justifyContent: "center",
  },
  gradientWrapper: {
    position: "absolute",
    width: "100%",
    margin: -5,
    marginTop: 0,
  },
  pickerGradient: {
    width: "100%",
    marginTop: -4,
  },
  topgradientwrapper: {
    bottom: 0,
    borderTopWidth: 1,
    borderColor: "gray",
  },
  bottomgradientwrapper: {
    top: 0,
    borderBottomWidth: 1,
    borderColor: "gray",
  },
});
