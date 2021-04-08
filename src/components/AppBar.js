import React from 'react';
import { Appbar, Surface } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const { Action, BackAction } = Appbar;

const AppBar = ({ style, title, subtitle, left, right }) => {
  return (
    <Surface elevation={1}>
      <Appbar.Header style={[styles.appBar, style]}>
        {left}
        <Appbar.Content title={title} subtitle={subtitle} />
        {right}
      </Appbar.Header>
    </Surface>
  );
};

const styles = StyleSheet.create({
  appBar: { width: '100%', backgroundColor: '#FFF', elevation: 0 }
});

export default AppBar;
export { Action, BackAction };
