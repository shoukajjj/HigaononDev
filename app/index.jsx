import { TextInput, View, SafeAreaView, ActivityIndicator } from 'react-native'
import React from 'react'

const Homescreen = () => {
  <SafeAreaView className='flex-1'>
    <View className='flex-1 justify-center items-center'>
      <TextInput className = 'w-4/5 border-2 border-amber-950 bg-gray-500 rounded-e-2xl p-10'
        placeholder="Search..."
        clearButtonMode="always"
        autoCapitalize='none'
      />
    </View>
  </SafeAreaView>
}

export default Homescreen