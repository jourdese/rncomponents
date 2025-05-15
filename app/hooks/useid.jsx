import { useId } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

// Form Field Component using useId
const FormField = ({ label, type = 'text' }) => {
  const id = useId();
  const inputId = `${id}-input`;
  const errorId = `${id}-error`;
  const descriptionId = `${id}-description`;

  return (
    <View style={styles.fieldContainer}>
      <Text style={styles.label} nativeID={id}>
        {label}
      </Text>
      <TextInput
        style={styles.input}
        nativeID={inputId}
        aria-labelledby={id}
        aria-describedby={`${errorId} ${descriptionId}`}
        placeholder={`Enter ${label.toLowerCase()}`}
      />
      <Text style={styles.description} nativeID={descriptionId}>
        Enter your {label.toLowerCase()} here
      </Text>
      <Text style={styles.error} nativeID={errorId}>
        {label} is required
      </Text>
    </View>
  );
};

// Form Component with multiple fields
const Form = () => {
  const formId = useId();

  return (
    <View style={styles.form} nativeID={formId}>
      <FormField label="Username" />
      <FormField label="Email" />
      <FormField label="Password" />
    </View>
  );
};

const UseIdExample = () => {
  // Generate unique IDs for different sections
  const mainId = useId();
  const sectionId = useId();
  const exampleId = useId();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>   
      <Text style={styles.title} nativeID={mainId}>
        useId Hook Tutorial
      </Text>

      {/* Form Example */}
      <View style={styles.section} nativeID={sectionId}>
        <Text style={styles.sectionTitle}>Form Example</Text>
        <Form />
      </View>

      {/* Generated IDs Example */}
      <View style={styles.section} nativeID={exampleId}>
        <Text style={styles.sectionTitle}>Generated IDs</Text>
        <Text style={styles.idExample}>
          Main ID: {mainId}
        </Text>
        <Text style={styles.idExample}>
          Section ID: {sectionId}
        </Text>
        <Text style={styles.idExample}>
          Example ID: {exampleId}
        </Text>
      </View>

      {/* Explanation */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>How useId works:</Text>
        <Text style={styles.explanation}>
          useId is a hook for generating unique IDs that are stable across the server and client, while avoiding hydration mismatches.
        </Text>
        <Text style={styles.bulletPoint}>
          • Generates unique, stable IDs
        </Text>
        <Text style={styles.bulletPoint}>
          • Safe for server-side rendering
        </Text>
        <Text style={styles.bulletPoint}>
          • Consistent across renders
        </Text>
      </View>

      {/* Use Cases */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Common Use Cases</Text>
        <Text style={styles.bulletPoint}>
          • Form field IDs
        </Text>
        <Text style={styles.bulletPoint}>
          • ARIA attributes
        </Text>
        <Text style={styles.bulletPoint}>
          • Label associations
        </Text>
        <Text style={styles.bulletPoint}>
          • Component instances
        </Text>
      </View>

      {/* Best Practices */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Best Practices</Text>
        <Text style={styles.bulletPoint}>
          • Don't use for keys in lists
        </Text>
        <Text style={styles.bulletPoint}>
          • Use at component level
        </Text>
        <Text style={styles.bulletPoint}>
          • Prefix for multiple IDs
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
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
  form: {
    marginBottom: 15,
  },
  fieldContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    padding: 10,
    fontSize: 16,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  error: {
    fontSize: 14,
    color: '#dc3545',
    marginTop: 5,
  },
  idExample: {
    fontSize: 14,
    fontFamily: 'monospace',
    marginBottom: 5,
    padding: 5,
    backgroundColor: '#e9ecef',
    borderRadius: 4,
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
});

export default UseIdExample;
