import React, { useState,useEffect } from "react";
import { Text,View,FlatList,StyleSheet} from "react-native"
import GlobalStyles from "../../styles/GlobalStyles";
import DrawerScreenWrapper from "../../components/DrawerScreenWrapper";
import Constants from "../../utills/Constants";
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import colors from "../../res/color";
import dimensions from "../../res/dimenstion";
import string from "../../res/string";

const Earning = ({navigation}) =>{

const [index, setIndex] = React.useState(0);


const DeliveredOrders = () => {
  const data = [
    { id: '1', title: 'Order #121', noOfMeal: '3 Meals' , date:'12th Oct 2025' , type :'Lunch' },
    { id: '2', title: 'Order #122', noOfMeal: '7 Meals' , date:'12th Oct 2025' , type :'Dinner'},
    { id: '3', title: 'Order #123', noOfMeal: '10 Meals' ,date:'13th Oct 2025' , type :'Lunch'},
    { id: '4', title: 'Order #124', noOfMeal: '16 Meals' ,date:'14th Oct 2025' , type :'Lunch'},
    { id: '5', title: 'Order #125', noOfMeal: '14 Meals' ,date:'14th Oct 2025' , type :'Dinner'},
    { id: '6', title: 'Order #126', noOfMeal: '8 Meals' ,date:'15th Oct 2025' , type :'Lunch'},
  ];

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ padding: 15 }}
      renderItem={({ item }) => (
        <View style={styles.orderItem}>
          <Text style={GlobalStyles.txt_bold_black_16}>{item.title}</Text>
          <Text style={GlobalStyles.txt_regular_black_14}>{item.noOfMeal}</Text>
          <Text style={GlobalStyles.txt_regular_black_14}>{item.date}</Text>
          <Text style={GlobalStyles.txt_regular_black_14}>{item.type}</Text>

        </View>
      )}
    />
  );
};

const EarningScreen = () => {
  const earningSummary = {
    totalEarned: '₹25,000',
    withdrawable: '₹5,500',
  };

  const transactions = [
    { id: '1', type: 'Order', amount: '₹400' },
    { id: '2', type: 'Withdraw', amount: '-₹1000' },
  ];

  return (
    <View style={{ flex: 1, padding: 15 }}>
      <View style={styles.summaryCard}>
        <Text style={GlobalStyles.txt_regular_black_14}>Total Earned: {earningSummary.totalEarned}</Text>
        <Text style={GlobalStyles.txt_regular_black_16}>Withdrawable: {earningSummary.withdrawable}</Text>
      </View>

      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.transactionItem}>
            <Text>{item.type}</Text>
            <Text>{item.amount}</Text>
          </View>
        )}
      />
    </View>
  );
};

const [routes] = React.useState([
    { key: 'delivered', title: 'Delivered' },
    { key: 'earnings', title: 'Earnings' },
  ]);   
  
const renderScene = SceneMap({
    delivered: DeliveredOrders,
    earnings: EarningScreen,
  });
   
 return(
           
 <DrawerScreenWrapper
          navigation={navigation}
          headerTitle={string.screenNames.Earnings}
          index={Constants.drawerIndex.EARNING}
        >
             <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                renderTabBar={props => (
                        <TabBar
                        {...props}
                        indicatorStyle={{ backgroundColor: colors.primary }}
                        style={{ backgroundColor: colors.white }}
                        activeColor= {colors.primary}
                        inactiveColor="gray"
                        />
                        )}
                />
            
    </DrawerScreenWrapper>
)

}
export default Earning

const styles = StyleSheet.create({
  orderItem: {
    backgroundColor: colors.gray,
    padding: dimensions.dp_15,
    marginBottom: dimensions.dp_12,
    borderRadius: dimensions.dp_10,
  },

  summaryCard: {
    backgroundColor: '#e8f0ff',
    padding: dimensions.dp_15,
    marginBottom: dimensions.dp_20,
    borderRadius: dimensions.dp_10,
  },
  transactionItem: {
    padding: dimensions.dp_15,
    backgroundColor: '#f9f9f9',
    marginBottom: dimensions.dp_12,
    borderRadius: dimensions.dp_10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});