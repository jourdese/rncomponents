import { useLayoutEffect, useRef, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Animated } from 'react-native';

const UseLayoutEffectExample = () => {
  const [show, setShow] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const boxRef = useRef(null);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  // useLayoutEffect runs synchronously after all DOM mutations
  useLayoutEffect(() => {
    if (show) {
      // Measure the box dimensions synchronously
      boxRef.current?.measure((x, y, width, height) => {
        setDimensions({ width, height });
      });

      // Animate opacity synchronously
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    } else {
      fadeAnim.setValue(0);
    }
  }, [show, fadeAnim]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>useLayoutEffect Hook Tutorial</Text>

      {/* Toggle Animation Example */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Synchronous Animation</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setShow(!show)}
        >
          <Text style={styles.buttonText}>
            {show ? 'Hide' : 'Show'} Box
          </Text>
        </TouchableOpacity>

        {show && (
          <Animated.View
            ref={boxRef}
            style={[
              styles.animatedBox,
              {
                opacity: fadeAnim,
              },
            ]}
          >
            <Text style={styles.boxText}>Animated Box</Text>
          </Animated.View>
        )}

        {show && (
          <Text style={styles.dimensions}>
            Box dimensions: {dimensions.width.toFixed(0)}x{dimensions.height.toFixed(0)}
          </Text>
        )}
      </View>

      {/* Explanation */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>How it works:</Text>
        <Text style={styles.explanation}>
          useLayoutEffect runs synchronously immediately after React performs all DOM mutations, but before the browser repaints. This is useful when you need to:
        </Text>
        <Text style={styles.bulletPoint}>
          • Make DOM measurements
        </Text>
        <Text style={styles.bulletPoint}>
          • Update state based on layout
        </Text>
        <Text style={styles.bulletPoint}>
          • Prevent visual flickers
        </Text>
      </View>

      {/* Comparison with useEffect */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>useLayoutEffect vs useEffect</Text>
        <View style={styles.comparisonItem}>
          <Text style={styles.comparisonTitle}>useLayoutEffect:</Text>
          <Text style={styles.bulletPoint}>
            • Runs synchronously
          </Text>
          <Text style={styles.bulletPoint}>
            • Blocks visual updates
          </Text>
          <Text style={styles.bulletPoint}>
            • Best for layout measurements
          </Text>
        </View>
        <View style={styles.comparisonItem}>
          <Text style={styles.comparisonTitle}>useEffect:</Text>
          <Text style={styles.bulletPoint}>
            • Runs asynchronously
          </Text>
          <Text style={styles.bulletPoint}>
            • Doesn't block painting
          </Text>
          <Text style={styles.bulletPoint}>
            • Better for most side effects
          </Text>
        </View>
      </View>

      {/* Best Practices */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Best Practices</Text>
        <Text style={styles.bulletPoint}>
          • Use useLayoutEffect sparingly
        </Text>
        <Text style={styles.bulletPoint}>
          • Prefer useEffect when possible
        </Text>
        <Text style={styles.bulletPoint}>
          • Only use for DOM measurements
        </Text>
        <Text style={styles.bulletPoint}>
          • Keep operations fast to avoid blocking
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
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  animatedBox: {
    width: '100%',
    height: 100,
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  boxText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  dimensions: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  explanation: {
    fontSize: 14,
    marginBottom: 10,
    lineHeight: 20,
  },
  bulletPoint: {
    fontSize: 14,
    marginBottom: 5,
    paddingLeft: 15,
  },
  comparisonItem: {
    marginBottom: 15,
  },
  comparisonTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 5,
  },
});

export default UseLayoutEffectExample;
