import { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Sample data for the FlatList
const initialData = Array.from({ length: 20 }, (_, index) => ({
  id: index.toString(),
  title: `Item ${index + 1}`,
  subtitle: `Description for item ${index + 1}`,
}));

// Custom ListItem component to demonstrate props
const ListItem = ({ item, onPress, selected }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.item, selected && styles.selectedItem]}
  >
    <Text style={[styles.itemTitle, selected && styles.selectedText]}>
      {item.title}
    </Text>
    <Text style={[styles.itemSubtitle, selected && styles.selectedText]}>
      {item.subtitle}
    </Text>
  </TouchableOpacity>
);

// Custom ListHeader component
const ListHeader = () => (
  <View style={styles.header}>
    <Text style={styles.headerText}>FlatList Example</Text>
    <Text style={styles.headerSubtext}>Scroll through items and select one</Text>
  </View>
);

// Custom ListFooter component
const ListFooter = ({ itemCount }) => (
  <View style={styles.footer}>
    <Text style={styles.footerText}>Total Items: {itemCount}</Text>
  </View>
);

// Custom ListEmpty component
const ListEmpty = () => (
  <View style={styles.emptyContainer}>
    <Text style={styles.emptyText}>No items available</Text>
  </View>
);

export default function FlatListExample() {
  const [selectedId, setSelectedId] = useState(null);
  const [data, setData] = useState(initialData);

  // Handler for item selection
  const handleSelect = (id) => {
    setSelectedId(id === selectedId ? null : id);
  };

  // Handler for refreshing the list
  const handleRefresh = () => {
    // Simulate data refresh
    setData([...initialData].reverse());
  };

  // Render item function for FlatList
  const renderItem = ({ item }) => (
    <ListItem
      item={item}
      onPress={() => handleSelect(item.id)}
      selected={item.id === selectedId}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={ListHeader}
        ListFooterComponent={<ListFooter itemCount={data.length} />}
        ListEmptyComponent={ListEmpty}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        refreshing={false}
        onRefresh={handleRefresh}
        // Performance props
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        windowSize={5}
        removeClippedSubviews={true}
        // Style props
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listContent: {
    padding: 20,
  },
  header: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  headerSubtext: {
    fontSize: 16,
    color: '#666',
  },
  item: {
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 8,
  },
  selectedItem: {
    backgroundColor: '#007AFF',
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
  },
  itemSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  selectedText: {
    color: '#fff',
  },
  separator: {
    height: 10,
  },
  footer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
    color: '#666',
  },
  emptyContainer: {
    padding: 20,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#666',
  },
});
