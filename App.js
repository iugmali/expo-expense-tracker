import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import ManageExpensesScreen from "./src/screens/ManageExpensesScreen";
import RecentExpensesScreen from "./src/screens/RecentExpensesScreen";
import AllExpensesScreen from "./src/screens/AllExpensesScreen";
import {GlobalStyles} from "./src/constants/styles";
import {Ionicons} from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const ExpenseOverview = () => {
  return (
    <BottomTabs.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: GlobalStyles.colors.primary500
      },
      headerTintColor: 'white',
      tabBarStyle: {
        backgroundColor: GlobalStyles.colors.primary500
      },
      tabBarActiveTintColor: GlobalStyles.colors.accent500
    }}>
      <BottomTabs.Screen
        name={'RecentExpenses'}
        component={RecentExpensesScreen}
        options={{
          title: 'Recent Expenses',
          tabBarLabel: 'Recent',
          tabBarIcon: ({color, size}) => <Ionicons color={color} size={size} name={'hourglass'}/>
        }}
      />
      <BottomTabs.Screen
        name={'AllExpenses'}
        component={AllExpensesScreen}
        options={{
          title: 'All Expenses',
          tabBarLabel: 'All Expenses',
          tabBarIcon: ({color, size}) => <Ionicons color={color} size={size} name="calendar"/>
        }}
      />
    </BottomTabs.Navigator>
  )
};


export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={'ExpensesOverview'}
            component={ExpenseOverview}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen name={'ManageExpense'} component={ManageExpensesScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}