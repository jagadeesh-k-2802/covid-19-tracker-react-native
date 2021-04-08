import React, { useRef } from 'react';
import { Text, StatusBar, StyleSheet, View } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import { IconButton } from 'react-native-paper';
import constants from '../../constants';

const BottomSheet = ({ item, onClose }) => {
  const refRBSheet = useRef();
  item && refRBSheet.current.open();

  return (
    <RBSheet
      ref={refRBSheet}
      height={320}
      openDuration={220}
      closeDuration={180}
      closeOnDragDown
      onClose={onClose}
      animationType="fade"
      customStyles={{
        container: styles.bottomSheetCustomStyles,
        draggableIcon: styles.draggableIcon
      }}>
      {item && (
        <View style={styles.sheetContainer}>
          <StatusBar backgroundColor="#00000077" />

          <View style={styles.sheetItemContainer}>
            <View>
              <Text style={styles.countryTitle}>{item.country}</Text>
              <Text style={styles.activeCasesSubtitle}>
                Active Cases: {item.active || 0}
              </Text>
            </View>

            <IconButton
              icon="chevron-down"
              size={28}
              onPress={() => refRBSheet.current.close()}
              color="rgb(170,170,170)"
            />
          </View>

          <View style={styles.sheetItemContainer}>
            <View>
              <Text style={styles.sheetItemTitle}>Confirmed</Text>
              <Text style={styles.sheetItemSubtitle}>{item.cases || 0}</Text>
            </View>

            <View style={styles.pushToEnd}>
              <Text
                style={[
                  styles.sheetItemPercent,
                  styles.setColor(constants.primaryBlue)
                ]}>
                {`+${((item.todayCases / item.cases) * 100).toFixed(1) || 0}%`}
              </Text>

              <View style={styles.sheetItemDescription}>
                <Text
                  style={[
                    styles.sheetItemDescNumber,
                    styles.setColor(constants.primaryBlue)
                  ]}>
                  {`+${item.todayCases}`}
                </Text>
                <Text style={styles.setColor(constants.primaryBlue)}>
                  Cases In Last 12h
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.sheetItemContainer}>
            <View>
              <Text style={styles.sheetItemTitle}>Recovered</Text>
              <Text style={styles.sheetItemSubtitle}>
                {item.recovered || 0}
              </Text>
            </View>

            <View>
              <Text style={styles.sheetItemTitle}>Critical</Text>
              <Text style={styles.sheetItemSubtitle}>{item.critical || 0}</Text>
            </View>
          </View>

          <View style={styles.sheetItemContainer}>
            <View>
              <Text style={styles.sheetItemTitle}>Deaths</Text>
              <Text style={styles.sheetItemSubtitle}>{item.deaths || 0}</Text>
            </View>

            <View style={styles.pushToEnd}>
              <Text
                style={[
                  styles.sheetItemPercent,
                  styles.setColor(constants.alertRed)
                ]}>
                {`+${((item.todayDeaths / item.deaths) * 100).toFixed(1) ||
                  0}%`}
              </Text>

              <View style={styles.sheetItemDescription}>
                <Text
                  style={[
                    styles.sheetItemDescNumber,
                    styles.setColor(constants.alertRed)
                  ]}>
                  {`+${item.todayDeaths || 0}`}
                </Text>
                <Text style={styles.setColor(constants.alertRed)}>
                  Deaths In Last 12h
                </Text>
              </View>
            </View>
          </View>
        </View>
      )}
    </RBSheet>
  );
};

const styles = StyleSheet.create({
  bottomSheetCustomStyles: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10
  },
  draggableIcon: { display: 'none' },
  sheetContainer: { margin: 15, marginTop: 30 },
  sheetItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  pushToEnd: { alignItems: 'flex-end' },
  countryTitle: { fontSize: 26 },
  sheetItemTitle: { color: 'rgb(150,150,150)', fontSize: 16.5 },
  sheetItemSubtitle: { fontSize: 22 },
  sheetItemPercent: { fontSize: 13.5 },
  activeCasesSubtitle: { color: 'rgb(165,165,165)' },
  sheetItemDescription: { flexDirection: 'row', alignItems: 'baseline' },
  sheetItemDescNumber: { fontSize: 18, marginRight: 5 },
  setColor: color => ({ color })
});

export default BottomSheet;
