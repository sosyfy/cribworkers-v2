
import Login from "./screens/login"
import Home from "./screens/home"
import Dashboard from "./screens/dashboard"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Services from "./screens/services";
import Manage from "./screens/manage";


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Services" component={Services} />
        <Stack.Screen name="Manage" component={Manage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


