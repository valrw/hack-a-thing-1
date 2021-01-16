# PromptAlarm
### Hack a thing 1
### Val Werner

## Project details
This is a basic implementation of an alarm clock app, which is not fully functional but can be built on in the future. It currently has the following functions:

### View and delete alarms
The home screen of the app currently contains two hardcorded examples of list entries representing alarms that have been set. Pressing on either of these entries opens an alert confirming that the alarm should be deleted. After an entry has been deleted, it can be replaced by the "Restore Alarms" button at the bottom of the home screen, which restores both of the original examples.

### Set up a new alarm
The "New Alarm" button at the bottom of the home screen navigates to another screen which has a text input option at the top and two counters, one representing hours and the other representing minutes. The user can select a time in hours and minutes (on a 24-hour clock) to indicate that an alarm should be set for the next time that time occurs. Pressing the "Save" button at the bottom of this screen will not permanently save these settings but will print to the console the time and date of the alarm, and return to the home screen.

## How to run and test

This project has been tested on an Android emulator and a hardware Android device.

After starting the emulator and/or connecting a device with adb, navigate to the project directory. Run `react-native start` and `react-native run-android`.

Available actions:
* Pressing either alarm entry on the home screen should open an alert and delete the entry if confirmed
* Pressing the restore button on the home screen should restore the two original examples
* "New Alarm" from the home screen should navigate to a new screen with text input and two counters
* It should be possible to manipulate both the text input field and the counters
* "Save Alarm" should print a message about the alarm settings to the console and navigate back to the home screen
