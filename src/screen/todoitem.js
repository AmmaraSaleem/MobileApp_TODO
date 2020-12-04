import React from 'react';
import { StyleSheet, Text,TouchableOpacity,View } from 'react-native';
 import { MaterialIcons } from '@expo/vector-icons';


export default function TodoItem({item,pressHandler}){
    return(
    <TouchableOpacity  >
        <View style={styles.item}>
        <Text style={{color:"white",fontSize:20}}>{item.text}</Text>
            <MaterialIcons style={styles.icon} name="delete"size={20}  color="white" onPress={()=>pressHandler(item.key)}/>
           
        </View>
    
    </TouchableOpacity>
    )

}
const styles=StyleSheet.create({
    item:{
        padding:16,
        marginTop:16,
        borderBottomWidth:1,
         borderBottomColor:'blue',
        flexDirection:'row'
        


    },
    icon:{
        marginLeft:"70%"

    }
    
    


    
})