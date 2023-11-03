import {createStackNavigator} from '@react-navigation/stack';
import Message from '../Message';
import Welcome from '../Welcome';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Message'}>
        <Stack.Screen name="Message" component={Message} />
        <Stack.Screen name="Welcome" component={Welcome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyStack;
