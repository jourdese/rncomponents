import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Custom TouchableOpacity component to demonstrate props
const CustomTouchable = ({ onPress, children, backgroundColor, activeOpacity }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.touchable, { backgroundColor }]}
    activeOpacity={activeOpacity}
  >
    <Text style={styles.touchableText}>{children}</Text>
  </TouchableOpacity>
);

export default function TouchableOpacityExample() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TouchableOpacity Component Example</Text>

      {/* Basic TouchableOpacity with default opacity */}
      <CustomTouchable
        onPress={() => setCount(prev => prev + 1)}
        backgroundColor="#007AFF"
        activeOpacity={0.7}
      >
        Press Me! (0.7 opacity)
      </CustomTouchable>

      {/* TouchableOpacity with custom opacity */}
      <CustomTouchable
        onPress={() => setCount(prev => prev + 1)}
        backgroundColor="#28a745"
        activeOpacity={0.2}
      >
        Press Me! (0.2 opacity)
      </CustomTouchable>

      {/* TouchableOpacity with nested content */}
      <TouchableOpacity
        style={styles.cardTouchable}
        activeOpacity={0.8}
        onPress={() => setCount(prev => prev + 1)}
      >
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Card Title</Text>
          <Text style={styles.cardText}>
            This entire card is touchable with opacity feedback
          </Text>
        </View>
      </TouchableOpacity>

      <Text style={styles.counter}>Total Presses: {count}</Text>
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
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  touchableText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  cardTouchable: {
    marginVertical: 10,
  },
  card: {
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#dee2e6',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardText: {
    fontSize: 14,
    color: '#6c757d',
  },
  counter: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 18,
    fontWeight: '600',
  },
});
