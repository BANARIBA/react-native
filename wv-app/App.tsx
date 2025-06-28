import WebView from "react-native-webview";
import Constants from 'expo-constants';
import { StyleSheet, Text } from 'react-native';
import { Camera } from 'expo-camera';
import { useEffect, useState } from "react";

export default function App() {

  const [hasPermission, setHasPermission] = useState<null | "granted" | "denied" | "undetermined" | boolean>(null);

  useEffect(() => {
    const requestCameraPermission = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    requestCameraPermission();
  }, []);

  if (hasPermission === null) {
    return <Text>Esperando permiso...</Text>;
  }

  if (hasPermission === false) {
    return <Text>No se puede acceder a la cámara</Text>;
  }

  return (
    <WebView
      style={styles.container}
      source={{ uri: 'https://apps2.honduenvioshn.com:8443/HonduenviosJavaEnvironment/servlet/com.honduenvios.login' }}
      javaScriptEnabled={true}
      mediaPlaybackRequiresUserAction={false}
      allowFileAccess={true}
      scalesPageToFit={true}
      originWhitelist={['*']}
      // onShouldStartLoadWithRequest={(event) => {
      //   // Aquí puedes inspeccionar la solicitud antes de que se cargue y permitir o bloquearla.
      //   return true;
      // }}
      // onError={(syntheticEvent) => {
      //   const { nativeEvent } = syntheticEvent;
      //   console.warn('WebView error: ', nativeEvent);
      // }}
      // onHttpError={(syntheticEvent) => {
      //   const { nativeEvent } = syntheticEvent;
      //   console.warn('HTTP error: ', nativeEvent);
      // }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});