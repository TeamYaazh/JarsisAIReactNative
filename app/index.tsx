import { StyleSheet, TextInput, Button, Alert, Image, Text, View, ToastAndroid } from 'react-native';
import { WebView } from 'react-native-webview';
import { Audio } from 'expo-av';
import { useEffect, useState } from 'react';

export default function Index() {

  const [permissionGranted, setPermissionGranted] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Audio.requestPermissionsAsync();
      if (status === 'granted') {
        setPermissionGranted(true);
      } else {
        console.warn('Microphone permission denied');
      }
    })();
  }, []);

  if (!permissionGranted) {
    return <Text>Microphone permission is required</Text>;
  }

  return (
    // <View
    //   style={{
    //     flex: 1,
    //     justifyContent: "center",
    //     alignItems: "center",
    //   }}
    // >
    //   <Text>Edit app/index.tsx to edit this screen.</Text>
    // </View>
    <WebView
      style={styles.container}
      source={{ uri: 'https://testapp.jarsis.ai/' }}
      mediaPlaybackRequiresUserAction={false}
      allowsInlineMediaPlayback
    />
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});