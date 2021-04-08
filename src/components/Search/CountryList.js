import React, { Fragment, useState } from 'react';
import { FlatList, Dimensions } from 'react-native';
import { Divider } from 'react-native-paper';

import ListItem from './ListItem';
import BottomSheet from './BottomSheet';

const height = Dimensions.get('window').width / 4.91;

const CountryList = ({ data, fetchData, refreshing }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const onItemPress = item => setSelectedItem(item);
  const onBottomSheetClose = () => setSelectedItem(null);

  const getItemLayout = (_item, index) => ({
    length: height,
    offset: height * index,
    index
  });

  const renderItem = ({ item }) => (
    <ListItem item={item} onItemPress={onItemPress} />
  );

  return (
    <Fragment>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={({ country }) => country}
        refreshing={refreshing}
        onRefresh={fetchData.bind(this, { refresh: true })}
        windowSize={40}
        ItemSeparatorComponent={Divider}
        getItemLayout={getItemLayout}
        initialNumToRender={20}
        maxToRenderPerBatch={40}
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps="always"
      />
      <BottomSheet item={selectedItem} onClose={onBottomSheetClose} />
    </Fragment>
  );
};

export default CountryList;
