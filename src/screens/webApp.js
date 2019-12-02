import React, {Component} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Platform,
  Image,
  View,
  Text,
} from 'react-native';
import {WebView} from 'react-native-webview';
class WebApp extends Component {
  state = {};

  ActivityIndicatorLoadingView = () => {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
        }}>
        <Image
          style={{height: 120, width: 100}}
          source={require('../images/logo.png')}
        />
        <Text style={{color: 'black', fontStyle: 'italic', fontWeight: 'bold'}}>
          Quranic Arabic made easy
        </Text>
        <ActivityIndicator color="black" size="large" />
      </View>
    );
  };
  render() {
    return (
      <WebView
        style={styles.WebViewStyle}
        source={{uri: 'https://www.quranic-arabic-made-easy.co.uk/'}}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
        // renderLoading={this.ActivityIndicatorLoadingView}
      />
    );
  }
}

export default WebApp;

const styles = StyleSheet.create({
  WebViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 20 : 0,
  },

  ActivityIndicatorStyle: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
