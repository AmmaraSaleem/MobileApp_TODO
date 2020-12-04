import React, { useState } from 'react';
import { StyleSheet, Text,TouchableOpacity,View,TextInput,Button } from 'react-native';


export default function AddTodo({submitHandler}){
    const[text,setText]=useState(' ');
    
    const changeHandler=(val)=>{
        setText(val);
            
    }
    return(
        
        <View>
             <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={()=>submitHandler(text)}>
                <Text style={styles.btnText}>ADD</Text>
            </TouchableOpacity>
            {/* <Button  style={styles.btn} onPress={()=>submitHandler(text)} title='ADD TODO' color="blue"></Button> */}
            <TextInput
            style={styles.input}
            placeholder="What Do You Want To Do..!"
            placeholderTextColor="white"
            onChangeText={changeHandler}
            
            />
           
        
        </View>
    )
}
const styles=StyleSheet.create({
    input:{
        padding:16,
        marginTop:16,
        borderColor:"white",
        borderWidth:1,
        color:"white",
        borderRadius:20
       
       

    },
    button: {
        backgroundColor: "blue",
        width: "30%",
        height: 40,
        textAlign: "center",
        marginLeft:"70%",
        borderRadius:10



    },
    btnText:
    {
        color: "white",
        fontSize: 20,
        textAlign: "center"
    }
    
});