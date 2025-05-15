import { useState } from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';

// Custom Touchable component to demonstrate props
const CustomTouchable = ({ onPress, children }) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View style={styles.touchable}>
      <Text style={styles.touchableText}>{children}</Text>
    </View>
  </TouchableWithoutFeedback>
);

export default function TouchableWithoutFeedbackExample() {
  const [count, setCount] = useState(0);
  const [lastAction, setLastAction] = useState('None');

  // Handler for different touch events
  const handlePress = () => {
    setCount(prev => prev + 1);
    setLastAction('Pressed');
  };

  const handleLongPress = () => {
    setLastAction('Long Pressed');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TouchableWithoutFeedback Example</Text>

      {/* Basic TouchableWithoutFeedback */}
      <CustomTouchable onPress={handlePress}>
        Tap me (No Visual Feedback)
      </CustomTouchable>

      {/* TouchableWithoutFeedback with multiple handlers */}
      <TouchableWithoutFeedback
        onPress={handlePress}
        onLongPress={handleLongPress}
        delayLongPress={1000}
      >
        <View style={styles.interactiveBox}>
          <Text style={styles.boxText}>
            Press or Long Press{'\n'}No Visual Feedback
          </Text>
        </View>
      </TouchableWithoutFeedback>

      {/* Status Display */}
      <View style={styles.statusContainer}>
        <Text style={styles.statusText}>Press Count: {count}</Text>
        <Text style={styles.statusText}>Last Action: {lastAction}</Text>
      </View>

      {/* Example with nested touchables */}
      <TouchableWithoutFeedback
        onPress={() => setLastAction('Outer View Pressed')}
      >
        <View style={styles.nestedContainer}>
          <Text style={styles.nestedText}>Outer Touchable</Text>
          <TouchableWithoutFeedback
            onPress={(e) => {
              // Stop event propagation
              e.stopPropagation();
              setLastAction('Inner View Pressed');
            }}
          >
            <View style={styles.innerTouchable}>
              <Text style={styles.innerText}>Inner Touchable</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
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
  touchable: {
    padding: 15,
    backgroundColor: '#007AFF',
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  touchableText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  interactiveBox: {
    padding: 20,
    backgroundColor: '#28a745',
    borderRadius: 8,
    marginVertical: 10,
    alignItems: 'center',
  },
  boxText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  statusContainer: {
    marginVertical: 20,
    padding: 15,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
  },
  statusText: {
    fontSize: 16,
    marginBottom: 5,
  },
  nestedContainer: {
    padding: 15,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    alignItems: 'center',
  },
  nestedText: {
    fontSize: 16,
    marginBottom: 10,
  },
  innerTouchable: {
    padding: 10,
    backgroundColor: '#dc3545',
    borderRadius: 8,
  },
  innerText: {
    color: '#fff',
    fontSize: 14,
  },
});
