import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

import AppBar, { BackAction } from '../components/AppBar';
import Accordion from '../components/Prevention/Accordion';
import About from '../components/Prevention/About';
import Reports from '../components/Prevention/Reports';

import constants from '../constants';

const symptoms = [
  {
    id: 1,
    title: 'Fever',
    content:
      "Fever is a key symptom, experts say. Don't fixate on a number, but know it's really not a fever until your temperature reaches at least 100 degrees Fahrenheit (37.7 degrees Celsius) for children and adults."
  },
  {
    id: 2,
    title: 'Cough',
    content:
      "Coughing is another key symptom, but it's not just any cough, said Schaffner. It should be a dry cough that you feel in your chest."
  },
  {
    id: 3,
    title: 'Difficulty Breathing',
    content: `
    Shortness of breath can be a third and very serious manifestation of Covid-19, and it can occur on its own, without a cough. If your chest becomes tight or you begin to feel as if you cannot breathe deeply enough to get a good breath, that's a sign to act, experts say. In addition to difficulty breathing or shortness of breath, the CDC lists emergency warning signs for Covid-19 as a "persistent pain or pressure in the chest," "bluish lips or face" which indicates a lack of oxygen and any sudden mental confusion or lethargy and inability to rouse.`
  },
  {
    id: 4,
    title: 'Muscle Pain',
    content:
      'Muscle aches are extremely common. Almost everyone has experienced discomfort in their muscles at some point. Because there’s muscle tissue in nearly all parts of the body, this type of pain can be felt practically anywhere. However, there’s no single cause for muscle aches and pains. While overuse or injury is common, there are other possible explanations for ongoing discomfort.'
  },
  {
    id: 5,
    title: 'Tiredness',
    content:
      'If you can’t muster the energy to show up for your go-to workout, let alone get out of bed, intense fatigue could be another sign that your body’s working hard to battle an infection like COVID-19 (or, again, the flu), says Dr. Younus.'
  }
];

const prevention = [
  {
    id: 1,
    title: 'Wash your hands frequently',
    content:
      'Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water.\n\nWhy? Washing your hands with soap and water or using alcohol-based hand rub kills viruses that may be on your hands.'
  },
  {
    id: 2,
    title: 'Maintain social distancing',
    content:
      'Maintain at least 1 metre (3 feet) distance between yourself and anyone who is coughing or sneezing.\n\nWhy? When someone coughs or sneezes they spray small liquid droplets from their nose or mouth which may contain virus. If you are too close, you can breathe in the droplets, including the COVID-19 virus if the person coughing has the disease.'
  },
  {
    id: 3,
    title: 'Avoid touching eyes, nose and mouth',
    content:
      'Why? Hands touch many surfaces and can pick up viruses. Once contaminated, hands can transfer the virus to your eyes, nose or mouth. From there, the virus can enter your body and can make you sick.'
  },
  {
    id: 4,
    title: 'Practice respiratory hygiene',
    content:
      'Make sure you, and the people around you, follow good respiratory hygiene. This means covering your mouth and nose with your bent elbow or tissue when you cough or sneeze. Then dispose of the used tissue immediately.\n\nWhy? Droplets spread virus. By following good respiratory hygiene you protect the people around you from viruses such as cold, flu and COVID-19.'
  },
  {
    id: 5,
    title: 'Seek medical care early',
    content:
      'Stay home if you feel unwell. If you have a fever, cough and difficulty breathing, seek medical attention and call in advance. Follow the directions of your local health authority.\n\nWhy? National and local authorities will have the most up to date information on the situation in your area. Calling in advance will allow your health care provider to quickly direct you to the right health facility. This will also protect you and help prevent spread of viruses and other infections.'
  }
];

const Detail = ({ navigation, route }) => {
  const isFocused = useIsFocused();
  const { title, lightScreen } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      {isFocused && (
        <StatusBar
          backgroundColor={
            lightScreen ? '#F0F0F0' : constants.primaryVeryDarkBlue
          }
          barStyle={lightScreen ? 'dark-content' : 'light-content'}
        />
      )}

      <AppBar
        title={title}
        left={<BackAction onPress={navigation.goBack} />}
        style={lightScreen ? styles.appBarLight : styles.appBar}
      />

      {title === 'Symptoms' && <Accordion data={symptoms} />}
      {title === 'Prevention' && <Accordion data={prevention} />}
      {title === 'Reports' && <Reports />}
      {title === 'About' && <About />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  appBar: { backgroundColor: constants.primaryDarkBlue },
  appBarLight: { backgroundColor: '#FFF' }
});

export default Detail;
