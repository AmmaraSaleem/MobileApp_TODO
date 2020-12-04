import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native';

function Home(props) {
    return (
        <View style={styles.container}>

            <View>
            
            <Image style={{width:200,height:200}} source={{uri:'https://i.pinimg.com/originals/31/14/5e/31145e7925e59e8fb344f13422435dba.jpg'}} />
     
            </View>
            <Text style={{ fontSize: 32, color: "purple" }}>ToDo Application</Text>
            <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={()=>props.navigation.navigate("Todo")}>
                <Text style={styles.btnText}>Click Here</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
       backgroundColor:"black",
        alignItems: 'center',
        justifyContent: 'center',

    },
    button: {
        backgroundColor: "purple",
        width: "80%",
        height: 40,
        textAlign: "center",
        borderRadius: 50,
        marginTop:"10%"



    },
    btnText:
    {
        color: "white",
        fontSize: 20,
        textAlign: "center"
        
    }
});

export default Home;

