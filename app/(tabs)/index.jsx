import { View,SafeAreaView,TextInput } from 'react-native'
import React from 'react'

const Home = () => {
 return (

   <SafeAreaView className='flex-1'>
   <View className='flex-1 justify-center items-center'>
     <TextInput className = 'w-4/5 border-2 border-amber-950 rounded-lg p-4'
       placeholder="Search..."
       clearButtonMode="always"
       autoCapitalize='none'
     /> 
   </View>
 </SafeAreaView>
 
 )
}

export default Home