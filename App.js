import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import TopicSelect from './screens/TopicSelect';
import ChatScreen from './screens/ChatScreen'; // 👉 ADD THIS LINE

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="TopicSelect" component={TopicSelect} />
                <Stack.Screen name="Chat" component={ChatScreen} /> 
            </Stack.Navigator>
        </NavigationContainer>
    );
}
