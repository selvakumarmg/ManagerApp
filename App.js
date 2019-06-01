import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './src/reducers/reducer'


class App extends Component {

  componentWillMount(){
    var firebaseConfig = {
      apiKey: "AIzaSyAXNFNsoUVZ3TD8mkZK8PFZPihzDNVYguI",
      authDomain: "rn-managerapp.firebaseapp.com",
      databaseURL: "https://rn-managerapp.firebaseio.com",
      projectId: "rn-managerapp",
      storageBucket: "rn-managerapp.appspot.com",
      messagingSenderId: "716738564114",
      appId: "1:716738564114:web:0e9886e7507db779"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    return (
      <Provider store={createStore(reducer)}>
      <View style={styles.container}>
      <Text>App</Text>
      </View>
      </Provider>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
