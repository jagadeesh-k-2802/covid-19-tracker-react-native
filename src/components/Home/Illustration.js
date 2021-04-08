import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import constants from '../../constants';

const Illustration = () => (
  <View style={styles.container}>
    <View>
      <Text style={styles.title}>Stay Strong</Text>
      <Text style={styles.subtitle}>Lets Fight This Together</Text>
      <Text style={styles.hashtag}>#LetsDefeatCorona</Text>
    </View>

    <Image
      style={styles.image}
      source={require('../../assets/world-in-hands.png')}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 15
  },
  title: { fontSize: 26, marginBottom: 1 },
  subtitle: { color: 'rgb(170,170,170)', marginBottom: 8 },
  hashtag: { color: constants.primaryDarkBlue },
  image: { height: 180, width: 180 }
});

export default Illustration;
