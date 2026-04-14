import FAB from "@/components/FAB";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const [counter, setCounter] = useState<number>(0);
  return (
    <View style={styles.container}>
      <Text style={styles.textHuge}>{counter}</Text>

      <FAB
        label="+1"
        onPress={() => setCounter(counter + 1)}
        onLongPress={() => setCounter(0)}
      />

      <FAB
        label="Reset"
        position="left"
        onPress={() => setCounter(0)}
        onLongPress={() => setCounter(0)}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textHuge: {
    fontSize: 120,
    fontWeight: "100",
  },
});
