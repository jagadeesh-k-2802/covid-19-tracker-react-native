import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

import Accordion from './Accordion';
import ErrorScreen from '../ErrorScreen';

import API from '../../services/api';
import { useComponentDidMount } from '../../utils/hooks';

const africa = [
  'Algeria',
  'Angola',
  'Botswana',
  'Burkina Faso',
  'Burundi',
  'Cameroon',
  'Cape Verde',
  'Central African Republic',
  'Chad',
  'Comoros',
  'Republic of the Congo',
  'Democratic Republic of the Congo',
  "Côte d'Ivoire",
  'Djibouti',
  'Egypt',
  'Equatorial Guinea',
  'Eritrea',
  'Ethiopia',
  'Gabon',
  'The Gambia',
  'Ghana',
  'Guinea',
  'Guinea-Bissau',
  'Kenya',
  'Lesotho',
  'Liberia',
  'Libya',
  'Madagascar',
  'Malawi',
  'Mali',
  'Mauritania',
  'Mauritius',
  'Morocco',
  'Mozambique',
  'Namibia',
  'Niger',
  'Nigeria',
  'Rwanda',
  'São Tomé and Príncipe',
  'Senegal',
  'Seychelles',
  'Sierra Leone',
  'Somalia',
  'South Africa',
  'South Sudan',
  'Sudan',
  'Swaziland',
  'Tanzania',
  'Togo',
  'Tunisia',
  'Uganda',
  'Western Sahara',
  'Zambia',
  'Zimbabwe'
];

const asia = [
  'Afghanistan',
  'Armenia',
  'Azerbaijan',
  'Bahrain',
  'Bangladesh',
  'Bhutan',
  'Brunei',
  'Cambodia',
  'China',
  'Cyprus',
  'East Timor',
  'Georgia',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Israel',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Lebanon',
  'Malaysia',
  'Maldives',
  'Mongolia',
  'Myanmar',
  'Nepal',
  'North Korea',
  'Oman',
  'Pakistan',
  'Palestine',
  'Philippines',
  'Qatar',
  'Russia',
  'Saudi Arabia',
  'Singapore',
  'South Korea',
  'Sri Lanka',
  'Syria',
  'Tajikistan',
  'Thailand',
  'Turkey',
  'Turkmenistan',
  'Taiwan',
  'UAE',
  'Uzbekistan',
  'Vietnam',
  'Yemen'
];

const europe = [
  'Albania',
  'Andorra',
  'Austria',
  'Belarus',
  'Belgium',
  'Bosnia',
  'Bulgaria',
  'Croatia',
  'Czech Republic',
  'Denmark',
  'Estonia',
  'Finland',
  'France',
  'Germany',
  'Greece',
  'Hungary',
  'Iceland',
  'Republic of Ireland',
  'Italy',
  'Kosovo',
  'Latvia',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'North Macedonia',
  'Malta',
  'Moldova',
  'Monaco',
  'Montenegro',
  'Norway',
  'Poland',
  'Portugal',
  'Romania',
  'San Marino',
  'Serbia',
  'Slovakia',
  'Slovenia',
  'Spain',
  'Sweden',
  'Switzerland',
  'Ukraine',
  'UK',
  'Vatican City'
];

const northAmerica = [
  'Antigua and Barbuda',
  'Anguilla',
  'Aruba',
  'The Bahamas',
  'Barbados',
  'Belize',
  'Bermuda',
  'Bonaire',
  'British Virgin Islands',
  'Canada',
  'Cayman Islands',
  'Clipperton Island',
  'Costa Rica',
  'Cuba',
  'Curaçao',
  'Dominica',
  'Dominican Republic',
  'El Salvador',
  'Greenland',
  'Grenada',
  'Guadeloupe',
  'Guatemala',
  'Haiti',
  'Honduras',
  'Jamaica',
  'Martinique',
  'Mexico',
  'Montserrat',
  'Navassa Island',
  'Nicaragua',
  'Panama',
  'Puerto Rico',
  'Saba',
  'Saint Barthelemy',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Martin',
  'Saint Pierre and Miquelon',
  'Saint Vincent and the Grenadines',
  'Sint Eustatius',
  'Sint Maarten',
  'Trinidad and Tobago',
  'Turks and Caicos',
  'USA',
  'US Virgin Islands'
];

const southAmerica = [
  'Argentina',
  'Bolivia',
  'Brazil',
  'Chile',
  'Colombia',
  'Ecuador',
  'Falkland Islands',
  'French Guiana',
  'Guyana',
  'Paraguay',
  'Peru',
  'South Georgia',
  'Suriname',
  'Uruguay',
  'Venezuela'
];

const australia = [
  'Australia',
  'Federated States of Micronesia',
  'Fiji',
  'Kiribati',
  'Marshall Islands',
  'Nauru',
  'New Zealand ',
  'Palau',
  'Papua New Guinea',
  'Samoa',
  'Solomon Islands',
  'Tonga',
  'Tuvalu',
  'Vanuatu '
];

const continents = [
  {
    id: 1,
    title: 'Asia',
    content: '',
    countries: asia,
    cases: 0,
    recovered: 0,
    deaths: 0
  },
  {
    id: 2,
    title: 'Africa',
    content: '',
    countries: africa,
    cases: 0,
    recovered: 0,
    deaths: 0
  },
  {
    id: 3,
    title: 'Europe',
    content: '',
    countries: europe,
    cases: 0,
    recovered: 0,
    deaths: 0
  },
  {
    id: 4,
    title: 'North America',
    content: '',
    countries: northAmerica,
    cases: 0,
    recovered: 0,
    deaths: 0
  },
  {
    id: 5,
    title: 'South America',
    content: '',
    countries: southAmerica,
    cases: 0,
    recovered: 0,
    deaths: 0
  },
  {
    id: 6,
    title: 'Australia',
    content: '',
    countries: australia,
    cases: 0,
    recovered: 0,
    deaths: 0
  }
];

const Reports = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    setLoading(true);

    const worldData = await API.getCountriesData();
    worldData.isError ? setError(true) : setError(false);

    if (!worldData.isError) {
      worldData.forEach(res => {
        for (let i = 0; i < continents.length; i++) {
          if (continents[i].countries.includes(res.country)) {
            continents[i].cases += parseInt(res.cases || 0, 10);
            continents[i].recovered += parseInt(res.recovered || 0, 10);
            continents[i].deaths += parseInt(res.deaths || 0, 10);
          }
        }
      });

      for (let i = 0; i < continents.length; i++) {
        continents[i].content = `Cases: ${continents[i].cases}\nRecovered: ${
          continents[i].recovered
        }\nDeaths: ${continents[i].deaths}`;
      }
    }

    setData(continents);
    setLoading(false);
  };

  useComponentDidMount(() => {
    fetchData();
  });

  return (
    <View style={styles.expand}>
      {error && !loading ? (
        <View style={styles.expand}>
          <ErrorScreen onTryAgain={fetchData} />
        </View>
      ) : loading ? (
        <ActivityIndicator style={styles.expand} size={35} />
      ) : (
        <ScrollView>
          <Accordion data={data} />
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  expand: { flex: 1 }
});

export default Reports;
