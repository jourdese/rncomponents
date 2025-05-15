import { Image, StyleSheet, Text, View } from 'react-native';

// Custom Image component to demonstrate props
const CustomImage = ({ source, size, borderRadius, style }) => (
  <Image
    source={source}
    style={[
      {
        width: size,
        height: size,
        borderRadius,
      },
      style,
    ]}
  />
);

export default function ImageExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Image Component Example</Text>

      {/* Basic image from URI */}
      <CustomImage
        source={{ uri: 'https://picsum.photos/200' }}
        size={200}
        borderRadius={0}
        style={styles.image}
      />

      {/* Circular image */}
      <CustomImage
        source={{ uri: 'https://picsum.photos/201' }}
        size={150}
        borderRadius={75}
        style={styles.image}
      />

      {/* Image with resize mode */}
      <Image
        source={{ uri: 'https://picsum.photos/400/200' }}
        style={styles.resizeImage}
        resizeMode="contain"
      />

      {/* Image with background color */}
      <View style={styles.backgroundContainer}>
        <CustomImage
          source={{ uri: 'https://picsum.photos/202' }}
          size={100}
          borderRadius={8}
          style={styles.image}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    marginBottom: 20,
  },
  resizeImage: {
    width: '100%',
    height: 150,
    marginBottom: 20,
  },
  backgroundContainer: {
    backgroundColor: '#f0f0f0',
    padding: 20,
    borderRadius: 8,
  },
});
