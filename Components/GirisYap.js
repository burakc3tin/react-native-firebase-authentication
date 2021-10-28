import React, { Component } from 'react';
import { View, Text, SafeAreaView, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import auth from '@react-native-firebase/auth';
//firebase kütüphanesini ekleriz

class GirisYap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mailAdres : "",
      parola : ""
    };
  }


   _uyeGirisYap = async () => {
    try {
      if (!this.state.mailAdres || !this.state.parola) {
        alert('Boş yerleri doldurun')
        return
      } 
      let response = await auth().signInWithEmailAndPassword(this.state.mailAdres, this.state.parola)
      if (response) {
       
        alert('Başarı ile giriş yaptınız')
        this.props.navigation.navigate('AnaSayfa')
      }
      
    } catch (e) {
     alert("Lütfen geçerli bir mail adresi ya da parola girin")
    }
  }


  render() {
    return (
        <SafeAreaView style={styles.anaEkran}>

        <Image 
        style = {styles.image}
        source={require('../Images/firebase.png')}
        />
        <TextInput
          style={styles.input}
          placeholder="Mail adresi"
          onChangeText={(mailAdres) => this.setState({mailAdres})}

        />

<TextInput style={styles.input}
          placeholder="Parola"
          secureTextEntry={true}
          
          onChangeText={(parola) => {this.setState({parola})
        
        }
        
       
        }
          
         />

        <TouchableOpacity style={styles.button}
        onPress={() => this._uyeGirisYap()}
        >
          <Text style = {{color : '#fff'}}>Giriş Yap</Text>
        </TouchableOpacity>

        <Text onPress = {()=> this.props.navigation.navigate('KayitOl')
} style = {styles.link}>Üye değilseniz olmak için tıklayın</Text>
      </SafeAreaView >
    );
  }
}

const styles = StyleSheet.create({

    anaEkran: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F0D0A3'
    },
  
    input: {
      borderColor: '#975FFA',
      padding: 15,
      margin: 8,
      borderWidth: 1,
      borderRadius: 20,
      width: 300,
      backgroundColor:'#F0EAD2'
    },
  
    button: {
  
      width: 300,
    margin:8,
      alignItems: 'center',
      padding : 15,
      backgroundColor: '#975FFA',
      borderRadius: 20
  
    },
  
    link : {
      margin:10,
      color : '#3B5EFA',
      textDecorationLine : 'underline'
    },
    image : {
      width : 240, 
      height : 150
    }
  
  
  });
  

export default GirisYap;
