import React, { useState, useEffect } from 'react'
import { SafeAreaView, View, Text, FlatList, TextInput, Button } from 'react-native'
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
const user = auth().currentUser

const ListPage = () => {
    
        const [data, setData] = useState("")
        const [list, setList] = useState([])
    
        useEffect(() => {
            database()
                .ref(`/${user.uid}/`)
                .once('value')
                .then(response => {
                    let responseList = Object.values(response.val());
                    setList(responseList);
                })
                .catch((err)=>{
                    console.log(err.code)
                })
        }, [])
    
        const sendData = () => {
            let newArray = [...list]
            newArray.push(data)
            setList(newArray)
    
            database().ref(`/${user.uid}/`).push(data)
        }
    return (
        <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 35, fontWeight: 'bold', margin: 5 }}>Kayıtlarım</Text>
            {list.length > 0 ?  
            <FlatList
            keyExtractor={(item,index)=>index.toString()}
                data={list}
                renderItem={({ item }) => <Text>{item}</Text>}
            /> 
            : null }
            <View>
                <TextInput
                    onChangeText={(text) => setData(text)}
                />
                <Button
                    title="Gönder"
                    onPress={sendData}
                />
            </View>
        </View>
    </SafeAreaView>
    );
}
export {ListPage}