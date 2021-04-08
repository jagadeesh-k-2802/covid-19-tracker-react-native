import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

const ErrorScreen = ({ onTryAgain }) => (
  <View style={[styles.container]}>
    <Text style={styles.errorText}>No Network Connection</Text>

    {onTryAgain && (
      <Button mode="contained" onPress={onTryAgain}>
        Try Again
      </Button>
    )}
  </View>
);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  errorText: { fontSize: 17, marginBottom: 15 }
});

export default ErrorScreen;
