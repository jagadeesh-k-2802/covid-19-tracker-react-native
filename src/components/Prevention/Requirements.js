import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const Requirements = () => {
  const items = [
    {
      name: 'Mask',
      color: 'rgb(251,227,225)',
      source: require('../../assets/mask.png')
    },
    {
      name: 'Gloves',
      color: 'rgb(251,239,215)',
      source: require('../../assets/gloves.png')
    },
    {
      name: 'Alcohol',
      color: 'rgb(221,238,248)',
      source: require('../../assets/alcohol.png')
    },
    {
      name: 'Soap',
      color: 'rgb(231,235,236)',
      source: require('../../assets/soap.png')
    }
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Requirements</Text>
      <Text style={styles.subtitle}>Helps you prevent viruses better</Text>

      <View style={styles.requiredItems}>
        {items.map(item => (
          <View key={item.name} style={styles.item}>
            <View
              style={[styles.imageWrapper, styles.setBackground(item.color)]}>
              <Image style={styles.image} source={item.source} />
            </View>
            <Text style={styles.itemName}>{item.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginTop: 10, marginHorizontal: 13 },
  title: { fontSize: 20, marginBottom: 5 },
  subtitle: { fontSize: 14, color: 'rgb(140,140,140)' },
  requiredItems: { flexDirection: 'row', marginVertical: 15 },
  imageWrapper: {
    padding: 15,
    backgroundColor: 'red',
    borderRadius: 50,
    marginRight: 20
  },
  image: { width: 35, height: 35 },
  item: { alignItems: 'center', justifyContent: 'center' },
  itemName: {
    marginRight: 12,
    fontSize: 12,
    marginTop: 2,
    color: 'rgb(75,75,75)'
  },
  setBackground: backgroundColor => ({ backgroundColor })
});

export default Requirements;
