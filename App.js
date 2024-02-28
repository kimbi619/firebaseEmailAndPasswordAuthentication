import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Login from './components/screens/Login';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from './components/api/firebase'

const Stack = createNativeStackNavigator();
const auth = getAuth(app);

export default function App() {
  const [user, setUser] = useState(false)
  useEffect(() => {
    checkUser()
  }, [])

  const checkUser = () => {
    onAuthStateChanged(auth, (user) => {
      if(user) {
        const uid = user.uid;
        setUser(user)
      }
      else {
        //TODO: NO USER
      }
    })
  }
  
  
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }} >
          <StatusBar backgroundColor="#4984b8" style="light" />
          { user ? <AppStack /> : <AuthStack /> }
      </SafeAreaView>
    </NavigationContainer>
  );
}

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  )
}

const AppStack = () => {
  return (
    <Text>App stack</Text>
  )
}