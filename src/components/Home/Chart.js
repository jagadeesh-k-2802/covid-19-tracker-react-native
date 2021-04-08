import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { PieChart } from 'react-native-svg-charts';

import { capitalize } from '../../utils/functions';
import constants from '../../constants';

const Chart = ({ data }) => {
  let total = 0;

  const getColor = key => {
    if (key === 'recovered') {
      return constants.secondaryLightBlue;
    } else if (key === 'cases') {
      return constants.primaryBlue;
    }

    return constants.warningYellow;
  };

  const transformedData = Object.entries(data).map(([key, value]) => {
    total += value;

    return {
      value,
      svg: { fill: getColor(key) },
      key
    };
  });

  const legendItems = [
    { name: 'cases', color: constants.primaryBlue },
    { name: 'recovered', color: constants.secondaryLightBlue },
    { name: 'deaths', color: constants.warningYellow }
  ];

  return (
    <View style={styles.chartWrapper}>
      <PieChart
        padAngle={0}
        innerRadius={60}
        data={transformedData}
        style={styles.pieChart}
        animate
        animationDuration={500}
      />

      <View style={styles.legendWrapper}>
        {legendItems.map(item => (
          <View key={item.name} style={styles.legendItem}>
            <View
              style={[styles.legendMark, styles.setBackgroundColor(item.color)]}
            />

            <View>
              <Text style={styles.legendTitle}>{capitalize(item.name)}</Text>
              <Text>{Math.round((data[item.name] / total) * 100)}%</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chartWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 45
  },
  pieChart: { height: 160, width: 160 },
  legendWrapper: { display: 'flex', flexDirection: 'column' },
  legendItem: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'baseline'
  },
  legendMark: {
    borderRadius: 5,
    height: 10,
    width: 25,
    marginRight: 15
  },
  legendTitle: { color: 'rgb(150,150,150)' },
  setBackgroundColor: backgroundColor => ({ backgroundColor })
});

export default Chart;
