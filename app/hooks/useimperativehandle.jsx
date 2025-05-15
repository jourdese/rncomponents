import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

// Custom Input Component with imperative handle
const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef(null);
  const [value, setValue] = useState('');

  // Expose custom methods to parent component
  useImperativeHandle(ref, () => ({
    // Custom focus with optional message
    focus: (message = '') => {
      if (message) setValue(message);
      inputRef.current?.focus();
    },
    // Custom clear method
    clear: () => {
      setValue('');
      inputRef.current?.clear();
    },
    // Custom validate method
    validate: () => {
      return value.length >= 3;
    },
    // Get current value
    getValue: () => value,
  }));

  return (
    <TextInput
      ref={inputRef}
      style={styles.input}
      value={value}
      onChangeText={setValue}
      placeholder={props.placeholder}
    />
  );
});

// Custom Form Component with imperative handle
const CustomForm = forwardRef((props, ref) => {
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);

  // Expose form methods to parent
  useImperativeHandle(ref, () => ({
    // Reset entire form
    reset: () => {
      nameInputRef.current?.clear();
      emailInputRef.current?.clear();
    },
    // Validate entire form
    validate: () => {
      const isNameValid = nameInputRef.current?.validate();
      const isEmailValid = emailInputRef.current?.validate();
      return isNameValid && isEmailValid;
    },
    // Get form data
    getFormData: () => ({
      name: nameInputRef.current?.getValue(),
      email: emailInputRef.current?.getValue(),
    }),
  }));

  return (
    <View style={styles.form}>
      <CustomInput
        ref={nameInputRef}
        placeholder="Enter name"
      />
      <CustomInput
        ref={emailInputRef}
        placeholder="Enter email"
      />
    </View>
  );
});

const UseImperativeHandleExample = () => {
  const inputRef = useRef(null);
  const formRef = useRef(null);

  // Input control functions
  const handleFocus = () => {
    inputRef.current?.focus('Hello!');
  };

  const handleClear = () => {
    inputRef.current?.clear();
  };

  const handleValidate = () => {
    const isValid = inputRef.current?.validate();
    alert(`Input is ${isValid ? 'valid' : 'invalid'}`);
  };

  // Form control functions
  const handleReset = () => {
    formRef.current?.reset();
  };

  const handleValidateForm = () => {
    const isValid = formRef.current?.validate();
    alert(`Form is ${isValid ? 'valid' : 'invalid'}`);
  };

  const handleSubmit = () => {
    if (formRef.current?.validate()) {
      const formData = formRef.current?.getFormData();
      alert(`Submitted: ${JSON.stringify(formData, null, 2)}`);
    } else {
      alert('Form is invalid!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>useImperativeHandle Hook Tutorial</Text>

      {/* Single Input Example */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Single Input Example</Text>
        <CustomInput ref={inputRef} placeholder="Type something..." />
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button} onPress={handleFocus}>
            <Text style={styles.buttonText}>Focus</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleClear}>
            <Text style={styles.buttonText}>Clear</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleValidate}>
            <Text style={styles.buttonText}>Validate</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Form Example */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Form Example</Text>
        <CustomForm ref={formRef} />
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button} onPress={handleReset}>
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleValidateForm}>
            <Text style={styles.buttonText}>Validate</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Explanation */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>How it works:</Text>
        <Text style={styles.explanation}>
          useImperativeHandle customizes the instance value that is exposed to parent components when using ref.
        </Text>
        <Text style={styles.bulletPoint}>
          • Must be used with forwardRef
        </Text>
        <Text style={styles.bulletPoint}>
          • Customizes exposed methods
        </Text>
        <Text style={styles.bulletPoint}>
          • Controls what parent sees
        </Text>
      </View>

      {/* Best Practices */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Best Practices</Text>
        <Text style={styles.bulletPoint}>
          • Use sparingly
        </Text>
        <Text style={styles.bulletPoint}>
          • Prefer props for most use cases
        </Text>
        <Text style={styles.bulletPoint}>
          • Keep interface minimal
        </Text>
        <Text style={styles.bulletPoint}>
          • Document exposed methods
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
  form: {
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    padding: 10,
    marginBottom: 10,
    fontSize: 16,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 6,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
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

export default UseImperativeHandleExample;
