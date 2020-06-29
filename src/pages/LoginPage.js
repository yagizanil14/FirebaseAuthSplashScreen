import React, {useState,useEffect} from 'react'
import {Text, TextInput,SafeAreaView, TouchableOpacity,Alert } from 'react-native'
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-community/async-storage';

const LoginPage = props => {
    const [userEmail, setUserEmail]=useState("")
    const [userPass, setUserPass]=useState("")

    const setEmaill = text => setUserEmail(text)
    const setPassw = text => setUserPass(text)

    const loginUser = async () => {
       
            try {
                await auth().signInWithEmailAndPassword(userEmail, userPass)
                Alert.alert("MyApp", "Giriş Yapıldı")
                AsyncStorage.setItem("@USER_UID",auth().currentUser.uid)
                props.navigation.navigate("ListPag")
            } catch (error) {
                Alert.alert("MyApp")
                console.log(error)
            } 
        }
    return(
        <SafeAreaView>
        <TextInput
        onChangeText={setEmaill}
        placeholder="e-mail adresinizi giriniz" 
        />
        <TextInput 
        onChangeText={setPassw}
        placeholder="şifrenizi giriniz" 
        />

        <TouchableOpacity onPress={loginUser}>
            <Text>Giriş Yap</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate("SignUp")}>
            <Text>
                Kaydol
            </Text>
        </TouchableOpacity>
        </SafeAreaView>
    )
   
}
export {LoginPage}