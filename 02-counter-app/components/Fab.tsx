import { Pressable, StyleSheet, Text } from "react-native"

interface FabProps {
  label: string;
  position?: 'left' | 'right';
  onPress?: () => void;
  onLongPress?: () => void;
}

export const Fab = ({ label, onPress, onLongPress, position = 'right' }: FabProps) => {
  return (
    <Pressable
      style={
        ({ pressed }) => [
          styles.floatingBtn, (position === 'right') ? styles.positionRight : styles.positionLeft,
          pressed ? { opacity: 0.7 } : { opacity: 1 }
        ]
      }
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Text style={{ color: 'white', fontSize: 20 }}>{label}</Text>
    </Pressable>


  )
}

const styles = StyleSheet.create({
  floatingBtn: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: '#65558F',
    padding: 20,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    elevation: 3,
    shadowRadius: 4,
  },
  positionRight: {
    right: 20,
  },
  positionLeft: {
    left: 20,
  },
});
