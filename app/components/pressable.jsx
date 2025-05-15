import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

// Custom Button component to demonstrate props
const CustomPressable = ({ onPress, children, style, feedbackStyle }) => (
  <Pressable
    onPress={onPress}
    style={({ pressed }) => [
      styles.pressable,
      style,
      pressed && feedbackStyle,
    ]}
  >
    {({ pressed }) => (
      <Text style={[styles.pressableText, pressed && styles.pressedText]}>
        {children}
      </Text>
    )}
  </Pressable>
);

export default function PressableExample() {
  const [pressCount, setPressCount] = useState(0);
  const [longPressCount, setLongPressCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pressable Component Example</Text>

      {/* Basic Pressable */}
      <CustomPressable
        onPress={() => setPressCount(prev => prev + 1)}
        style={styles.primaryButton}
        feedbackStyle={styles.primaryButtonPressed}
      >
        Press Me!
      </CustomPressable>
      <Text style={styles.counter}>Press count: {pressCount}</Text>

      {/* Long Press Pressable */}
      <Pressable
        onLongPress={() => setLongPressCount(prev => prev + 1)}
        style={({ pressed }) => [
          styles.pressable,
          styles.secondaryButton,
          pressed && styles.secondaryButtonPressed,
        ]}
        delayLongPress={500}
      >
        <Text style={styles.pressableText}>Long Press Me!</Text>
      </Pressable>
      <Text style={styles.counter}>Long press count: {longPressCount}</Text>

      {/* Disabled Pressable */}
      <Pressable
        style={({ pressed }) => [
          styles.pressable,
          styles.disabledButton,
          pressed && styles.disabledButtonPressed,
        ]}
        disabled
      >
        <Text style={[styles.pressableText, styles.disabledText]}>
          Disabled Button
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  pressable: {
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  primaryButton: {
    backgroundColor: '#007AFF',
  },
  primaryButtonPressed: {
    backgroundColor: '#0056b3',
  },
  secondaryButton: {
    backgroundColor: '#6c757d',
  },
  secondaryButtonPressed: {
    backgroundColor: '#545b62',
  },
  disabledButton: {
    backgroundColor: '#e9ecef',
  },
  disabledButtonPressed: {
    backgroundColor: '#e9ecef',
  },
  pressableText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  pressedText: {
    opacity: 0.8,
  },
  disabledText: {
    color: '#6c757d',
  },
  counter: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 16,
  },
});
