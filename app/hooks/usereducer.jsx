import { useReducer } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

// Action types
const ACTIONS = {
  ADD_TODO: 'ADD_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO',
  DELETE_TODO: 'DELETE_TODO',
  UPDATE_INPUT: 'UPDATE_INPUT',
};

// Initial state
const initialState = {
  todos: [],
  inputText: '',
};

// Reducer function
const todoReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      if (!state.inputText.trim()) return state;
      return {
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            text: state.inputText,
            completed: false,
          },
        ],
        inputText: '', // Clear input after adding
      };

    case ACTIONS.TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };

    case ACTIONS.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload),
      };

    case ACTIONS.UPDATE_INPUT:
      return {
        ...state,
        inputText: action.payload,
      };

    default:
      return state;
  }
};

const UseReducerExample = () => {
  // Initialize useReducer
  const [state, dispatch] = useReducer(todoReducer, initialState);

  // Action creators
  const addTodo = () => {
    dispatch({ type: ACTIONS.ADD_TODO });
  };

  const toggleTodo = (id) => {
    dispatch({ type: ACTIONS.TOGGLE_TODO, payload: id });
  };

  const deleteTodo = (id) => {
    dispatch({ type: ACTIONS.DELETE_TODO, payload: id });
  };

  const updateInput = (text) => {
    dispatch({ type: ACTIONS.UPDATE_INPUT, payload: text });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>useReducer Hook Tutorial</Text>

      {/* Todo Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={state.inputText}
          onChangeText={updateInput}
          placeholder="Enter a new todo"
        />
        <TouchableOpacity style={styles.addButton} onPress={addTodo}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>

      {/* Todo List */}
      <View style={styles.todoList}>
        {state.todos.map(todo => (
          <View key={todo.id} style={styles.todoItem}>
            <TouchableOpacity
              style={styles.todoTextContainer}
              onPress={() => toggleTodo(todo.id)}
            >
              <Text
                style={[
                  styles.todoText,
                  todo.completed && styles.completedTodo,
                ]}
              >
                {todo.text}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => deleteTodo(todo.id)}
            >
              <Text style={styles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      {/* Explanation */}
      <View style={styles.explanation}>
        <Text style={styles.explanationTitle}>How useReducer works:</Text>
        <Text style={styles.explanationText}>
          1. State is managed through a reducer function{'\n'}
          2. Actions are dispatched to update state{'\n'}
          3. Reducer processes actions and returns new state{'\n'}
          4. Similar to Redux but built into React{'\n'}
          5. Great for complex state logic
        </Text>
      </View>

      {/* State Preview */}
      <View style={styles.statePreview}>
        <Text style={styles.previewTitle}>Current State:</Text>
        <Text style={styles.previewText}>
          Todos: {state.todos.length}{'\n'}
          Completed: {state.todos.filter(t => t.completed).length}
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
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    padding: 10,
    marginRight: 10,
    fontSize: 16,
  },
  addButton: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 6,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  todoList: {
    marginBottom: 20,
  },
  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 6,
    marginBottom: 10,
  },
  todoTextContainer: {
    flex: 1,
  },
  todoText: {
    fontSize: 16,
  },
  completedTodo: {
    textDecorationLine: 'line-through',
    color: '#666',
  },
  deleteButton: {
    backgroundColor: '#dc3545',
    padding: 8,
    borderRadius: 6,
    marginLeft: 10,
  },
  deleteButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  explanation: {
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
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
  statePreview: {
    backgroundColor: '#e9ecef',
    padding: 15,
    borderRadius: 8,
  },
  previewTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },
  previewText: {
    fontSize: 14,
    color: '#666',
  },
});

export default UseReducerExample;
