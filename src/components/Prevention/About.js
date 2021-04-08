import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

const About = () => (
  <ScrollView>
    <Text style={styles.paragraph}>
      Coronavirus disease (COVID-19) is an infectious disease caused by a newly
      discovered coronavirus.
    </Text>

    <Text style={styles.paragraph}>
      Most people infected with the COVID-19 virus will experience mild to
      moderate respiratory illness and recover without requiring special
      treatment.&nbsp; Older people, and those with underlying medical problems
      like cardiovascular disease, diabetes, chronic respiratory disease, and
      cancer are more likely to develop serious illness.
    </Text>

    <Text style={styles.paragraph}>
      The best way to prevent and slow down transmission is be well informed
      about the COVID-19 virus, the disease it causes and how it spreads.
      Protect yourself and others from infection by washing your hands or using
      an alcohol based rub frequently and not touching your face.&nbsp;
    </Text>

    <Text style={styles.paragraph}>
      The COVID-19 virus spreads primarily through droplets of saliva or
      discharge from the nose when an infected person coughs or sneezes, so it’s
      important that you also practice respiratory etiquette (for example, by
      coughing into a flexed elbow).
    </Text>

    <Text style={styles.paragraph}>
      At this time, there are no specific vaccines or treatments for COVID-19.
      However, there are many ongoing clinical trials evaluating potential
      treatments. WHO will continue to provide updated information as soon as
      clinical findings become available.
    </Text>
  </ScrollView>
);

const styles = StyleSheet.create({
  paragraph: {
    marginTop: 30,
    marginBottom: 15,
    paddingHorizontal: 18,
    fontSize: 16.25,
    color: '#444',
    lineHeight: 20
  }
});

export default About;
