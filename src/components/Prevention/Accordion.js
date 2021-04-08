import React from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';
import { List } from 'react-native-paper';

const Accordion = ({ data }) => (
  <ScrollView style={styles.container}>
    <List.AccordionGroup>
      {data.map(item => (
        <List.Accordion key={item.title} title={item.title} id={item.id}>
          <Text style={styles.content}>{item.content.trim()}</Text>
        </List.Accordion>
      ))}
    </List.AccordionGroup>
  </ScrollView>
);

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
    fontSize: 16,
    paddingVertical: 12,
    borderTopWidth: 0.9,
    borderTopColor: '#ddd',
    borderBottomColor: '#ddd',
    borderBottomWidth: 0.9,
    lineHeight: 20
  }
});

export default Accordion;
