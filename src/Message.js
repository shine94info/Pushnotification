import messaging from '@react-native-firebase/messaging';
import { useEffect } from 'react';
import { Text, View } from 'react-native';

const Message = ({ navigation }) => {
  const setupBackgroundMessaging = () => {
    console.log('setupBackgroundMessaging')
    messaging().setBackgroundMessageHandler(async (remoteMessage) => {
      console.log('Background message received:', remoteMessage);
      const { notification } = remoteMessage;
      console.log('Remote Message Data: ', notification);

      if (notification) {
        console.log('Navigating to Welcome screen');
        navigation.navigate('Welcome');
      }
    });
  };

  const setupInitialNotification = () => {
    console.log('setupInitialNotification')

    messaging().onNotificationOpenedApp(async (remoteMessage) => {
      console.log('Notification opened from killed state:', remoteMessage);
      const { notification } = remoteMessage;
      console.log('Remote Message Data: ', notification);

      if (notification) {
        navigation.navigate('Welcome');
      }
    });

    messaging().getInitialNotification().then((remoteMessage) => {
      if (remoteMessage) {
        console.log('Initial notification received:', remoteMessage);
        const { notification } = remoteMessage;
        console.log('Remote Message Data: ', notification);

        if (notification) {
          navigation.navigate('Welcome');
        }
      }
    });
  };

  useEffect(() => {
    setupInitialNotification();
    setupBackgroundMessaging();
  }, [navigation]);

  return (
    <View>
      <Text>Message screen</Text>
    </View>
  );
};

export default Message;
