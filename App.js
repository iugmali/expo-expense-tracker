import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import ManageExpenseScreen from "./src/screens/ManageExpenseScreen";
import RecentExpensesScreen from "./src/screens/RecentExpensesScreen";
import AllExpensesScreen from "./src/screens/AllExpensesScreen";
import {GlobalStyles} from "./src/constants/styles";
import {Ionicons} from "@expo/vector-icons";
import IconButton from "./src/components/UI/IconButton";
import {Provider} from "react-redux";
import {store} from "./src/store/store";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const ExpenseOverview = () => {
  return (
    <BottomTabs.Navigator screenOptions={ ({navigation}) => ({
      headerStyle: {
        backgroundColor: GlobalStyles.colors.primary500
      },
      headerTintColor: 'white',
      tabBarStyle: {
        backgroundColor: GlobalStyles.colors.primary500
      },
      tabBarActiveTintColor: GlobalStyles.colors.accent500,
      headerRight: ({tintColor}) => (
        <IconButton
          icon={'add'}
          size={24}
          color={tintColor}
          onPress={() => {
            navigation.navigate('ManageExpense');
          }}
        />
      )
    })}>
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
      <Provider store={store} >
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerStyle: {
              backgroundColor: GlobalStyles.colors.primary500
            },
            headerTintColor: 'white',
          }}>
            <Stack.Screen
              name={'ExpensesOverview'}
              component={ExpenseOverview}
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen name={'ManageExpense'} component={ManageExpenseScreen} options={{
              presentation: 'modal'
            }}/>
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}
