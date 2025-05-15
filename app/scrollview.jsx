import { ScrollView, StyleSheet, Text, View } from 'react-native';

// Custom Card component to demonstrate props
const Card = ({ title, color, children }) => (
  <View style={[styles.card, { backgroundColor: color }]}>
    <Text style={styles.cardTitle}>{title}</Text>
    {children}
  </View>
);

export default function ScrollViewExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ScrollView Component Example</Text>

      {/* Vertical ScrollView */}
      <Text style={styles.subtitle}>Vertical ScrollView:</Text>
      <ScrollView style={styles.scrollView}>
        {[1, 2, 3, 4, 5].map((num) => (
          <Card key={num} title={`Card ${num}`} color="#f0f0f0">
            <Text>This is scrollable content</Text>
            <Text>You can scroll vertically</Text>
          </Card>
        ))}
      </ScrollView>

      {/* Horizontal ScrollView */}
      <Text style={styles.subtitle}>Horizontal ScrollView:</Text>
      <ScrollView
        horizontal
        style={styles.horizontalScrollView}
        showsHorizontalScrollIndicator={false}
      >
        {['#FFD1DC', '#BDFCC9', '#B0E2FF', '#FFE5B4', '#E6E6FA'].map((color, index) => (
          <Card key={color} title={`Card ${index + 1}`} color={color}>
            <Text>Horizontal scroll</Text>
          </Card>
        ))}
      </ScrollView>
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
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10,
  },
  scrollView: {
    flex: 1,
    marginBottom: 20,
  },
  horizontalScrollView: {
    height: 150,
  },
  card: {
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    marginRight: 10,
    minWidth: 150,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
