/* Disables Autolinking For RN Vector Icons */

module.exports = {
  dependencies: {
    'react-native-vector-icons': {
      platforms: { android: null, ios: null }
    }
  }
};
