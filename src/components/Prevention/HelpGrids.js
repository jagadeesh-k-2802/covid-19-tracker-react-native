import React, { Fragment } from 'react';
import { TouchableRipple } from 'react-native-paper';
import { View, StyleSheet, Text } from 'react-native';

import constants from '../../constants';

const HelpGrids = ({ navigation }) => (
  <View style={styles.container}>
    <TouchableRipple
      style={styles.gridItem}
      onPress={() => navigation.navigate('Detail', { title: 'Symptoms' })}>
      <Fragment>
        <Text style={styles.gridTitle}>Symptoms</Text>
        <Text style={styles.gridDescription}>
          Signs identify the risk of infection
        </Text>
      </Fragment>
    </TouchableRipple>

    <TouchableRipple
      style={styles.gridItem}
      onPress={() => navigation.navigate('Detail', { title: 'Prevention' })}>
      <Fragment>
        <Text style={styles.gridTitle}>Prevention</Text>
        <Text style={styles.gridDescription}>
          Help you avoid the risk of infection
        </Text>
      </Fragment>
    </TouchableRipple>

    <TouchableRipple
      style={styles.gridItem}
      onPress={() => navigation.navigate('Detail', { title: 'Reports' })}>
      <Fragment>
        <Text style={styles.gridTitle}>Reports</Text>
        <Text style={styles.gridDescription}>Data related to the disease</Text>
      </Fragment>
    </TouchableRipple>

    <TouchableRipple
      style={styles.gridItem}
      onPress={() =>
        navigation.navigate('Detail', {
          title: 'About',
          lightScreen: true
        })
      }>
      <Fragment>
        <Text style={styles.gridTitle}>About</Text>
        <Text style={styles.gridDescription}>
          Useful information about the infection
        </Text>
      </Fragment>
    </TouchableRipple>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: constants.primaryDarkBlue,
    paddingVertical: 10,
    paddingHorizontal: 5
  },
  gridItem: {
    backgroundColor: 'rgb(78,123,188)',
    height: 140,
    margin: 8,
    width: '45%',
    borderRadius: 5,
    padding: 10,
    justifyContent: 'center'
  },
  gridTitle: {
    fontSize: 17,
    color: '#fff',
    marginBottom: 10
  },
  gridDescription: {
    fontSize: 15,
    color: '#fff'
  }
});

export default HelpGrids;
