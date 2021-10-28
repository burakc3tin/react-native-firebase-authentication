import React, { Component } from 'react';
import { View, Text, SafeAreaView, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import GirisYap from './Components/GirisYap';
import KayitOl from './Components/KayitOl';
import AnaSayfa from './Components/AnaSayfa';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (

      <NavigationContainer>

        <Stack.Navigator screenOptions={{headerShown:false}}>

          <Stack.Screen name="GirisYap"  component={GirisYap}/>
          <Stack.Screen name="KayitOl" component={KayitOl} />
          <Stack.Screen name="AnaSayfa" component={AnaSayfa} />

        </Stack.Navigator>
        
      </NavigationContainer>



    );
  }
}


export default App;
