import {View, StyleSheet, Text,SafeAreaView,Platform, StatusBar} from 'react-native'; 
import PokemonCard  from './components/PokemonCard'; 

export default function App() {
  const charmanderData= {
    name: "Charmander",
    image: require("./assets/charmander.png"),
    type: "Fire",
    hp: 39,
    moves: ["Scratch", "Ember", "Growl", "Leer"],
    weaknesses: ["Water", "Rock"]
  }
  return(
    
    <SafeAreaView style={styles.container}>
      <StatusBar style={{backgroundColor:"#928e85"}}/>
      
        <PokemonCard {...charmanderData}/>
      
    </SafeAreaView>
    
    
  )

}



const styles=StyleSheet.create({
container:{
flex:1,
backgroundColor: "#a9a9a9",
// alignItems: "center",
// justifyContent: "center"
paddingTop: Platform.OS==='android'? 25: 0,
},

})