import { useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';

// Custom Modal component to demonstrate props
const CustomModal = ({
  visible,
  onClose,
  title,
  children,
  animationType = 'slide',
}) => (
  <Modal
    animationType={animationType}
    transparent={true}
    visible={visible}
    onRequestClose={onClose}
  >
    <View style={styles.modalOverlay}>
      <View style={styles.modalContent}>
        <Text style={styles.modalTitle}>{title}</Text>
        {children}
        <Pressable style={styles.closeButton} onPress={onClose}>
          <Text style={styles.closeButtonText}>Close</Text>
        </Pressable>
      </View>
    </View>
  </Modal>
);

export default function ModalExample() {
  const [slideModalVisible, setSlideModalVisible] = useState(false);
  const [fadeModalVisible, setFadeModalVisible] = useState(false);
  const [customModalVisible, setCustomModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modal Component Example</Text>

      {/* Button to show slide modal */}
      <Pressable
        style={styles.button}
        onPress={() => setSlideModalVisible(true)}
      >
        <Text style={styles.buttonText}>Show Slide Modal</Text>
      </Pressable>

      {/* Button to show fade modal */}
      <Pressable
        style={[styles.button, styles.fadeButton]}
        onPress={() => setFadeModalVisible(true)}
      >
        <Text style={styles.buttonText}>Show Fade Modal</Text>
      </Pressable>

      {/* Button to show custom modal */}
      <Pressable
        style={[styles.button, styles.customButton]}
        onPress={() => setCustomModalVisible(true)}
      >
        <Text style={styles.buttonText}>Show Custom Modal</Text>
      </Pressable>

      {/* Slide Modal */}
      <CustomModal
        visible={slideModalVisible}
        onClose={() => setSlideModalVisible(false)}
        title="Slide Modal"
      >
        <Text style={styles.modalText}>
          This modal slides in from the bottom
        </Text>
      </CustomModal>

      {/* Fade Modal */}
      <CustomModal
        visible={fadeModalVisible}
        onClose={() => setFadeModalVisible(false)}
        title="Fade Modal"
        animationType="fade"
      >
        <Text style={styles.modalText}>This modal fades in and out</Text>
      </CustomModal>

      {/* Custom Modal with more content */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={customModalVisible}
        onRequestClose={() => setCustomModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={[styles.modalContent, styles.customModalContent]}>
            <Text style={styles.modalTitle}>Custom Modal</Text>
            <View style={styles.customContent}>
              <Text style={styles.modalText}>
                This is a custom modal with more content and styling
              </Text>
              <View style={styles.modalButtons}>
                <Pressable
                  style={[styles.modalButton, styles.cancelButton]}
                  onPress={() => setCustomModalVisible(false)}
                >
                  <Text style={styles.modalButtonText}>Cancel</Text>
                </Pressable>
                <Pressable
                  style={[styles.modalButton, styles.confirmButton]}
                  onPress={() => setCustomModalVisible(false)}
                >
                  <Text style={styles.modalButtonText}>Confirm</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </Modal>
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
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  fadeButton: {
    backgroundColor: '#28a745',
  },
  customButton: {
    backgroundColor: '#dc3545',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    width: '80%',
    maxWidth: 500,
  },
  customModalContent: {
    height: '40%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  closeButton: {
    backgroundColor: '#6c757d',
    padding: 10,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 10,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  customContent: {
    flex: 1,
    justifyContent: 'space-between',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalButton: {
    flex: 1,
    padding: 15,
    borderRadius: 8,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#6c757d',
  },
  confirmButton: {
    backgroundColor: '#28a745',
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
