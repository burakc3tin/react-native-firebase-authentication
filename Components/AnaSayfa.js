import React, { Component } from 'react';
import { View, Text,TouchableOpacity , StyleSheet} from 'react-native';
import auth from "@react-native-firebase/auth"

class AnaSayfa extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

 _oturumKapat =  () => {

    
     auth().signOut().then(()=>      this.props.navigation.navigate('GirisYap')
     )
 }

  render() {
    return (
      <View style = {styles.anaEkran}>
       <TouchableOpacity
        onPress={() => this._oturumKapat()}
        style = {styles.button}
        >
          <Text style = {{color:'white'}}>Oturum Kapat</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  anaEkran : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center',
    backgroundColor:'#F0D0A3'
  },
  button : {
    width: 300,
    margin:8,
      alignItems: 'center',
      padding : 15,
      backgroundColor: '#975FFA',
      borderRadius: 20
  }

})

export default AnaSayfa;
