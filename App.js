import React, {useEffect} from 'react';
import messaging from '@react-native-firebase/messaging';
import {Alert, Button, Text, View} from 'react-native';
import MyStack from './src/Navigation/Navigation';
const App = () => {
  
  useEffect(() => {
    getDeviceToken();
  }, []);

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert(
        'A new FCM message arrived for foreground!',
        JSON.stringify(remoteMessage),
      );
    });

    return unsubscribe;
  }, []);

  const getDeviceToken = async () => {
    let token = await messaging().getToken();
    console.log('token', token);
  };

  return <MyStack />;
};

export default App;
