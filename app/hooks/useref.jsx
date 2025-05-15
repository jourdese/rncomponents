import { useRef, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const UseRefExample = () => {
  // Ref for TextInput
  const inputRef = useRef(null);
  
  // Ref for storing previous value
  const previousValueRef = useRef('');
  
  // Ref for counting renders
  const renderCountRef = useRef(0);
  
  // Ref for storing interval ID
  const intervalRef = useRef(null);
  
  // States
  const [inputValue, setInputValue] = useState('');
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // Update previous value ref when input changes
  const handleInputChange = (text) => {
    previousValueRef.current = inputValue;
    setInputValue(text);
  };

  // Focus input field
  const focusInput = () => {
    inputRef.current?.focus();
  };

  // Increment render count on each render
  renderCountRef.current += 1;

  // Timer controls
  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTimer(prev => prev + 1);
      }, 1000);
    }
  };

  const stopTimer = () => {
    if (isRunning) {
      clearInterval(intervalRef.current);
      setIsRunning(false);
    }
  };

  const resetTimer = () => {
    stopTimer();
    setTimer(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>useRef Hook Tutorial</Text>

      {/* Example 1: Ref to access DOM (TextInput) */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          DOM Reference
        </Text>
        <TextInput
          ref={inputRef}
          style={styles.input}
          value={inputValue}
          onChangeText={handleInputChange}
          placeholder="Type something..."
        />
        <TouchableOpacity style={styles.button} onPress={focusInput}>
          <Text style={styles.buttonText}>Focus Input</Text>
        </TouchableOpacity>
        <Text style={styles.explanation}>
          useRef can be used to access DOM elements directly
        </Text>
      </View>

      {/* Example 2: Storing Previous Value */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          Previous Value Storage
        </Text>
        <Text style={styles.value}>
          Current Value: {inputValue}
        </Text>
        <Text style={styles.value}>
          Previous Value: {previousValueRef.current}
        </Text>
        <Text style={styles.explanation}>
          useRef can persist values between renders without causing re-renders
        </Text>
      </View>

      {/* Example 3: Render Count */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          Render Counter
        </Text>
        <Text style={styles.value}>
          Component has rendered: {renderCountRef.current} times
        </Text>
        <Text style={styles.explanation}>
          useRef can track values without triggering re-renders
        </Text>
      </View>

      {/* Example 4: Timer with Interval Reference */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          Timer with Interval Reference
        </Text>
        <Text style={styles.timer}>
          {timer} seconds
        </Text>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={[styles.button, styles.timerButton]}
            onPress={startTimer}
            disabled={isRunning}
          >
            <Text style={styles.buttonText}>Start</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.timerButton]}
            onPress={stopTimer}
            disabled={!isRunning}
          >
            <Text style={styles.buttonText}>Stop</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.timerButton]}
            onPress={resetTimer}
          >
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.explanation}>
          useRef can store mutable values like timer IDs
        </Text>
      </View>

      {/* Key Points */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Key Points</Text>
        <Text style={styles.bulletPoint}>
          • useRef persists values between renders
        </Text>
        <Text style={styles.bulletPoint}>
          • Changes to ref don't trigger re-renders
        </Text>
        <Text style={styles.bulletPoint}>
          • Useful for DOM references
        </Text>
        <Text style={styles.bulletPoint}>
          • Can store any mutable value
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
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 6,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  timerButton: {
    flex: 1,
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  value: {
    fontSize: 16,
    marginBottom: 5,
  },
  timer: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  explanation: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
  },
  bulletPoint: {
    fontSize: 14,
    marginBottom: 5,
    paddingLeft: 15,
  },
});

export default UseRefExample;
