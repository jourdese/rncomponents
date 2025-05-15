import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Main screen with navigation buttons to all component examples
export default function Home() {
  const router = useRouter();

  // List of all components to showcase
  const components = [
    'View',
    'Text',
    'Image',
    'ScrollView',
    'TextInput',
    'Pressable',
    'TouchableOpacity',
    'TouchableHighlight',
    'TouchableWithoutFeedback',
    'Modal',
    'FlatList',
    'SectionList',
    'ActivityIndicator',
    'Button'
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native Components</Text>
      <ScrollView style={styles.scrollView}>
        {components.map((component) => (
          <TouchableOpacity
            key={component}
            style={styles.button}
            onPress={() => router.push(`/${component.toLowerCase()}`)}
          >
            <Text style={styles.buttonText}>{component}</Text>
          </TouchableOpacity>
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
    textAlign: 'center',
    marginVertical: 20,
  },
  scrollView: {
    flex: 1,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '600',
  },
});
