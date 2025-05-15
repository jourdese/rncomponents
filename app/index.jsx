import { useRouter } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Main screen with navigation buttons to all component examples
export default function Home() {
  const router = useRouter();
  const [componentsExpanded, setComponentsExpanded] = useState(false);
  const [hooksExpanded, setHooksExpanded] = useState(false);

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

  // List of hooks tutorials
  const hooks = [
    'useCallback',
    'useContext',
    'useDebugValue',
    'useEffect',
    'useId',
    'useImperativeHandle',
    'useLayoutEffect',
    'useMemo',
    'useReducer',
    'useRef',
    'useState'
  ];

  // Render a section with expandable content
  const ExpandableSection = ({ title, expanded, onToggle, items, onItemPress }) => (
    <View style={styles.section}>
      <TouchableOpacity style={styles.sectionHeader} onPress={onToggle}>
        <Text style={styles.sectionTitle}>{title}</Text>
        <Text style={styles.expandIcon}>{expanded ? '▼' : '▶'}</Text>
      </TouchableOpacity>
      {expanded && (
        <View style={styles.sectionContent}>
          {items.map((item) => (
            <TouchableOpacity
              key={item}
              style={styles.button}
              onPress={() => onItemPress(item)}
            >
              <Text style={styles.buttonText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native Learning</Text>
      <ScrollView style={styles.scrollView}>
        {/* Components Section */}
        <ExpandableSection
          title="Components"
          expanded={componentsExpanded}
          onToggle={() => setComponentsExpanded(!componentsExpanded)}
          items={components}
          onItemPress={(component) => router.push(`/${component.toLowerCase()}`)}
        />

        {/* Hooks Section */}
        <ExpandableSection
          title="Hooks Tutorials"
          expanded={hooksExpanded}
          onToggle={() => setHooksExpanded(!hooksExpanded)}
          items={hooks}
          onItemPress={(hook) => router.push(`/hooks/${hook.toLowerCase()}`)}
        />
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
  section: {
    marginBottom: 15,
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    overflow: 'hidden',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#007AFF',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  expandIcon: {
    fontSize: 16,
    color: '#fff',
  },
  sectionContent: {
    padding: 10,
  },
  button: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#e1e1e1',
  },
  buttonText: {
    color: '#333',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '500',
  },
});
