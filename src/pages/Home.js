import React, { useState } from 'react';
import {
  StyleSheet,
  StatusBar,
  ScrollView,
  ToastAndroid,
  View
} from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

import AppBar, { Action } from '../components/AppBar';
import Chart from '../components/Home/Chart';
import Grids from '../components/Home/Grids';
import Illustration from '../components/Home/Illustration';
import ErrorScreen from '../components/ErrorScreen';
import { useComponentDidMount } from '../utils/hooks';
import API from '../services/api';

const Home = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = async ({ showToast }) => {
    setLoading(true);
    showToast && ToastAndroid.show('Reloading...', ToastAndroid.SHORT);

    const worldData = await API.getWorldData();
    worldData.isError ? setError(true) : setError(false);

    setData(worldData);
    setLoading(false);
  };

  const refreshIcon = (
    <Action
      icon="refresh"
      onPress={fetchData.bind(this, { showToast: true })}
    />
  );

  useComponentDidMount(() => {
    fetchData({ showToast: false });
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
      <AppBar title="Today's Report" right={refreshIcon} />

      {error && !loading ? (
        <View style={styles.expand}>
          <ErrorScreen />
        </View>
      ) : loading ? (
        <ActivityIndicator style={styles.expand} size={35} />
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          <Chart data={data} />
          <Grids data={data} />
          <Illustration />
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  expand: { flex: 1 }
});

export default Home;
