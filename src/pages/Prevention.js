import React, { useState } from 'react';
import {
  StyleSheet,
  StatusBar,
  ScrollView,
  View,
  Image,
  Text
} from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

import AppBar, { Action } from '../components/AppBar';
import Dialog from '../components/Dialog';
import HelpGrids from '../components/Prevention/HelpGrids';
import Requirements from '../components/Prevention/Requirements';
import constants from '../constants';
import { Subheading } from 'react-native-paper';

const Prevention = ({ navigation }) => {
  const [isDialogVisible, setDialogVisible] = useState(false);
  const hideDialog = () => setDialogVisible(false);
  const isFocused = useIsFocused();

  return (
    <SafeAreaView style={styles.container}>
      {isFocused && (
        <StatusBar
          backgroundColor={constants.primaryVeryDarkBlue}
          barStyle="light-content"
        />
      )}

      <AppBar
        title="Prevent COVID-19"
        style={styles.appBar}
        right={
          <Action icon="information" onPress={() => setDialogVisible(true)} />
        }
      />

      <ScrollView>
        <HelpGrids navigation={navigation} />
        <Requirements />
      </ScrollView>

      <Dialog
        title="About"
        negativeText="Close"
        isVisible={isDialogVisible}
        onDismiss={hideDialog}
        hideOkButton>
        <StatusBar backgroundColor="rgb(8,37,81)" />

        <View style={styles.dialogContentWrappaer}>
          <Image style={styles.image} source={require('../assets/jack.jpg')} />
          <Subheading style={styles.subheading}>Developed By Jack</Subheading>
        </View>

        <Text style={styles.copyright}>© 2020 - Jack Apps</Text>
      </Dialog>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  appBar: { backgroundColor: constants.primaryDarkBlue },
  dialogContentWrappaer: { flexDirection: 'row', alignItems: 'center' },
  image: {
    borderRadius: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    height: 55,
    width: 55,
    marginRight: 15
  },
  subheading: { letterSpacing: 0 },
  copyright: { color: 'rgb(170,170,170)', marginLeft: 5, marginTop: 15 }
});

export default Prevention;
