import React from 'react';
// import { ApolloProvider } from '@apollo/react-hooks';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';
import Toast from 'react-native-toast-message';
// import Client from './src/Apollo/Client';
import { AuthProvider, useIsLoggedIn, useLogIn } from './utils/AuthProvider';
import AppLoading from 'expo-app-loading';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as Font from 'expo-font';
import styled from 'styled-components/native';
import { Asset } from 'expo-asset';
import * as Icon from '@expo/vector-icons';
import Theme from './Theme';
import Stack from './navigation/Stack';
import { StatusBar } from 'expo-status-bar';
export default class App extends React.Component {
  state = {
    isReady: false
  };

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._cacheResourcesAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }

    return (
      <ThemeProvider theme={Theme}>
        <AuthProvider>
          <SafeAreaProvider>
            <NavigationContainer>
              <StatusBar  translucent backgroundColor="transparent"  style="dark" />
              <Stack />
              <Toast ref={(ref) => Toast.setRef(ref)} position={'top'} topOffset={80} visibilityTime={1000} />
            </NavigationContainer>
          </SafeAreaProvider>
        </AuthProvider>
      </ThemeProvider>
    );
  }

  async _cacheResourcesAsync() {
    // const images = [];

    // const cacheImages = images.map((image) => {
    //   return Asset.fromModule(image).downloadAsync();
    // });
    const cacheIcon = Font.loadAsync({
      ...Icon.MaterialCommunityIcons.font,
      ...Icon.FontAwesome.font
    });

    return Promise.all(cacheIcon);
  }
}

const GlobalView = styled.View`
  padding: 10px;
`;
