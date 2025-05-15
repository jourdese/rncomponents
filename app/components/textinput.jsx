import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

// Custom Input component to demonstrate props
const CustomInput = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  style,
}) => (
  <View style={styles.inputContainer}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      style={[styles.input, style]}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
    />
  </View>
);

export default function TextInputExample() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [bio, setBio] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TextInput Component Example</Text>

      {/* Basic text input */}
      <CustomInput
        label="Username"
        value={username}
        onChangeText={setUsername}
        placeholder="Enter your username"
      />

      {/* Secure text input */}
      <CustomInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        placeholder="Enter your password"
        secureTextEntry
      />

      {/* Multiline text input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Bio</Text>
        <TextInput
          style={[styles.input, styles.multilineInput]}
          value={bio}
          onChangeText={setBio}
          placeholder="Tell us about yourself"
          multiline
          numberOfLines={4}
          textAlignVertical="top"
        />
      </View>

      {/* Display input values */}
      <View style={styles.preview}>
        <Text style={styles.previewTitle}>Input Preview:</Text>
        <Text>Username: {username}</Text>
        <Text>Password: {'•'.repeat(password.length)}</Text>
        <Text>Bio: {bio}</Text>
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
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: '600',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
  },
  multilineInput: {
    height: 100,
  },
  preview: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
  },
  previewTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
});
