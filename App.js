import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
// import Icon from '@expo/vector-icons';

export default class App extends React.Component {
  componentDidMount() {
    // console.log('Before!!!');
    // console.log('After!!!');
  }
  render() {
    return (
      <View style={styles.container}>
        <Icon name="ios-pizza" size={100} color="red" />
        {/* <Icon.TabBarItem
          title="Home"
          iconName="ios-home-outline"
          selectedIconName="ios-home"
        >
          <View style={styles.tabContent}>
            <Text>Home Tab</Text>
          </View>
        </Icon.TabBarItem> */}
        <Text>Opening up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
