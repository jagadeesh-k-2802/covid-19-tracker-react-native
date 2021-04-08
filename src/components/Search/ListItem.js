import React, { Fragment, memo } from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import { TouchableRipple } from 'react-native-paper';

import constants from '../../constants';

const height = Dimensions.get('window').width / 4.91;

const ListItem = ({ item, onItemPress }) => (
  <TouchableRipple
    onPress={onItemPress.bind(this, item)}
    style={styles.listItem}>
    <Fragment>
      <View style={styles.countryPart}>
        <Text style={styles.countryTitle}>{item.country}</Text>
        <Text style={styles.subtitle(constants.alertRed)}>{`${item.deaths} +(${
          item.todayDeaths
        })`}</Text>
      </View>

      <View style={styles.confirmedPart}>
        <Text style={styles.casesTitle}>{item.cases}</Text>
        <Text style={styles.subtitle(constants.primaryBlue)}>
          {`+(${item.todayCases})`}
        </Text>
      </View>
    </Fragment>
  </TouchableRipple>
);

const styles = StyleSheet.create({
  listItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height,
    paddingHorizontal: 20
  },
  countryTitle: { fontSize: 20 },
  casesTitle: { fontSize: 23, color: constants.primaryDarkBlue },
  subtitle: color => ({ color, fontSize: 13.5 }),
  confirmedPart: { display: 'flex', alignItems: 'flex-end' }
});

export default memo(ListItem);
