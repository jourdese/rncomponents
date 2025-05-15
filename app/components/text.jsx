import { StyleSheet, Text, View } from 'react-native';

// Custom Text component to demonstrate props
const CustomText = ({ color, size, weight, children }) => (
  <Text style={[styles.text, { color, fontSize: size, fontWeight: weight }]}>
    {children}
  </Text>
);

export default function TextExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Text Component Example</Text>

      {/* Basic text with different styles */}
      <CustomText color="#007AFF" size={20} weight="bold">
        Custom colored and sized text
      </CustomText>

      {/* Text with line break handling */}
      <Text style={styles.paragraph} numberOfLines={2}>
        This is a long text that will be truncated after two lines. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Text>

      {/* Nested text with different styles */}
      <Text style={styles.paragraph}>
        This is <Text style={styles.bold}>bold</Text> and this is{' '}
        <Text style={styles.italic}>italic</Text> text.
      </Text>

      {/* Text with line spacing */}
      <Text style={styles.spacedText}>
        This text{'\n'}
        has custom{'\n'}
        line spacing
      </Text>
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
  text: {
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10,
  },
  bold: {
    fontWeight: 'bold',
  },
  italic: {
    fontStyle: 'italic',
  },
  spacedText: {
    fontSize: 16,
    lineHeight: 30,
    marginTop: 10,
  },
});
