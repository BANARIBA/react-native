import { Colors } from "@/shared/consts";
import { globalStyles } from "@/shared/styles/global-styles";
import { View } from "react-native";

import CalculatorBottom from "./components/CalculatorBottom";
import ThemeText from "./components/ThemeText";
import { useCalculator } from "./hooks/useCalculator";

const CalculatorApp = () => {
  const {
    formula,
    prevNumber,
    buildNumber,
    clean,
    toggleSign,
    deleteLast,
    divideOperation,
    multiplyOperation,
    substractOperation,
    addOperation,
    calculateSubResult,
  } = useCalculator();
  return (
    <View style={globalStyles.calculatorContainer}>
      {/* Resultados */}
      <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
        <ThemeText variant="h1">{formula}</ThemeText>
        {formula === prevNumber ? (
          <ThemeText variant="h2"></ThemeText>
        ) : (
          <ThemeText variant="h2">{prevNumber}</ThemeText>
        )}
      </View>
      {/* Filas de botones */}
      <View style={globalStyles.row}>
        <CalculatorBottom
          onPress={() => clean()}
          label="C"
          blackText={true}
          color={Colors.lightGray}
        />
        <CalculatorBottom
          onPress={() => toggleSign()}
          label="+/-"
          blackText={true}
          color={Colors.lightGray}
        />
        <CalculatorBottom
          onPress={() => deleteLast()}
          label="del"
          blackText={true}
          color={Colors.lightGray}
        />
        <CalculatorBottom
          onPress={() => divideOperation()}
          label="/"
          color={Colors.orange}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorBottom
          onPress={() => buildNumber("7")}
          label="7"
          blackText={false}
          color={Colors.darkGray}
        />
        <CalculatorBottom
          onPress={() => buildNumber("8")}
          label="8"
          blackText={false}
          color={Colors.darkGray}
        />
        <CalculatorBottom
          onPress={() => buildNumber("8")}
          label="8"
          blackText={false}
          color={Colors.darkGray}
        />
        <CalculatorBottom
          onPress={() => multiplyOperation()}
          label="X"
          color={Colors.orange}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorBottom
          onPress={() => buildNumber("4")}
          label="4"
          blackText={false}
          color={Colors.darkGray}
        />
        <CalculatorBottom
          onPress={() => buildNumber("5")}
          label="5"
          blackText={false}
          color={Colors.darkGray}
        />
        <CalculatorBottom
          onPress={() => buildNumber("6")}
          label="6"
          blackText={false}
          color={Colors.darkGray}
        />
        <CalculatorBottom
          onPress={() => substractOperation()}
          label="-"
          color={Colors.orange}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorBottom
          onPress={() => buildNumber("1")}
          label="1"
          blackText={false}
          color={Colors.darkGray}
        />
        <CalculatorBottom
          onPress={() => buildNumber("2")}
          label="2"
          blackText={false}
          color={Colors.darkGray}
        />
        <CalculatorBottom
          onPress={() => buildNumber("3")}
          label="3"
          blackText={false}
          color={Colors.darkGray}
        />
        <CalculatorBottom
          onPress={() => addOperation()}
          label="+"
          color={Colors.orange}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorBottom
          onPress={() => buildNumber("0")}
          label="0"
          blackText={false}
          doubleSize={true}
          color={Colors.darkGray}
        />
        <CalculatorBottom
          onPress={() => buildNumber(".")}
          label="."
          blackText={false}
          color={Colors.darkGray}
        />
        <CalculatorBottom
          onPress={calculateSubResult}
          label="="
          blackText={false}
          color={Colors.orange}
        />
      </View>
    </View>
  );
};

export default CalculatorApp;
