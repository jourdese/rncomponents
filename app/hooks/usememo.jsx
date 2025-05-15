import { useMemo, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const UseMemoExample = () => {
  // States for input numbers
  const [number1, setNumber1] = useState('0');
  const [number2, setNumber2] = useState('0');
  
  // State to force re-render
  const [, setForceUpdate] = useState(0);

  // Expensive calculation function
  const calculateFactorial = (num) => {
    console.log(`Calculating factorial for ${num}...`);
    if (num < 0) return 'Invalid input';
    if (num === 0) return 1;
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
    return result;
  };

  // Using useMemo for factorial calculation
  const factorial1 = useMemo(() => {
    return calculateFactorial(parseInt(number1));
  }, [number1]);

  // Without useMemo - recalculates on every render
  const factorial2 = calculateFactorial(parseInt(number2));

  // Expensive array filtering
  const numbers = useMemo(() => {
    return Array.from({ length: 1000 }, (_, i) => i + 1);
  }, []);

  // Memoized filtered array
  const evenNumbers = useMemo(() => {
    console.log('Filtering even numbers...');
    return numbers.filter(n => n % 2 === 0);
  }, [numbers]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>useMemo Hook Tutorial</Text>

      {/* Example 1: Factorial with useMemo */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>With useMemo</Text>
        <TextInput
          style={styles.input}
          value={number1}
          onChangeText={setNumber1}
          keyboardType="numeric"
          placeholder="Enter a number"
        />
        <Text style={styles.result}>
          Factorial: {factorial1.toString()}
        </Text>
        <Text style={styles.explanation}>
          This calculation is memoized and only updates when the input changes.
        </Text>
      </View>

      {/* Example 2: Factorial without useMemo */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Without useMemo</Text>
        <TextInput
          style={styles.input}
          value={number2}
          onChangeText={setNumber2}
          keyboardType="numeric"
          placeholder="Enter a number"
        />
        <Text style={styles.result}>
          Factorial: {factorial2.toString()}
        </Text>
        <Text style={styles.explanation}>
          This calculation runs on every render, even when unrelated state changes.
        </Text>
      </View>

      {/* Force Re-render Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => setForceUpdate(prev => prev + 1)}
      >
        <Text style={styles.buttonText}>
          Force Re-render
        </Text>
      </TouchableOpacity>

      {/* Array Example */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Memoized Array Operations</Text>
        <Text style={styles.result}>
          Even Numbers Count: {evenNumbers.length}
        </Text>
        <Text style={styles.explanation}>
          The array and filtering operation are memoized to prevent unnecessary recalculations.
        </Text>
      </View>

      {/* Key Points */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Key Points</Text>
        <Text style={styles.bulletPoint}>
          • useMemo memoizes computed values
        </Text>
        <Text style={styles.bulletPoint}>
          • Prevents expensive recalculations
        </Text>
        <Text style={styles.bulletPoint}>
          • Only recomputes when dependencies change
        </Text>
        <Text style={styles.bulletPoint}>
          • Useful for performance optimization
        </Text>
      </View>
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
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    padding: 10,
    marginBottom: 10,
    fontSize: 16,
  },
  result: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 5,
  },
  explanation: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  bulletPoint: {
    fontSize: 14,
    marginBottom: 5,
    paddingLeft: 15,
  },
});

export default UseMemoExample;
