import React, { useEffect } from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Platform } from 'react-native';
import HomeIndex from '../page/main/home/Index';
import { View } from 'react-native';
import { Text } from 'react-native';
import { statusHeight } from '../utils/StatusHeight';
import NoticeIndex from '../page/main/notice/Index';
import RankingIndex from '../page/main/ranking/Index';
import MyIndex from '../page/main/my/Index';
import NewsIndex from '../page/main/news/Index';
const Tab = createMaterialBottomTabNavigator();

function Tabs({ navigation }) {
  useEffect(() => {
    navigation.setOptions({
      header: () => <View style={{ marginTop: statusHeight+10 }}></View>
    });
  }, [navigation]);
  let iconName = Platform.OS === 'ios' ? 'ios-' : 'md-';
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#f0edf6"
      inactiveColor="#818181"
      barStyle={{ backgroundColor: '#2a2d30' }}
    >
      <Tab.Screen
        name="Home"
        component={HomeIndex}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => <Ionicons name={`${iconName}home-outline`} color={color} size={20} />
        }}
      />
       <Tab.Screen
        name="Notice"
        component={NoticeIndex}
        options={{
          tabBarLabel: 'Notice',
          tabBarIcon: ({ color }) => <Ionicons name={`${iconName}chatbubbles-outline`} color={color} size={20} />
        }}
      />
       <Tab.Screen
        name="Ranking"
        component={RankingIndex}
        options={{
          tabBarLabel: 'Ranking',
          tabBarIcon: ({ color }) => <Ionicons name={`${iconName}trophy-outline`} color={color} size={20} />
        }}
      />
       <Tab.Screen
        name="News"
        component={NewsIndex}
        options={{
          tabBarLabel: 'News',
          tabBarIcon: ({ color }) => <Ionicons name={`${iconName}newspaper-outline`} color={color} size={20} />
        }}
      />
       <Tab.Screen
        name="My"
        component={MyIndex}
        options={{
          tabBarLabel: 'My',
          tabBarIcon: ({ color }) => <Ionicons name={`${iconName}person-circle-outline`} color={color} size={20} />
        }}
      />
      
    </Tab.Navigator>
  );
}

export default Tabs;
