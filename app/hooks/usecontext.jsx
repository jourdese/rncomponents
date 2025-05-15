import { createContext, useContext, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Create a context for theme
const ThemeContext = createContext();

// Create a context for user
const UserContext = createContext();

// Theme Provider Component
const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const theme = {
    isDarkMode,
    toggleTheme: () => setIsDarkMode(prev => !prev),
    colors: {
      background: isDarkMode ? '#1a1a1a' : '#ffffff',
      text: isDarkMode ? '#ffffff' : '#000000',
      primary: isDarkMode ? '#66a3ff' : '#007AFF',
    },
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

// User Provider Component
const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: 'Guest',
    isLoggedIn: false,
  });

  const login = () => {
    setUser({
      name: 'John Doe',
      isLoggedIn: true,
    });
  };

  const logout = () => {
    setUser({
      name: 'Guest',
      isLoggedIn: false,
    });
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use theme
const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Custom hook to use user
const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

// Header Component using context
const Header = () => {
  const { user } = useUser();
  const { colors } = useTheme();

  return (
    <View style={[styles.header, { backgroundColor: colors.primary }]}>
      <Text style={[styles.headerText, { color: '#fff' }]}>
        Welcome, {user.name}!
      </Text>
    </View>
  );
};

// Content Component using context
const Content = () => {
  const { colors } = useTheme();
  const { user, login, logout } = useUser();

  return (
    <View style={[styles.content, { backgroundColor: colors.background }]}>
      <Text style={[styles.text, { color: colors.text }]}>
        User Status: {user.isLoggedIn ? 'Logged In' : 'Guest'}
      </Text>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: colors.primary }]}
        onPress={user.isLoggedIn ? logout : login}
      >
        <Text style={styles.buttonText}>
          {user.isLoggedIn ? 'Logout' : 'Login'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

// Theme Toggle Component
const ThemeToggle = () => {
  const { isDarkMode, toggleTheme, colors } = useTheme();

  return (
    <View style={styles.themeToggle}>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: colors.primary }]}
        onPress={toggleTheme}
      >
        <Text style={styles.buttonText}>
          Toggle {isDarkMode ? 'Light' : 'Dark'} Mode
        </Text>
      </TouchableOpacity>
    </View>
  );
};

// Main Component
const UseContextExample = () => {
  return (
    <ThemeProvider>
      <UserProvider>
        <View style={styles.container}>
          <Text style={styles.title}>useContext Hook Tutorial</Text>
          
          {/* Components using context */}
          <Header />
          <Content />
          <ThemeToggle />

          {/* Explanation */}
          <View style={styles.explanation}>
            <Text style={styles.explanationTitle}>How it works:</Text>
            <Text style={styles.explanationText}>
              1. ThemeContext provides theme-related data{'\n'}
              2. UserContext provides user-related data{'\n'}
              3. Components can access context using useContext{'\n'}
              4. Changes to context trigger re-renders{'\n'}
              5. Custom hooks (useTheme, useUser) provide type safety
            </Text>
          </View>
        </View>
      </UserProvider>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  header: {
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: '600',
  },
  content: {
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  button: {
    padding: 10,
    borderRadius: 6,
    alignItems: 'center',
    marginVertical: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  themeToggle: {
    marginBottom: 20,
  },
  explanation: {
    padding: 15,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
  },
  explanationTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  explanationText: {
    fontSize: 14,
    lineHeight: 20,
  },
});

export default UseContextExample;
