import { SectionList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Sample data for the SectionList
const SECTIONS = [
  {
    title: 'Fruits',
    data: ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple'],
  },
  {
    title: 'Vegetables',
    data: ['Carrot', 'Broccoli', 'Spinach', 'Tomato', 'Cucumber'],
  },
  {
    title: 'Dairy',
    data: ['Milk', 'Cheese', 'Yogurt', 'Butter', 'Cream'],
  },
  {
    title: 'Grains',
    data: ['Rice', 'Wheat', 'Oats', 'Quinoa', 'Barley'],
  },
];

// Custom Section Header component to demonstrate props
const SectionHeader = ({ title, itemCount }) => (
  <View style={styles.sectionHeader}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <Text style={styles.sectionCount}>{itemCount} items</Text>
  </View>
);

// Custom Item component
const Item = ({ item, onPress }) => (
  <TouchableOpacity style={styles.item} onPress={onPress}>
    <Text style={styles.itemText}>{item}</Text>
  </TouchableOpacity>
);

// Custom List Header component
const ListHeader = () => (
  <View style={styles.header}>
    <Text style={styles.headerTitle}>Grocery Categories</Text>
    <Text style={styles.headerSubtitle}>
      Browse through different categories
    </Text>
  </View>
);

// Custom List Footer component
const ListFooter = ({ totalItems }) => (
  <View style={styles.footer}>
    <Text style={styles.footerText}>Total Items: {totalItems}</Text>
  </View>
);

export default function SectionListExample() {
  // Calculate total items
  const totalItems = SECTIONS.reduce((sum, section) => sum + section.data.length, 0);

  // Handler for item press
  const handleItemPress = (item) => {
    console.log(`Selected item: ${item}`);
  };

  return (
    <View style={styles.container}>
      <SectionList
        sections={SECTIONS}
        // Render the item
        renderItem={({ item }) => (
          <Item item={item} onPress={() => handleItemPress(item)} />
        )}
        // Render the section header
        renderSectionHeader={({ section }) => (
          <SectionHeader
            title={section.title}
            itemCount={section.data.length}
          />
        )}
        // Header and Footer
        ListHeaderComponent={ListHeader}
        ListFooterComponent={<ListFooter totalItems={totalItems} />}
        // Item separator
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        // Section separator
        SectionSeparatorComponent={() => <View style={styles.sectionSeparator} />}
        // Style props
        contentContainerStyle={styles.listContent}
        stickySectionHeadersEnabled={true}
        showsVerticalScrollIndicator={false}
        // Performance props
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        removeClippedSubviews={true}
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
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#666',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    padding: 10,
    borderRadius: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  sectionCount: {
    fontSize: 14,
    color: '#666',
  },
  item: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
  },
  itemText: {
    fontSize: 16,
  },
  separator: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 5,
  },
  sectionSeparator: {
    height: 20,
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
});
