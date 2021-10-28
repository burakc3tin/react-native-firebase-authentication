import React, { Component } from 'react';
import { View, Text, SafeAreaView, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import auth from "@react-native-firebase/auth"

class KayitOl extends Component {
  constructor(props) {
    super(props);
    //Kayıt olunması için mail ve parola state'leri oluştururuz.
    this.state = {
        mailAdres :"",
        parola :""
    };
   }
 
   //_kayitOl() fonksiyonu oluştururuz ve boş değer, min 6 karakter kontrolleri yaparız. 
   //Eğer mail ve parola da bir sıkıntı yoksa _yeniKullanici() fonksiyonuna yönlendiririz.
  _kayitOl = () => {
    if (!this.state.mailAdres || !this.state.parola) {
      alert('Boş yerleri doldurun')
      return
    }  if (this.state.parola.trim()&&this.state.parola.length < 6) {
      alert('Parola 6 karakterden daha az girilemez.')
      return
    } 
    
   //state değerlerini _yeniKullanici() fonksiyonuna parametre olarak göndeririz.
    else {
      this._yeniKullanici(this.state.mailAdres, this.state.parola)
      return
    } 
  }

  //firebase fonksiyonuna state'leri göndeririz.
   _yeniKullanici = async () => {
    try {
      let response = await auth().createUserWithEmailAndPassword(this.state.mailAdres, this.state.parola)
      if (response) {
        
        alert('Başarı ile kayıt oldunuz. Lütfen giriş yapın.');
      this.props.navigation.navigate('GirisYap')

      }
    } catch (e) {
      alert('Lütfen geçerli bir mail adresi ya da parola girin')
    }
  }


  render() {

    //parolada boşluk değeri sayılmaması için trim() fonksiyonu kontrolü yaparız.
    this.state.mailAdres = this.state.mailAdres.trim()
    this.state.parola = this.state.parola.trim()
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

        <TouchableOpacity onPress={() => this._kayitOl()}
 style={styles.button}>
          <Text style = {{color : '#fff'}}>Kayıt Ol</Text>
        </TouchableOpacity>

        <Text onPress = {()=> this.props.navigation.navigate('GirisYap', { name: 'Jane' })
} style = {styles.link}>Giriş yapmak için tıklayın</Text>
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
  

export default KayitOl;
