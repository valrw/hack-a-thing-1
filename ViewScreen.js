import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';
//import { useIsFocused } from "@react-navigation/native";
import ReactNativeAN from 'react-native-alarm-notification';

import Colors from './Colors.js';
import styles from './StyleSheet.js';
import Alarm from './components/Alarm.js';

const ViewScreen = (props) => {

    let exampleAlarms = [
      {
          id: 0,
          title: "Example 1",
          fire_date: "09-24-2021 00:00:00"
      },
      {
          id: 1,
          title: "Example 2",
          fire_date: "09-01-1989 00:08:00"
      }
      ];


    const [alarms, setAlarms] = useState(exampleAlarms);

  /* useEffect( () => { loadAlarms(); },
    [isFocused]);

  const isFocused = useIsFocused(); */

 /* const loadAlarms = async () => {
    try {
      alarms = await ReactNativeAN.getScheduledAlarms();
    } catch (e) {}
  } */

  // just deletes the examples from the list for now
  const deleteAlarm = (id) => {
    let temp = JSON.parse(JSON.stringify(alarms));
    for (var i = 0; i < alarms.length; i++) {
        if (alarms[i].id == id) {
            temp.splice(i, 1);
        }
    }
    setAlarms(temp);
  }

  //loadAlarms();

  // restore the two examples if deleted
  const restoreAlarms = () => {
    let temp = JSON.parse(JSON.stringify(exampleAlarms));
    setAlarms(temp);
  }

  return(
    <View style={{flex: 1}}>
    <SafeAreaView style={{flex: 1}}>
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.scrollView}
      contentContainerStyle={{flexGrow: 1}}>
      <View>
          {alarms.map((alarm) => (
            <Alarm
                key={alarm.id}
                navigation={props.navigation}
                id={alarm.id}
                title={alarm.title}
                deleteFunction={deleteAlarm}
                fire_date={alarm.fire_date} />
          ))}
      </View>
    </ScrollView>
    <Button
        onPress={() => props.navigation.navigate('Edit', { name: 'New Alarm' })}
        title={'New Alarm'}
        color={Colors.primary} />
    <Button
        onPress={restoreAlarms}
        title={'Restore Alarms'}
        color={Colors.dark} />
    </SafeAreaView>
    </View>
  );
}

export default ViewScreen;