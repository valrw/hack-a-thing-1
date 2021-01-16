import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Alert
} from 'react-native';
import ReactNativeAN from 'react-native-alarm-notification';

import Colors from '../Colors.js';
import styles from '../StyleSheet.js';

const Alarm = (props) => {

    const deleteAlert = () => {
        Alert.alert("Delete", "Delete this alarm?",
          [
            //{ text: "OK", onPress: () => { ReactNativeAN.deleteAlarm(props.id) } },
            {text: "OK", onPress: () => {props.deleteFunction(props.id)}},
            { text: "Cancel", style: "cancel"}
          ]
        );
    }

    return(
        <Pressable onPress={deleteAlert}>
            <View style={styles.alarm}>
                <Text style={styles.sectionTitle}>{props.title}</Text>
                <Text style={styles.sectionDescription}>{props.fire_date}</Text>
            </View>
        </Pressable>
    );
}

export default Alarm;