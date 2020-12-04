import * as React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useState } from 'react';
import AddTodo from '../screen/addtodo'
import TodoItem from '../screen/todoitem'



function Todo() {
    const [todos, setTodos] = useState([
        // { text: 'buy coffee', key: '1' },
        // { text: 'play a game', key: '2' },

    ]);
    const pressHandler = (key) => {
        setTodos((prevTodos) => {
            return prevTodos.filter(todo => todo.key != key);
        })
    }
    const submitHandler = (text) => {
        setTodos((prevTodos) => {
            return [
                {text:text,key:Math.random().toString()},
                ...prevTodos
            ];
        })
    }
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <AddTodo submitHandler={submitHandler}/>
                <View style={styles.list}>
                    <FlatList
                        data={todos}
                        renderItem={({ item }) => (
                            <TodoItem item={item} pressHandler={pressHandler} />
                            //   <Text>{item.text}</Text>
                        )}


                    />
                </View>
               
            </View>
            {/* <View style={styles.main3}>



                  </View> */}


            </View>
           

        

        
     
       
    );
}


export default Todo;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',

    },
    // main3:{
    //     backgroundColor:"blue",
    //     width:"100%",
    //     flex:1
    // },
    content: {
        padding: 40,
        
    },
    list: {
        marginTop: 20,
    }
});
// import * as React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// function Todo(){
//     // const {name } = route.params;
//     return(
//         <View style={styles.container}>
//             <Text style={{fontSize:32}}>About Us</Text>
//             {/* <Text style={{fontSize:32}}>{name}</Text> */}
//         </View>
//     );
// }


// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: 'red',
//       alignItems: 'center',
//       justifyContent: 'center',

//     },
//   });

// export default Todo;