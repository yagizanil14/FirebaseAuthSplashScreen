import React, {useEffect} from 'react'
import {Text, SafeAreaView} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';

const SplashScreen = props => {
    useEffect(()=>{
        AsyncStorage.getItem("@USER_UID")
        .then(res =>{
            if(res==null){
                props.navigation.navigate("LoginPage")
            }else{
                props.navigation.navigate("ListPag")
            }
        })
    },[])
    return(
        <SafeAreaView>
            <Text>Loading</Text>
        </SafeAreaView>
        
    )
}
export {SplashScreen}