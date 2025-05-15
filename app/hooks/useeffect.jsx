import { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Dimensions, AppState } from 'react-native';

const UseEffectExample = () => {
  // States for different examples
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [dimensions, setDimensions] = useState(Dimensions.get('window'));
  const [appState, setAppState] = useState(AppState.currentState);
  const [timer, setTimer] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  // 1. Effect that runs on every render
  useEffect(() => {
    console.log('Component rendered');
  });

  // 2. Effect that runs only once (on mount)
  useEffect(() => {
    console.log('Component mounted');
    // Cleanup function (runs on unmount)
    return () => {
      console.log('Component will unmount');
    };
  }, []);

  // 3. Effect that runs when specific dependencies change
  useEffect(() => {
    if (count > 0) {
      console.log(`Count changed to: ${count}`);
    }
  }, [count]);

  // 4. Effect with cleanup (dimension change and app state example)
  useEffect(() => {
    // Handle dimension changes
    const dimensionChange = Dimensions.addEventListener('change', ({ window }) => {
      setDimensions(window);
    });

    // Handle app state changes
    const appStateChange = AppState.addEventListener('change', nextAppState => {
      setAppState(nextAppState);
    });

    // Cleanup: remove listeners
    return () => {
      dimensionChange.remove();
      appStateChange.remove();
    };
  }, []);

  // 5. Effect with timer (cleanup example)
  useEffect(() => {
    let intervalId;

    if (isTimerRunning) {
      intervalId = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    }

    // Cleanup: clear interval when component unmounts or when isTimerRunning changes
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isTimerRunning]);

  return (
      <View style={styles.container}>
        <Text style={styles.title}>useEffect Hook Tutorial</Text>

        {/* Example 1: Basic Counter */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Effect on State Change</Text>
          <Text style={styles.text}>Count: {count}</Text>
          <TouchableOpacity
              style={styles.button}
              onPress={() => setCount((prev) => prev + 1)}
          >
            <Text style={styles.buttonText}>Increment</Text>
          </TouchableOpacity>
          <Text style={styles.note}>
            Check console for logs when count changes
          </Text>
        </View>

        {/* Example 2: Input with Effect */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Effect with Dependencies</Text>
          <TextInput
              style={styles.input}
              value={name}
              onChangeText={setName}
              placeholder="Enter your name"
          />
          <Text style={styles.text}>
            {name ? `Hello, ${name}!` : 'Please enter your name'}
          </Text>
        </View>

        {/* Example 3: Device Dimensions and App State */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Effect with Cleanup (Dimensions & App State)</Text>
          <Text style={styles.text}>
            Width: {dimensions.width}px{'\n'}
            Height: {dimensions.height}px{'\n'}
            App State: {appState}
          </Text>
          <Text style={styles.note}>
            Rotate device or change app state to see updates
          </Text>
        </View>

        {/* Example 4: Timer with Cleanup */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Timer with Cleanup</Text>
          <Text style={styles.text}>Timer: {timer} seconds</Text>
          <TouchableOpacity
              style={[styles.button, isTimerRunning && styles.stopButton]}
              onPress={() => setIsTimerRunning(!isTimerRunning)}
          >
            <Text style={styles.buttonText}>
              {isTimerRunning ? 'Stop Timer' : 'Start Timer'}
            </Text>
          </TouchableOpacity>
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
  text: {
    fontSize: 16,
    marginVertical: 5,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 6,
    alignItems: 'center',
    marginVertical: 10,
  },
  stopButton: {
    backgroundColor: '#dc3545',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    padding: 10,
    marginBottom: 10,
    fontSize: 16,
  },
  note: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
    marginTop: 5,
  },
});

export default UseEffectExample;
