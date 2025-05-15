import { useState } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

// Custom Loading component to demonstrate props
const CustomLoader = ({ size, color, text }) => (
  <View style={styles.loaderContainer}>
    <ActivityIndicator size={size} color={color} />
    {text && <Text style={styles.loaderText}>{text}</Text>}
  </View>
);

// Custom Button with loading state
const LoadingButton = ({ onPress, loading, text }) => (
  <TouchableOpacity
    style={[styles.button, loading && styles.buttonDisabled]}
    onPress={onPress}
    disabled={loading}
  >
    {loading ? (
      <ActivityIndicator color="#fff" size="small" />
    ) : (
      <Text style={styles.buttonText}>{text}</Text>
    )}
  </TouchableOpacity>
);

export default function ActivityIndicatorExample() {
  const [loading, setLoading] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);

  // Simulate a loading operation
  const simulateLoading = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  // Simulate an async button operation
  const handleButtonPress = () => {
    setButtonLoading(true);
    setTimeout(() => setButtonLoading(false), 2000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ActivityIndicator Examples</Text>

      {/* Basic ActivityIndicator */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Basic Indicators</Text>
        <View style={styles.row}>
          <ActivityIndicator />
          <ActivityIndicator size="large" />
          <ActivityIndicator size="small" color="#007AFF" />
        </View>
      </View>

      {/* Custom Loader with text */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Custom Loaders</Text>
        <View style={styles.row}>
          <CustomLoader size="small" color="#28a745" text="Loading..." />
          <CustomLoader size="large" color="#dc3545" text="Please wait" />
        </View>
      </View>

      {/* Loading overlay example */}
      <TouchableOpacity style={styles.button} onPress={simulateLoading}>
        <Text style={styles.buttonText}>Show Loading Overlay</Text>
      </TouchableOpacity>

      {loading && (
        <View style={styles.overlay}>
          <ActivityIndicator size="large" color="#fff" />
          <Text style={styles.overlayText}>Loading...</Text>
        </View>
      )}

      {/* Button with loading state */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Button with Loading State</Text>
        <LoadingButton
          onPress={handleButtonPress}
          loading={buttonLoading}
          text="Click Me"
        />
      </View>
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
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 8,
  },
  loaderContainer: {
    alignItems: 'center',
  },
  loaderText: {
    marginTop: 5,
    fontSize: 12,
    color: '#666',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonDisabled: {
    backgroundColor: '#99c4ff',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayText: {
    color: '#fff',
    marginTop: 10,
    fontSize: 16,
  },
});
