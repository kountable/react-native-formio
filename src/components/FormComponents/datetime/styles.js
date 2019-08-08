
import {StyleSheet} from  'react-native';
import DeviceInfo from 'react-native-device-info';

const styles = StyleSheet.flatten({
  button: {
    width: 120,
    marginHorizontal: 0,
    marginVertical:  0,
  },
  date: {
    flex: 1,
    flexDirection: 'column'
  },
  dateText: {
    fontSize: 12,
    marginLeft: 20,
    marginRight: 10,
    marginTop: 20,
  }
});

export default styles;
