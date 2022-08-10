import MainScreen from "./src/components/MainScreen/MainScreen";
import SecondScreen from "./src/components/SecondScreen/SecondScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={() => ({
        headerBackTitle: null,
        headerStyle: { backgroundColor: "#02ADAD" },
        headerTitleStyle: {
          color: "white",
          flex: 1,
          textAlign: "center",
          fontSize: 16
        },
        headerTintColor: "white"
      })}>
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="SecondScreen" component={SecondScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}