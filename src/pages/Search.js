import React, { useState } from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { ActivityIndicator } from 'react-native-paper';

import { SafeAreaView } from 'react-native-safe-area-context';

import CountryList from '../components/Search/CountryList';
import ErrorScreen from '../components/ErrorScreen';
import { useComponentDidMount } from '../utils/hooks';
import API from '../services/api';

// TODO: BottomSheet Janks When Showing Many List Items

const Search = () => {
  const [data, setData] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const fetchData = async ({ refresh }) => {
    refresh ? setRefreshing(true) : setLoading(true);

    const countriesData = await API.getCountriesData();
    countriesData.isError ? setError(true) : setError(false);
    setData(countriesData);

    refresh ? setRefreshing(false) : setLoading(false);
  };

  const filterData = () => {
    return data.filter(item =>
      item.country.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  useComponentDidMount(() => {
    fetchData({ refresh: false });
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
      <Searchbar
        placeholder="Search Country"
        style={styles.searchBar}
        value={searchQuery}
        onChangeText={text => setSearchQuery(text)}
      />

      {error && !loading ? (
        <ErrorScreen onTryAgain={fetchData} />
      ) : loading ? (
        <ActivityIndicator style={styles.activityIndicator} size={35} />
      ) : (
        <CountryList
          data={searchQuery ? filterData(data) : data}
          refreshing={refreshing}
          fetchData={fetchData}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  searchBar: { elevation: 1 },
  activityIndicator: { flex: 1 }
});

export default Search;
