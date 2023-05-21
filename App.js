
import { StyleSheet, View, Image, Text } from 'react-native';
import {Dashboard}  from './screens'

import {list} from "./services/apiServices";
import {useEffect, useState} from "react";
export default function App() {

  return (
    <View style={styles.container}>
      <View style={styles.navigator}>
        <Dashboard/>
      </View>
      </View>

  );
}

const styles = StyleSheet.create({ 
  container: {

  },
});
