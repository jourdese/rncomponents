import { useDebugValue, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

// Custom hook that uses useDebugValue
const useFormInput = (initialValue = '') => {
  const [value, setValue] = useState(initialValue);
  const [isTouched, setIsTouched] = useState(false);
  const [isValid, setIsValid] = useState(true);

  // Add debug value to show the input state in React DevTools
  useDebugValue(
    { value, isTouched, isValid },
    state => `Value: ${state.value} | Touched: ${state.isTouched} | Valid: ${state.isValid}`
  );

  const handleChange = (text) => {
    setValue(text);
    setIsValid(text.length >= 3);
  };

  const handleBlur = () => {
    setIsTouched(true);
  };

  return {
    value,
    isTouched,
    isValid,
    handleChange,
    handleBlur,
  };
};

// Custom hook for authentication state
const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  // Add debug value with formatted state
  useDebugValue(
    isAuthenticated ? 'Logged In' : 'Logged Out',
    status => `Auth Status: ${status}`
  );

  const login = (username) => {
    setIsAuthenticated(true);
    setUser({ username });
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return { isAuthenticated, user, login, logout };
};

const UseDebugValueExample = () => {
  // Using our custom hooks
  const usernameInput = useFormInput('');
  const passwordInput = useFormInput('');
  const { isAuthenticated, user, login, logout } = useAuth();

  const handleSubmit = () => {
    if (usernameInput.isValid && passwordInput.isValid) {
      login(usernameInput.value);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>useDebugValue Hook Tutorial</Text>

      {/* Login Form */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Login Form Example</Text>
        
        {!isAuthenticated ? (
          <>
            {/* Username Input */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Username:</Text>
              <TextInput
                style={[
                  styles.input,
                  !usernameInput.isValid && usernameInput.isTouched && styles.invalidInput,
                ]}
                value={usernameInput.value}
                onChangeText={usernameInput.handleChange}
                onBlur={usernameInput.handleBlur}
                placeholder="Enter username"
              />
              {!usernameInput.isValid && usernameInput.isTouched && (
                <Text style={styles.errorText}>
                  Username must be at least 3 characters
                </Text>
              )}
            </View>

            {/* Password Input */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Password:</Text>
              <TextInput
                style={[
                  styles.input,
                  !passwordInput.isValid && passwordInput.isTouched && styles.invalidInput,
                ]}
                value={passwordInput.value}
                onChangeText={passwordInput.handleChange}
                onBlur={passwordInput.handleBlur}
                placeholder="Enter password"
                secureTextEntry
              />
              {!passwordInput.isValid && passwordInput.isTouched && (
                <Text style={styles.errorText}>
                  Password must be at least 3 characters
                </Text>
              )}
            </View>

            {/* Submit Button */}
            <TouchableOpacity
              style={[
                styles.button,
                (!usernameInput.isValid || !passwordInput.isValid) && styles.disabledButton,
              ]}
              onPress={handleSubmit}
              disabled={!usernameInput.isValid || !passwordInput.isValid}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <Text style={styles.welcomeText}>
              Welcome, {user.username}!
            </Text>
            <TouchableOpacity style={styles.button} onPress={logout}>
              <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
          </>
        )}
      </View>

      {/* Debug Information */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Debug Information</Text>
        <Text style={styles.debugText}>
          Open React DevTools to see the debug values for:
        </Text>
        <Text style={styles.bulletPoint}>
          • useFormInput hook state
        </Text>
        <Text style={styles.bulletPoint}>
          • useAuth hook authentication status
        </Text>
      </View>

      {/* Key Points */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Key Points</Text>
        <Text style={styles.bulletPoint}>
          • useDebugValue adds labels in React DevTools
        </Text>
        <Text style={styles.bulletPoint}>
          • Helps debug custom hooks
        </Text>
        <Text style={styles.bulletPoint}>
          • Can format debug values lazily
        </Text>
        <Text style={styles.bulletPoint}>
          • Only shown in development
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
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    padding: 10,
    fontSize: 16,
  },
  invalidInput: {
    borderColor: '#dc3545',
  },
  errorText: {
    color: '#dc3545',
    fontSize: 14,
    marginTop: 5,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  welcomeText: {
    fontSize: 18,
    marginBottom: 15,
    textAlign: 'center',
  },
  debugText: {
    fontSize: 16,
    marginBottom: 10,
  },
  bulletPoint: {
    fontSize: 14,
    marginBottom: 5,
    paddingLeft: 15,
  },
});

export default UseDebugValueExample;
