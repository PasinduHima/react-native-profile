import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, StatusBar } from 'react-native';
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>My Profile</Text>
      </View>

      {/* Profile Section */}
      <View style={styles.profileSection}>
        <View style={styles.avatarContainer}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png' }}
            style={styles.avatar}
          />
          <View style={styles.verifiedBadge}>
            <MaterialCommunityIcons name="check-bold" size={24} color="#00C853" />
          </View>
        </View>

        <View style={styles.divider} />

        {/* Info Section */}
        <View style={styles.infoSection}>
          <Text style={styles.label}>Name</Text>
          <Text style={styles.value}>Pasindu Himal</Text>

          <Text style={[styles.label, { marginTop: 25 }]}>Email</Text>
          <View style={styles.row}>
            <MaterialCommunityIcons name="email" size={20} color="#000" />
            <Text style={styles.valueWithIcon}>rrphgunathilaka@students.nsbm.ac.lk</Text>
          </View>

          <Text style={[styles.label, { marginTop: 25 }]}>Points</Text>
          <View style={styles.row}>
            <FontAwesome name="star" size={20} color="#000" />
            <Text style={styles.valueWithIcon}>0</Text>
          </View>
        </View>
      </View>

      {/* FAB */}
      <TouchableOpacity style={styles.fab}>
        <MaterialCommunityIcons name="plus" size={30} color="#FFF" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: '#000',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileSection: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  avatarContainer: {
    alignSelf: 'center',
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FFCDD2',
    marginBottom: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  verifiedBadge: {
    position: 'absolute',
    bottom: 10,
    right: 15,
    backgroundColor: '#FFF',
    borderRadius: 15,
    padding: 2,
  },
  divider: {
    height: 1,
    backgroundColor: '#000',
    width: '100%',
    marginBottom: 20,
  },
  infoSection: {
    width: '100%',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
  },
  value: {
    fontSize: 16,
    color: '#555',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  valueWithIcon: {
    fontSize: 16,
    color: '#555',
    marginLeft: 10,
  },
  fab: {
    position: 'absolute',
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    right: 20,
    bottom: 30,
    backgroundColor: '#000',
    borderRadius: 30,
    elevation: 8,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
});
