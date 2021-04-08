const URL = 'https://coronavirus-19-api.herokuapp.com';

// __DEV__ = false;

class API {
  static async getWorldData() {
    if (__DEV__) {
      return Promise.resolve({
        cases: 10811205,
        deaths: 519095,
        recovered: 6033513
      });
    }

    try {
      const res = await fetch(`${URL}/all`);
      const json = await res.json();
      return json;
    } catch (err) {
      return { isError: true };
    }
  }

  static async getCountriesData() {
    if (__DEV__) {
      return Promise.resolve([
        {
          country: 'USA',
          cases: 2780152,
          todayCases: 199,
          deaths: 130798,
          todayDeaths: 0,
          recovered: 1164794,
          active: 1484560,
          critical: 15898,
          casesPerOneMillion: 8399,
          deathsPerOneMillion: 395,
          totalTests: 34858578,
          testsPerOneMillion: 105311
        },
        {
          country: 'Brazil',
          cases: 1453369,
          todayCases: 0,
          deaths: 60713,
          todayDeaths: 0,
          recovered: 916147,
          active: 476509,
          critical: 8318,
          casesPerOneMillion: 6837,
          deathsPerOneMillion: 286,
          totalTests: 3227591,
          testsPerOneMillion: 15184
        },
        {
          country: 'Russia',
          cases: 661165,
          todayCases: 6760,
          deaths: 9683,
          todayDeaths: 147,
          recovered: 428978,
          active: 222504,
          critical: 2300,
          casesPerOneMillion: 4531,
          deathsPerOneMillion: 66,
          totalTests: 20168904,
          testsPerOneMillion: 138205
        },
        {
          country: 'India',
          cases: 606907,
          todayCases: 1687,
          deaths: 17860,
          todayDeaths: 12,
          recovered: 360378,
          active: 228669,
          critical: 8944,
          casesPerOneMillion: 440,
          deathsPerOneMillion: 13,
          totalTests: 9056173,
          testsPerOneMillion: 6562
        },
        {
          country: 'UK',
          cases: 313483,
          todayCases: 0,
          deaths: 43906,
          todayDeaths: 0,
          recovered: null,
          active: null,
          critical: 238,
          casesPerOneMillion: 4618,
          deathsPerOneMillion: 647,
          totalTests: 9662051,
          testsPerOneMillion: 142325
        }
      ]);
    }

    try {
      const res = await fetch(`${URL}/countries`);
      const json = await res.json();
      return json;
    } catch (err) {
      return { isError: true };
    }
  }
}

export default API;
