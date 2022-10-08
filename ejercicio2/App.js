import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Multiventanas from './src/components/navigation/Multiventanas';

export default function App() {
  return (
        <>
          <StatusBar hidden={false} translucent={false} backgroundColor={"black"} barStyle={"light-content"}></StatusBar>
          <NavigationContainer>
            <Multiventanas/>
          </NavigationContainer>
        </>
  );
}

