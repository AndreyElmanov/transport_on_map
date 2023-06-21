import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Button } from 'react-native';
import HomeScreen from '../Screens/HomeScreen';
import DriverPage from '../Screens/DriverPage';
import Settings from '../Screens/Settings';
const Stack = createNativeStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Главная' component={HomeScreen}
                    options={({ navigation }) => ({
                        headerRight: () => <Button title="Настройки" color="#000" onPress={() => navigation.navigate('Настройки')} />
                    })}/>
                <Stack.Screen name='Данные ТС' component={DriverPage} />
                <Stack.Screen name='Настройки' component={Settings} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}