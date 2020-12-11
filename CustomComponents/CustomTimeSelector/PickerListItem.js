import React from "react";
import { View, Text } from "react-native";

const PickerListItem = ({ label, style, itemColor, allItemsColor }) => {
  return (
    <View style={[style]}>
      <Text
        style={{
          fontSize: 16,
          color: itemColor ? itemColor : allItemsColor,
        }}
      >
        {label}
      </Text>
    </View>
  );
};

export default PickerListItem;
