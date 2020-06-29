import React, { useState, useEffect } from 'react'
import { Text, SafeAreaView, TextInput, Alert, TouchableOpacity } from 'react-native'
import auth from '@react-native-firebase/auth';

const SignUp = props => {
    const [userEmail, setUserEmail] = useState("")
    const [userPass, setUserPass] = useState("")
    const [userPassRep, setUserPassRep] = useState("")

    const setEmail = text => setUserEmail(text)
    const setPass = text => setUserPass(text)
    const setPassRep = text => setUserPassRep(text)

    const setUser = async () => {
        if (userPass == userPassRep) {
            try {
                let res = await auth().createUserWithEmailAndPassword(userEmail, userPass)
                console.log("Kayıt Başarılı")
                props.navigation.navigate("LoginPage")
            } catch (error) {
                console.log("kayıt başarısız")
            }
        } else {
            Alert.alert("Başarısız", "Şifre Tekrarı Hatalı")
        }
    }

    return (
        <SafeAreaView>
            <TextInput
                keyboardType="email-address"
                autoCompleteType="email"
                autoCapitalize="none"
                maxLength={40}
                placeholder="Email Adresinizi Giriniz"
                onChangeText={setEmail}
            />
            <TextInput
                secureTextEntry={true}
                autoCapitalize="none"
                maxLength={16}
                placeholder="Şifrenizi Giriniz"
                onChangeText={setPass}
            />
            <TextInput
                secureTextEntry={true}
                autoCapitalize="none"
                maxLength={16}
                placeholder="Şifrenizi Tekrar Giriniz"
                onChangeText={setPassRep}
            />

            <TouchableOpacity onPress={setUser} >
                <Text>Kaydı Tamamla</Text>
            </TouchableOpacity>

        </SafeAreaView>
    )

}
export { SignUp }