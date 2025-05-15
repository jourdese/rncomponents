import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

// Custom ButtonGroup component to demonstrate props
const ButtonGroup = ({ title, onPress, disabled }) => (
  <View style={styles.buttonGroup}>
    <Text style={styles.buttonGroupTitle}>{title}</Text>
    <Button
      title="Primary Button"
      onPress={() => onPress('primary')}
      disabled={disabled}
    />
    <View style={styles.buttonSpacing} />
    <Button
      title="Secondary Button"
      onPress={() => onPress('secondary')}
      color="#6c757d"
      disabled={disabled}
    />
  </View>
);

export default function ButtonExample() {
  const [lastPressed, setLastPressed] = useState('None');
  const [isDisabled, setIsDisabled] = useState(false);

  // Handler for button press
  const handlePress = (buttonType) => {
    setLastPressed(buttonType);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Button Component Example</Text>

      {/* Basic Buttons */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Basic Buttons</Text>
        <Button
          title="Simple Button"
          onPress={() => handlePress('simple')}
        />
        <View style={styles.buttonSpacing} />
        <Button
          title="Custom Color Button"
          color="#28a745"
          onPress={() => handlePress('colored')}
        />
      </View>

      {/* Disabled Buttons */}
      <ButtonGroup
        title="Disabled State Example"
        onPress={handlePress}
        disabled={isDisabled}
      />
      <Button
        title={isDisabled ? "Enable Buttons" : "Disable Buttons"}
        onPress={() => setIsDisabled(!isDisabled)}
        color="#dc3545"
      />

      {/* Button with event handling */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Event Handling</Text>
        <Button
          title="Press Me"
          onPress={() => handlePress('event')}
          color="#007AFF"
        />
        <Text style={styles.eventText}>
          Last Button Pressed: {lastPressed}
        </Text>
      </View>

      {/* Buttons in different contexts */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contextual Buttons</Text>
        <View style={styles.contextButtons}>
          <View style={styles.contextButtonWrapper}>
            <Button
              title="Success"
              onPress={() => handlePress('success')}
              color="#28a745"
            />
          </View>
          <View style={styles.contextButtonWrapper}>
            <Button
              title="Danger"
              onPress={() => handlePress('danger')}
              color="#dc3545"
            />
          </View>
        </View>
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
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  buttonSpacing: {
    height: 10,
  },
  buttonGroup: {
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  buttonGroupTitle: {
    fontSize: 16,
    marginBottom: 10,
  },
  eventText: {
    marginTop: 10,
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
  },
  contextButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contextButtonWrapper: {
    flex: 1,
    marginHorizontal: 5,
  },
});
