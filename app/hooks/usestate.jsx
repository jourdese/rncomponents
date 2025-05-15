import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

// Example component using useState with different data types
const UseStateExample = () => {
  // Number state example
  const [count, setCount] = useState(0);

  // String state example
  const [text, setText] = useState('');

  // Boolean state example
  const [isVisible, setIsVisible] = useState(true);

  // Object state example
  const [user, setUser] = useState({
    name: '',
    age: '',
  });

  // Array state example
  const [items, setItems] = useState(['Item 1']);

  // Add new item to array
  const addItem = () => {
    setItems(prevItems => [...prevItems, `Item ${prevItems.length + 1}`]);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text style={styles.title}>useState Hook Tutorial</Text>
      
      {/* Number State Example */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Number State</Text>
        <Text style={styles.text}>Count: {count}</Text>
        <View style={styles.row}>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => setCount(prev => prev - 1)}
          >
            <Text style={styles.buttonText}>Decrease</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => setCount(prev => prev + 1)}
          >
            <Text style={styles.buttonText}>Increase</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* String State Example */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>String State</Text>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={setText}
          placeholder="Type something..."
        />
        <Text style={styles.text}>You typed: {text}</Text>
      </View>

      {/* Boolean State Example */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Boolean State</Text>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => setIsVisible(prev => !prev)}
        >
          <Text style={styles.buttonText}>
            {isVisible ? 'Hide Text' : 'Show Text'}
          </Text>
        </TouchableOpacity>
        {isVisible && (
          <Text style={styles.text}>This text can be toggled!</Text>
        )}
      </View>

      {/* Object State Example */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Object State</Text>
        <TextInput
          style={styles.input}
          value={user.name}
          onChangeText={(value) => setUser(prev => ({ ...prev, name: value }))}
          placeholder="Enter name"
        />
        <TextInput
          style={styles.input}
          value={user.age}
          onChangeText={(value) => setUser(prev => ({ ...prev, age: value }))}
          placeholder="Enter age"
          keyboardType="numeric"
        />
        <Text style={styles.text}>
          User: {user.name} ({user.age})
        </Text>
      </View>

      {/* Array State Example */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Array State</Text>
        <TouchableOpacity style={styles.button} onPress={addItem}>
          <Text style={styles.buttonText}>Add Item</Text>
        </TouchableOpacity>
        {items.map((item, index) => (
          <Text key={index} style={styles.text}>{item}</Text>
        ))}
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
  text: {
    fontSize: 16,
    marginVertical: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 6,
    minWidth: 100,
    alignItems: 'center',
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
});

export default UseStateExample;
