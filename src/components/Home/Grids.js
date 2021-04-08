import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import constants from '../../constants';

const Grids = ({ data }) => {
  const gridItems = [
    {
      name: 'Confirmed',
      color: constants.alertRed,
      value: data.cases
    },
    {
      name: 'Recovered',
      color: constants.secondaryLightBlue,
      value: data.recovered
    },
    {
      name: 'Death',
      color: constants.warningYellow,
      value: data.deaths
    },
    {
      name: 'Ongoing',
      color: constants.primaryBlue,
      value: data.cases - data.recovered
    }
  ];

  return (
    <View style={styles.gridWrapper}>
      {gridItems.map(item => (
        <View key={item.name} style={styles.gridItem}>
          <View style={styles.gridBoxHead}>
            <View
              style={[
                styles.gridBoxCircle,
                styles.setBackgroundColor(item.color)
              ]}
            />
            <Text style={styles.gridBoxHeadTitle}>{item.name}</Text>
          </View>

          <Text style={styles.gridBoxNumber}>{item.value}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  gridWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 12,
    justifyContent: 'center',
    marginVertical: 8
  },
  gridItem: {
    justifyContent: 'center',
    width: '46%',
    height: 100,
    margin: 6,
    borderRadius: 5,
    borderColor: '#ddd',
    borderWidth: 1.25,
    padding: 10
  },
  gridBoxHead: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  gridBoxHeadTitle: { color: 'rgb(148,148,148)', fontSize: 15 },
  gridBoxCircle: {
    borderRadius: 50,
    height: 10,
    width: 10,
    marginRight: 6
  },
  gridBoxNumber: { fontSize: 22 },
  setBackgroundColor: backgroundColor => ({ backgroundColor })
});

export default Grids;
