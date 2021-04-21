import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, FlatList, TextInput } from 'react-native';

import { COLORS, FONTS, doctors, buttons, dummy, icons, SIZES } from '../../contants';



const ScrollableDoctorCard = ({ doctorsList }) => {

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={{ marginHorizontal: SIZES.padding }}
      onPress={() => onPress(item)}
    >
      <View style={{ width: SIZES.width / 2 }}>

        <Image
          source={{ uri: item.avatar }}
          resizeMode='cover'
          style={{
            width: 200,
            height: 300,
            borderRadius: SIZES.radius * 2,
          }}
        />

        <View
          style={{
            position: 'absolute',
            width: '80%',
            height: 90,
            borderRadius: 15,
            backgroundColor: COLORS.white,
            paddingHorizontal: 15,
            paddingVertical: 10,
            margin: 4,
            bottom: 5,
            left: 10
          }}
        >
          <Text style={{ ...FONTS.h4 }} >{item.name}</Text>
          <Text style={{ ...FONTS.body4, color: COLORS.gray }} >{item.ocupation}</Text>
          <View style={{ flexDirection: 'row' }} >
            <Image
              source={icons.star}
              style={{
                width: 20,
                height: 20,
                tintColor: COLORS.yellow
              }}
            />
            <Text style={{ ...FONTS.h4, color: COLORS.gray, marginLeft: 10 }}>{item.stars}</Text>
          </View>
        </View>
      </View>

    </TouchableOpacity>
  )

  return (
    <View style={{ marginTop: SIZES.padding }} >
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={doctorsList}
        renderItem={renderItem}
        keyExtractor={item => `${item.id}`}
      />
    </View>
  )
}

const Home = () => {

  function renderHeader() {
    return (
      <View
        style={{
          marginTop: SIZES.padding * 2,
          marginHorizontal: SIZES.padding
        }}
      >
        {/* Header Buttons */}
        <View
          style={{
            flexDirection: 'row'
          }}
        >
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'flex-start',
            }}
            onPress={() => { console.log('Press menu button!') }}
          >
            <Image
              source={icons.menuBar}
              resizeMode='contain'
              style={{
                tintColor: COLORS.white,
                width: 25,
                height: 25,
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              alignItems: 'flex-end',
              justifyContent: 'center',
            }}
          >
            <Image
              source={doctors.girl4}
              resizeMode='contain'
              style={{
                width: 25,
                height: 25,
              }}
            />
          </TouchableOpacity>

        </View>

        {/* Title */}
        <View style={{ marginTop: SIZES.padding, marginHorizontal: SIZES.padding }} >
          <Text tyle={{ color: COLORS.black, ...FONTS.h3 }} >Hello,</Text>
          <Text style={{ color: COLORS.black, ...FONTS.h2 }}>Thais Gennari!</Text>
        </View>
      </View>
    )
  }

  function renderSearch() {
    return (
      <View style={{
        justifyContent: 'center',
        alignItems: 'center'
      }}>

        <View style={{
          marginTop: SIZES.padding / 2,
          flexDirection: 'row',
          backgroundColor: COLORS.white,
          justifyContent: 'flex-start',
          alignItems: 'center',
          borderRadius: 20,
          width: 350,
          height: 60,
        }}>
          <Image
            source={icons.circle}
            style={{
              width: 20,
              height: 20,
              tintColor: COLORS.lightGray2,
              marginLeft: SIZES.padding
            }}
          />

          <TextInput
            style={{
              paddingHorizontal: SIZES.padding,
            }}
            placeholder="Search"
          />
        </View>
      </View>
    )
  }

  function renderItemList() {

    return (
      <View style={{

      }} >

        {/* Title */}
        <View
          style={{
            margin: 10,
            marginTop: SIZES.padding,
            marginHorizontal: SIZES.padding,
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}
        >
          <Text style={{ color: COLORS.black, ...FONTS.h3 }} >Top Doctors</Text>
          <TouchableOpacity>
            <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>See More</Text>
          </TouchableOpacity>
        </View>

        {/* Doctor Itens */}
        <View style={{
          margin: 5,
        }} >
          <ScrollableDoctorCard
            doctorsList={dummy}
          />
        </View>
      </View>
    )
  }

  function renderOptionsList() {
    return (
      <View>
        {/* Title */}
        <View style={{
          margin: 10,
          marginTop: SIZES.padding / 2,
          marginHorizontal: SIZES.padding,
        }} >
          <Text style={{ color: COLORS.black, ...FONTS.h2 }} >What Do You Need?</Text>
        </View>

        <View>

        </View>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      {renderSearch()}
      <View style={{
        marginTop: SIZES.padding,
        backgroundColor: COLORS.white,
        borderRadius: 50,
        width: '100%',
        height: '100%',
      }}>
        {renderItemList()}
        {renderOptionsList()}

      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  }
})

export default Home;
