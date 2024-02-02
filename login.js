import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Alert, Image, ImageBackground, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '80%',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    position: 'absolute',
    top: 20, // Mover un poco hacia arriba
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
});

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === '' || password === '') {
      Alert.alert('Datos incompletos', 'Por favor ingresa correo y contraseña');
    } else {
      // Implementa tu lógica de autenticación aquí
      // Por ahora, simplemente navegamos a la pantalla del menú
      navigation.navigate('Menu');
    }
  };

  return (
    <ImageBackground source={require('./assets/burbujas.jpeg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        {/* Centramos la imagen de perfil y la movemos un poco hacia arriba */}
        <Image source={require('./assets/persona.jpg')} style={styles.profileImage} />
        <TextInput style={styles.input} placeholder="Correo electrónico" onChangeText={setEmail} value={email} />
        <TextInput style={styles.input} placeholder="Contraseña" onChangeText={setPassword} value={password} secureTextEntry={true} />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#3b5998' }]}>
            <Text style={{ color: '#fff' }}>Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#00acee' }]}>
            <Text style={{ color: '#fff' }}>Twitter</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#dd4b39' }]}>
            <Text style={{ color: '#fff' }}>Google</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;

