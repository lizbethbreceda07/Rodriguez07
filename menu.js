// MenuScreen.js

import React, { useState } from 'react';
import { View, FlatList, Image, StyleSheet, TouchableOpacity, Text, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Importa los iconos de MaterialIcons
import MenuItem from './menuItem';

const MenuScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredMenuItems, setFilteredMenuItems] = useState([]);

  // Datos de ejemplo para los elementos del menú
  const menuItems = [

    { id: 1, image: require('./assets/meduza.jpeg'), title: 'Medusa', description: 'Las medusas pueden ser muy pequeñas o muy grandes...' },
    { id: 2, image: require('./assets/foca.jpeg'), title: 'Foca', description: 'Hay 18 especies diferentes de focas...' },
    { id: 3, image: require('./assets/orca.jpeg'), title: 'Orca', description: 'Se alimentan de ballenas mientras que otras prefieren el salmón...' },
    { id: 4, image: require('./assets/pulpo.jpeg'), description: 'El pulpo es un invertebrado cefalópodo de gran fascinación, conocido por su inteligencia, habilidades de camuflaje y tentáculos prensiles.' },
    { id: 5, image: require('./assets/totuga.jpeg'), description: 'on reptiles fascinantes que habitan los océanos cálidos y templados del mundo. Con su existencia que se remonta a más de 100 millones de años, son verdaderos supervivientes y juegan un papel clave en los ecosistemas marinos' },
    { id: 6, image: require('./assets/delfin.jpeg'), description: 'Los delfines son mamíferos marinos pertenecientes a la familia Delphinidae y son conocidos por su inteligencia, sociabilidad, habilidades acrobáticas y su papel fundamental en los ecosistemas marinos. ' },
    { id: 7, image: require('./assets/caballito.jpeg'), description: 'El pulpo es un invertebrado cefalópodo de gran fascinación, conocido por su inteligencia, habilidades de camuflaje y tentáculos prensiles.' },
    { id: 8, image: require('./assets/tiburon.jpeg'), description: 'on reptiles fascinantes que habitan los océanos cálidos y templados del mundo. Con su existencia que se remonta a más de 100 millones de años, son verdaderos supervivientes y juegan un papel clave en los ecosistemas marinos' },
    { id: 9, image: require('./assets/estrella.jpeg'), description: 'Los delfines son mamíferos marinos pertenecientes a la familia Delphinidae y son conocidos por su inteligencia, sociabilidad, habilidades acrobáticas y su papel fundamental en los ecosistemas marinos. ' },
    { id: 10, image: require('./assets/mantarraya.jpeg'), description: 'El pulpo es un invertebrado cefalópodo de gran fascinación, conocido por su inteligencia, habilidades de camuflaje y tentáculos prensiles.' },
    { id: 11, image: require('./assets/globo.jpeg'), description: 'on reptiles fascinantes que habitan los océanos cálidos y templados del mundo. Con su existencia que se remonta a más de 100 millones de años, son verdaderos supervivientes y juegan un papel clave en los ecosistemas marinos' },
  ];

  // Filtrar los elementos del menú según el texto de búsqueda
  const handleSearch = (text) => {
    setSearchText(text);
    const filteredItems = menuItems.filter(item =>
      item.description.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredMenuItems(filteredItems);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}></Text>
        <View style={styles.headerRight}>
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar..."
            value={searchText}
            onChangeText={handleSearch}
          />
          <TouchableOpacity style={styles.configButton} onPress={() => console.log('Configuración')}>
            <MaterialIcons name="settings" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={searchText ? filteredMenuItems : menuItems}
        renderItem={({ item }) => <MenuItem image={item.image} title={item.title} description={item.description} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 5,
    padding: 8,
    marginRight: 10,
    flex: 1,
  },
  configButton: {
    padding: 10,
  },
});

export default MenuScreen;
