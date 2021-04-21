import React from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';

const Header = () => {
  return(
    <SafeAreaView>
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

    </SafeAreaView>
  )
}

export default Header;