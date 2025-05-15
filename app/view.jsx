import { StyleSheet, Text, View } from 'react-native';

// CustomBox component to demonstrate props
const CustomBox = ({ backgroundColor, children }) => (
  <View style={[styles.box, { backgroundColor }]}>
    {children}
  </View>
);

export default function ViewExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>View Component Example</Text>
      
      {/* Basic View with different styling */}
      <CustomBox backgroundColor="#FF9999">
        <Text>Box with custom background</Text>
      </CustomBox>

      {/* Nested Views demonstrating layout */}
      <View style={styles.rowContainer}>
        <CustomBox backgroundColor="#99FF99">
          <Text>Flex Box 1</Text>
        </CustomBox>
        <CustomBox backgroundColor="#9999FF">
          <Text>Flex Box 2</Text>
        </CustomBox>
      </View>

      {/* View with shadow (iOS) and elevation (Android) */}
      <View style={styles.shadowBox}>
        <Text>Box with shadow</Text>
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
  box: {
    padding: 20,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  shadowBox: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    alignItems: 'center',
    // iOS shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Android shadow
    elevation: 5,
  },
});
