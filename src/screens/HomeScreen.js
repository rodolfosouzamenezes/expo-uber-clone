import { View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_API_KEY } from "@env";
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice'
import NavFavourites from '../components/NavFavourites';

const HomeScreen = () => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5 pt-16`}>
        <Image
          style={{
            marginLeft: 8,
            width: 100,
            height: 100,
            resizeMode: 'contain',
          }}
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
        />

        <GooglePlacesAutocomplete
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}

          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              })
            )

            dispatch(
              setDestination(null)
            )

          }}

          fetchDetails={true}
          returnKeyType={"search"}
          enablePoweredByContainer={false}
          placeholder='Qual é o seu local de partida?'
          nearbyPlacesAPI='GooglePlacesSearch'
          debounce={400}
          minLength={2}
          query={{
            key: GOOGLE_MAPS_API_KEY,
            language: 'pt-BR',
          }}
        />

        <NavOptions />
        <NavFavourites />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen
