import { useState } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

// Custom TouchableHighlight component to demonstrate props
const CustomHighlight = ({
  onPress,
  children,
  backgroundColor,
  underlayColor,
}) => (
  <TouchableHighlight
    onPress={onPress}
    style={[styles.touchable, { backgroundColor }]}
    underlayColor={underlayColor}
  >
    <Text style={styles.touchableText}>{children}</Text>
  </TouchableHighlight>
);

export default function TouchableHighlightExample() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TouchableHighlight Component Example</Text>

      {/* Basic TouchableHighlight */}
      <CustomHighlight
        onPress={() => setCount(prev => prev + 1)}
        backgroundColor="#007AFF"
        underlayColor="#0056b3"
      >
        Blue Button (Light Blue Underlay)
      </CustomHighlight>

      {/* TouchableHighlight with different underlay color */}
      <CustomHighlight
        onPress={() => setCount(prev => prev + 1)}
        backgroundColor="#28a745"
        underlayColor="#1e7e34"
      >
        Green Button (Dark Green Underlay)
      </CustomHighlight>

      {/* TouchableHighlight with complex content */}
      <TouchableHighlight
        onPress={() => setCount(prev => prev + 1)}
        style={styles.cardContainer}
        underlayColor="#f8f9fa"
      >
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Interactive Card</Text>
          <Text style={styles.cardText}>
            This card changes background when pressed
          </Text>
          <View style={styles.cardFooter}>
            <Text style={styles.cardFooterText}>Press to interact</Text>
          </View>
        </View>
      </TouchableHighlight>

      <Text style={styles.counter}>Press Count: {count}</Text>

      {/* TouchableHighlight with onShowUnderlay/onHideUnderlay */}
      <TouchableHighlight
        style={styles.feedbackButton}
        onPress={() => setCount(prev => prev + 1)}
        underlayColor="#dc3545"
        onShowUnderlay={() => console.log('Underlay shown')}
        onHideUnderlay={() => console.log('Underlay hidden')}
      >
        <Text style={styles.touchableText}>
          With Press Feedback (check console)
        </Text>
      </TouchableHighlight>
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
  cardContainer: {
    marginVertical: 10,
    borderRadius: 8,
  },
  card: {
    backgroundColor: '#fff',
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
    marginBottom: 10,
  },
  cardFooter: {
    borderTopWidth: 1,
    borderTopColor: '#dee2e6',
    paddingTop: 10,
    marginTop: 10,
  },
  cardFooterText: {
    color: '#6c757d',
    fontSize: 14,
  },
  counter: {
    textAlign: 'center',
    marginVertical: 20,
    fontSize: 18,
    fontWeight: '600',
  },
  feedbackButton: {
    backgroundColor: '#dc3545',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
});
