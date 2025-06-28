import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Fab } from './components/Fab';



const counterInitialState: number = 0;

export default function App() {

  const [counter, setCounter] = useState<number>(counterInitialState);

  return (
    <View style={styles.container}>
      <Text style={styles.textHuge}>{counter}</Text>

      <Fab 
        label='+1'
        position='right'
        onPress={() => setCounter(counter + 1)} 
        onLongPress={() => setCounter(counterInitialState)}
      />

      <Fab 
        label='Reset'
        position='left'
        onPress={() => setCounter(counterInitialState)} 
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textHuge: {
    fontSize: 120,
    fontWeight: '100',
  },
});
