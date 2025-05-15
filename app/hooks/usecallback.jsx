import { memo, useCallback, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Memoized child component that receives callbacks
const ExpensiveComponent = memo(({ onIncrement, onDecrement, value, label }) => {
  console.log(`Rendering ExpensiveComponent: ${label}`);
  
  return (
    <View style={styles.expensiveComponent}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={onDecrement}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onIncrement}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
});

const UseCallbackExample = () => {
  // State for counters
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  
  // Example 1: Without useCallback - these functions are recreated on every render
  const incrementWithoutCallback = () => {
    setCount1(c => c + 1);
  };
  
  const decrementWithoutCallback = () => {
    setCount1(c => c - 1);
  };
  
  // Example 2: With useCallback - these functions are memoized
  const incrementWithCallback = useCallback(() => {
    setCount2(c => c + 1);
  }, []); // Empty dependency array since we're using the function updater
  
  const decrementWithCallback = useCallback(() => {
    setCount2(c => c - 1);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>useCallback Hook Tutorial</Text>
      
      {/* Without useCallback */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Without useCallback</Text>
        <Text style={styles.explanation}>
          These callback functions are recreated on every render, causing the child component to re-render unnecessarily.
        </Text>
        <ExpensiveComponent
          label="Counter 1"
          value={count1}
          onIncrement={incrementWithoutCallback}
          onDecrement={decrementWithoutCallback}
        />
      </View>
      
      {/* With useCallback */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>With useCallback</Text>
        <Text style={styles.explanation}>
          These callback functions are memoized and only change when dependencies change, preventing unnecessary re-renders.
        </Text>
        <ExpensiveComponent
          label="Counter 2"
          value={count2}
          onIncrement={incrementWithCallback}
          onDecrement={decrementWithCallback}
        />
      </View>
      
      {/* Key Points */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Key Points</Text>
        <Text style={styles.bulletPoint}>
          • useCallback memoizes callback functions
        </Text>
        <Text style={styles.bulletPoint}>
          • Useful when passing callbacks to optimized child components
        </Text>
        <Text style={styles.bulletPoint}>
          • Helps prevent unnecessary re-renders
        </Text>
        <Text style={styles.bulletPoint}>
          • Should be used with React.memo for child components
        </Text>
      </View>
      
      <Text style={styles.note}>
        Note: Check the console logs to see when components re-render
      </Text>
    </View>
  );
};

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
  section: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  explanation: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
    lineHeight: 20,
  },
  expensiveComponent: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 5,
  },
  value: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 6,
    minWidth: 60,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  bulletPoint: {
    fontSize: 14,
    marginBottom: 5,
    paddingLeft: 15,
  },
  note: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
    textAlign: 'center',
  },
});

export default UseCallbackExample;
