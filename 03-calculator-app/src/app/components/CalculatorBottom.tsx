import { Colors } from "@/shared/consts";
import { globalStyles } from "@/shared/styles/global-styles";
import * as Haptics from "expo-haptics";
import { Pressable, Text } from "react-native";

interface Props {
  label: string;
  color?: string;
  blackText?: boolean;
  doubleSize?: boolean;
  onPress: () => void;
}

const CalculatorBottom = ({
  label,
  color = Colors.darkGray,
  blackText = false,
  doubleSize = false,
  onPress,
}: Props) => {
  return (
    <Pressable
      style={({ pressed }) => ({
        ...globalStyles.button,
        backgroundColor: color,
        opacity: pressed ? 0.8 : 1,
        width: doubleSize ? 160 : 80,
      })}
      onPress={() => {
        onPress();
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      }}
    >
      <Text
        style={{
          ...globalStyles.buttonText,
          color: blackText ? "black" : "white",
        }}
      >
        {label}
      </Text>
    </Pressable>
  );
};

export default CalculatorBottom;
