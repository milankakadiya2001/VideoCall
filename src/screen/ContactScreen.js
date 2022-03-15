import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TextInput,
  Pressable,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import contacts from '../../assets/data/Contact.json';
import { tsCallSignatureDeclaration } from '@babel/types';

const ContactScreen = ({ navigation}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterContact, setFilterContact] = useState(contacts);

  useEffect(() => {
    const newContacts = contacts.filter(contact =>
      contact.user_display_name
        .toLowerCase()
        .includes(searchTerm.toLowerCase()),
    );
    setFilterContact(newContacts);
  }, [searchTerm]);

  const callUser = (user) => {
    navigation.navigate("CallingScreen", {user})
  }


  return (
    <View style={styles.main}>
      <TextInput
        placeholder="Search..."
        value={searchTerm}
        onChangeText={setSearchTerm}
        style={styles.search}
      />
      <FlatList
        data={filterContact}
        renderItem={({item}) => (
          <Pressable onPress={() => callUser(item)} >
            <Text style={styles.list}>{item.user_display_name}</Text>
          </Pressable>
        )}
        ItemSeparatorComponent={() => <View style={styles.seprator} />}
      />
    </View>
  );
};

export default ContactScreen;

const styles = StyleSheet.create({
  main: {
    padding: 10,
    marginTop: 5,
  },
  list: {
    fontSize: 16,
    marginVertical: 10,
  },
  seprator: {
    height: 1,
    width: '100%',
    backgroundColor: 'lightgrey',
  },
  search: {
    width: '100%',
    padding: 8,
    backgroundColor: 'lightgrey',
    borderRadius: 7,
  },
});
