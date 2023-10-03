import React from "react";
import { Text, View, SafeAreaView,StyleSheet } from "react-native";

const App = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        {/* <Text> Current Weather is HOT</Text> */}
        <Text style={styles.temp}>6</Text>
        <Text style={styles.feels}>Feels like 5</Text>
        <View style = {styles.highlowWrapper}>
          <Text style={styles.highlow}> High: 8</Text>
          <Text style={styles.highlow}> Low: 6</Text>
        </View>
      </View>

      <View style={styles.bodyWrapper}>
        <Text style={styles.description}>Its sunny</Text>
        <Text style={styles.message}>Its perfect t-shirt Weather</Text>
      </View>
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
  wrapper:{
    flex:1,
    backgroundColor: 'orange'
  },
  container:{
    backgroundColor: 'orange',
    flex:1,
    alignItems:"center"
  },
 
  temp:{
    color:"black",
    fontSize: 48
  },
  feels:{
    color: "black",
    fontSize: 30
  },
  highlow:{
    color:"black",
    fontSize:20
  },
  highlowWrapper:{
    flexDirection:"row"
  },
  bodyWrapper:{
    justifyContent:'flex-end',
    alignItems:'flex-start'
  },
  description:{
    fontSize:48
  },
  message:{
    fontSize: 30
  }

})
export default App