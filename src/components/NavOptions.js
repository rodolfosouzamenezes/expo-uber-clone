import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import { Icon } from '@rneui/base'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const data = [
  {
    id: "123",
    title: "Viagem",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: "456",
    title: "Envios",
    image: "https://links.papareact.com/28w",
    screen: "EatsScreen",
  },
];

const NavOptions = () => {
  const navigation = useNavigation();

  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.screen)}
          style={tw`pr-4 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
        >
          <View>
            <Image
              style={{ width: 120, height: 120, resizeMode: 'contain' }}
              source={{ uri: item.image }}
            />
            <Text style={tw`mt-2 text-lg font-semibold text-center`}>{item.title}</Text>
          </View>
          <Icon 
            style={tw`p-2 bg-black rounded-full w-10 mt-4`}
            name='arrowright' color='white' type='antdesign'
          />
        </TouchableOpacity>
      )}
    />
  )
}

export default NavOptions