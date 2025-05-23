import {View, Text, StyleSheet, Platform, Image} from 'react-native';


export default function PokemonCard({
     name,
     image,
     type,
     hp,
     moves,
     weaknesses
}) {
     return(
          <View style={styles.card}>
               <View syles={styles.nameContainer}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.hp}>❤️{hp}</Text>
               </View>

                <Image source={image} accessibilityLabel={`${name} pokemon`} style={styles.image} resizeMode='contain'/> 
               <View>
                    <Text>{type}</Text>
               </View>

               <View>
                    <Text>{moves.join(", ")}</Text>
               </View>

               <View>
                    <Text>{weaknesses.join(", ")}</Text>
               </View>
          </View>
     );
}

const styles= StyleSheet.create({
     card:{
          backgroundColor: "#bebebe",
          borderRadius: 16,
          borderWidth: 2,
          padding: 6,
          margin: 16,
          ...Platform.select({
               ios:{
                  shadowOffset: {width: 2, height: 2},
                  shadowColor: "#928e85",
                  shadowOpacity: 0.3,
                  shadowRadius: 4,  
               },
               android:{
                    elevation: 5,
               }
          })
     },

     nameContainer:{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 32,
     },
     name: {
          fontSize:30,
          fontWeight: "bold"
     },
     hp:{
         fontSize: 22 
     },
     image: {
         width: "100%" ,
         height: 200,
         marginBottom: 16,
     }
})