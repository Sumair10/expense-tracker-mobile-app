import "react-native-gesture-handler"
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ManageExpense from './screens/ManageExpense';
import RecentExpense from './screens/RecentExpense';
import AllExpenses from './screens/AllExpenses';
import { GlobalStyles } from "./constants/Styles";
import {Ionicons} from '@expo/vector-icons'
import IconButton from "./components/UI/IconButton";


const Stack = createNativeStackNavigator()
const BottomTabs = createBottomTabNavigator()

const ExpensesOverview = () => {
  return <BottomTabs.Navigator screenOptions={ ({navigation})=>( {
    headerStyle :{backgroundColor :GlobalStyles.colors.primary500,},
    headerTintColor :'white',
    tabBarStyle:{backgroundColor :GlobalStyles.colors.primary500},
    tabBarActiveTintColor :GlobalStyles.colors.accent500,
    headerRight: ({tintColor})=>(<IconButton onPress={()=>{ navigation.navigate("ManageExpense")}} icon="add" color ={tintColor} size={24}/>)
  })}>


    <BottomTabs.Screen name="RecentExpenses" component={RecentExpense} options={{
      title : 'Recent Expenses',
      tabBarLabel :'Recent',
      tabBarIcon :({color, size})=> <Ionicons name="hourglass" color={color} size={size}/>
    }} />
    <BottomTabs.Screen name="AllExpenses" component={AllExpenses} options={{
      title : 'All Expenses',
      tabBarLabel :'All',
      tabBarIcon :({color, size})=> <Ionicons name="calendar" color={color} size={size}/>
    }}/>
  </BottomTabs.Navigator>
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer >
        <Stack.Navigator screenOptions={{
          headerStyle :{backgroundColor :GlobalStyles.colors.primary500},
          headerTintColor:'white'
        }}>
          <Stack.Screen name="ExpensesOverview" component={ExpensesOverview} options={{
            headerShown: false
          }} />
          <Stack.Screen name="ManageExpense" component={ManageExpense} options={{
            presentation : 'modal'
          }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>

  );
}

const styles = StyleSheet.create({
});
