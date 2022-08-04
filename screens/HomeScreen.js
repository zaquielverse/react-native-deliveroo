import { View, Text, TextInput, SafeAreaView, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AdjustmentsIcon, ChevronDownIcon, SearchIcon, UserIcon } from 'react-native-heroicons/outline';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import React, { useLayoutEffect } from 'react';


const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
      {/* Header */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2 px-4">
        <Image
          className='h-7 w-7 bg-gray-300 p-4 rounded-full'
          source={{
            uri: 'https://links.papareact.com/wru'
          }}
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>

      {/* Search */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4 px-4">
        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
          <SearchIcon color="gray" size={20} />
          <TextInput
            keyboardType="default"
            placeholder="Restaurants and cuisines"
          />
        </View>
        <AdjustmentsIcon color="#00CCBB" />
      </View>

      {/* Body */}
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{
          paddingBottom: 100
        }}
      >
        {/* Categories */}
        <Categories />

        {/* Features Rows */}
        <FeaturedRow
          description="Paid placements from our partners"
          id="1"
          featuredCategory="featured"
          title="Featured"
        />

        {/* Tasty Discounts */}
        <FeaturedRow
          description="Paid placements from our partners"
          id="2"
          featuredCategory="featured"
          title="Featured"
        />

        {/* Offers near you */}
        <FeaturedRow
          description="Paid placements from our partners"
          id="3"
          featuredCategory="featured"
          title="Featured"
        />

      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;
