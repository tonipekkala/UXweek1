import {StatusBar} from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image, ImageBackground } from "react-native";
import {TouchableWithoutFeedback} from "react-native-web";
import { Feather } from '@expo/vector-icons';

const App = () => {
  return (
    <>
    <SafeAreaView style={styles.container}>
      <View style={styles.A }>
      <ImageBackground 
        source={{uri: "http://placekitten.com/300/300"}} 
        resizeMode="cover" 
        style={styles.catLogo}
        /> 
        <Text style={styles.slogan}> Cats</Text>
        <Feather style={styles.icon} name='settings' size={30} color="#ffffff"/>

      </View>
      <View style={styles.B }>
      <Image
        source = {{uri: "http://placekitten.com/300/300"}}
        style={styles.image}
        />
        <Text>B</Text>
      </View>
      <View style={styles.C}>
        <View style={styles.oikea}>
          <Text>vasen</Text>
        </View>
        <View style={styles.vasen}>
          <Text>oikea</Text>
       </View>
      </View>
      <View>
        <Text style={styles.footer}>footer</Text>
      </View>
      <StatusBar style="auto"/>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b1421',
    //alignItems: 'stretch',
   //justifyContent: 'center',
  },
  A: {
    flex: 1, 
    position: 'relative',
    marginBottom: 15,
    //height: 50,
    //width: 50,
    backgroundColor: "#120c20",
    marginBottom: 5,
    borderWidth: 5,
    borderBottomRightRadius: 30,
    overflow: "hidden"
  },
  B: {
    //flex: 2, 
    height: 200,
    width: '50%',
    alignSelf: 'center',
    backgroundColor: "#080907",
    borderWidth: 5,
    marginBottom: 5,
    borderBottomRRadius: 30,
    borderBottomRightRadius: 30,
    overflow: "hidden"
  },
  C: {
    flex: 3,
    flexDirection: "row",
    //height: 50,
    //width: 50, 
    backgroundColor: "#e1ff00",
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
  },
  vasen: {
    padding: 5,
    backgroundColor: "green",
    width: "50%"
  },
  oikea: {
    padding: 5,
    backgroundColor: "pink",
    width: "50%"
  },
  footer: {
    height: 50,
    width: "50%",
  },
  image: {
    width: "100%",
    height: "100%",
    borderBottomRightRadius: 30,
    borderBottomEndRadius: 30,
  },
  slogan: {
    backgroundColor: "#0066ff",
    color: "#f0f0f0",
    fontSize: 30,
    fontFamily: 'Cochin',
    width: 150,
    position: 'absolute',
    bottom: 10,
    left: 30,
    zIndex: 1,

  },
  icon: {
    position: "absolute",
    marginTop: 10,
    marginRight: 10,
    alignSelf: "flex-end",
  },
  catLogo: {
    flex: 1,
  },
  rounding: {
    borderBottomEndRadius: 20,
  }
});

export default App;