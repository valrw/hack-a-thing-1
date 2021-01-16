import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
} from 'react-native';
import {
  toDate,
  parseISO,
  formatISO,
  getHours,
  getMinutes,
  setHours,
  setMinutes,
  isPast,
  addDays,
  subDays,
  differenceInMinutes,
} from 'date-fns';
import Counter from 'react-native-counters';
import ReactNativeAN from 'react-native-alarm-notification';

import Colors from './Colors.js';
import styles from './StyleSheet.js';

const EditScreen = ({ route, navigation }) => {

    let date = Date.now();
    let title = "Alarm";
    let hour = getHours(date);
    let minute = getMinutes(date);

    const saveAlarm = async () => {
      fireDate = ReactNativeAN.parseDate(date);
      try {
        console.log("Alarm " + title + " to be scheduled for " + fireDate);
        // await ReactNativeAN.scheduleAlarm({ title: title, fire_date: fireDate });
      } catch (e) {console.log(e)}
      navigation.navigate('Home');
    }

    const hourChange = (number, type) => {
        date = setHours(date, number);
        console.log(number);
        evaluateDay();
    }

    const minuteChange = (number, type) => {
        date = setMinutes(date, number);
        console.log(number);
        evaluateDay();
    }

    const evaluateDay = () => {
        // don't set in the past
        if (isPast(date)) {
            date = addDays(date, 1);
        }
        // don't set too far in the future
        else if (differenceInMinutes(date, Date.now()) >= 1440) {
            date = subDays(date, 1);
        }
    }

  return(
      <View style={{flex: 1}}>
      <SafeAreaView style={{flex: 1}}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
          contentContainerStyle={{flexGrow: 1}}>

          <TextInput style={styles.sectionTitle} defaultValue={title} onTextChange={(text) => {title = text;}}/>

          <Text style={styles.sectionDescription}>Hour</Text>
          <Counter start={hour} min={0} max={23} onChange={hourChange} />

          <Text style={styles.sectionDescription}>Minutes</Text>
          <Counter start={minute} min={0} max={59} onChange={minuteChange} />

        </ScrollView>
        <Button
            onPress={() => saveAlarm()}
            title={'Save alarm'}
            color={Colors.primary} />
      </SafeAreaView>
      </View>
  );
}

export default EditScreen;