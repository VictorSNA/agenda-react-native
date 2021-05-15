import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const ImportPhoto = (props) => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Por favor, permita o acesso a biblioteca de fotos!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
      props.addImage.addImage(result.uri);
    }
  }

  return (
    <View style={styles.button}>
      <Button
        title="Selecione uma foto"
        onPress={pickImage}
        color="#CCC"
        />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    </View>
  )
}

export default ImportPhoto;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center'
  }
})