/* Styles based on the example React Native app
 * created with 'react-native init' */

import { StyleSheet } from 'react-native';
import Colors from './Colors.js';

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.white,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  alarm: {
    backgroundColor: Colors.lighter,
    marginTop: 32,
    paddingHorizontal: 24,
  }
});

export default styles;