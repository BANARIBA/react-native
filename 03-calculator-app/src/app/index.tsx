import React from "react";

import { Text, View } from "react-native";

import { globalStyles } from "@/shared/styles/global.style";

const CalculatorApp = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
      <Text
        style={globalStyles.mainResult}
        numberOfLines={1}
        adjustsFontSizeToFit
      >
        50 x 50
      </Text>
      <Text style={globalStyles.subResult}>2500</Text>
    </View>
  );
};

export default CalculatorApp;
