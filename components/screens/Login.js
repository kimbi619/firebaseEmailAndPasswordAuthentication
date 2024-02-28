import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { app } from '../api/firebase'

const auth = getAuth(app);

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async() => {
        try {
            const res = await signInWithEmailAndPassword(auth, email, password)
            console.log(res);
        }
        catch(er){
            console.warn(er);
        }
    }

    const handleISignup = async() => {
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password)
            console.log(res);
        }
        catch(er){
            console.warn(er);
        }
    }
    return (
    <View style={ styles.container }>
        <TextInput style={styles.input} value={email} onChangeText={e=> setEmail(e)} placeholder='Email' />
        <TextInput style={styles.input} secureTextEntry value={password} onChangeText={e=> setPassword(e)} placeholder='Password' />
        
        <TouchableOpacity onPress={handleLogin} style={styles.btn}>
            <Text style={styles.text}>Login bro</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={ handleISignup } style={styles.btn}>
            <Text style={styles.text}>Signup</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    input: {
        width: '90%',
        borderRadius: 4,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#888',
        height: 50,
        marginBottom: 30,
        paddingLeft: 10
    },
    btn: {
        width: '90%',
        borderRadius: 4,
        padding: 16,
        paddingHorizontal: 25,
        backgroundColor: "#4984b8",
        marginBottom: 10
    },
    text: {
        color: '#fff',
        fontSize: 17,
        textAlign: 'center'
    }
})