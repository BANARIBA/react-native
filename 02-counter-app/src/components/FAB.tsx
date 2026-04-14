import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

interface FABProps {
  label: string;
  position?: "left" | "right";
  onPress?: () => void;
  onLongPress?: () => void;
}

export default function FAB({
  onPress,
  onLongPress,
  label,
  position = "right",
}: FABProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.floatingButton,
        position === "right" ? styles.positionRight : styles.positionLeft,
        pressed ? { opacity: 0.7 } : { opacity: 1 },
      ]}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Text style={{ color: "#FFF", fontSize: 20 }}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  floatingButton: {
    position: "absolute",
    bottom: 20,
    backgroundColor: "#65658f",
    padding: 20,
    borderRadius: 15,
    shadowColor: "#000", // Solo se ve en IOS
    shadowOffset: {
      // Solo se ve en IOS
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3, // Solo se ve en IOS
    elevation: 3, // Solo se ve en Android
  },
  positionRight: {
    right: 20,
  },
  positionLeft: {
    left: 20,
  },
});
