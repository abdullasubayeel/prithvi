import React, {useEffect, useState} from 'react';
import {
  FlatList,
  View,
  StyleSheet,
  ActivityIndicator,
  Dimensions,
  Text,
  TextInput,
} from 'react-native';
import Contacts from 'react-native-contacts';
import Contact from './Contact';
import {COLORS} from '../../../constants/colors';
import {globalStyles} from '../../../styles/GlobalStyles';

type ContactInfo = {
  company: string;
  department: string | null;
  displayName: string;
  emailAddresses: string[];
  familyName: string;
  givenName: string;
  hasThumbnail: boolean;
  imAddresses: string[];
  isStarred: boolean;
  jobTitle: string | null;
  middleName: string;
  note: string | null;
  phoneNumbers: PhoneNumber[];
  postalAddresses: PostalAddress[];
  prefix: string | null;
  rawContactId: string;
  recordID: string;
  suffix: string | null;
  thumbnailPath: string;
  urlAddresses: string[];
};
interface PhoneNumber {
  id: string;
  label: string;
  number: string;
}

interface PostalAddress {
  // Define properties for postal address if available in your use case
  // For example:
  // street: string;
  // city: string;
  // state: string;
  // postalCode: string;
  // country: string;
}
const ContactsList = () => {
  const [searchText, setSearchText] = useState('');
  const [contacts, setContacts] = useState<ContactInfo[]>([]);
  const [filteredContacts, setFilteredContacts] = useState<ContactInfo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    Contacts.getAll().then((contacts: any) => {
      console.log(contacts[0]);
      setContacts(contacts);

      setLoading(false);
    });
  }, []);

  const keyExtractor = (item: any, idx: any) => {
    return item?.recordID?.toString() || idx.toString();
  };
  const renderItem = ({item, index}: any) => {
    return <Contact contact={item} />;
  };

  useEffect(() => {
    const newArr = contacts.filter(obj => obj.displayName.includes(searchText));
    setFilteredContacts(newArr);
  }, [searchText]);

  return (
    <View style={{backgroundColor: COLORS.backgroundColor, flex: 1}}>
      <TextInput
        placeholder="Search your contacts"
        value={searchText}
        onChangeText={text => setSearchText(text)}
        style={styles.searchField}></TextInput>
      {loading ? (
        <View
          style={{
            height: Dimensions.get('window').height,
            backgroundColor: COLORS.backgroundColor,
          }}>
          <ActivityIndicator size="large" color="#222" />
        </View>
      ) : (
        <FlatList
          data={filteredContacts}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          style={styles.list}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  searchField: {
    backgroundColor: COLORS.white,
    marginHorizontal: 16,
    borderRadius: 8,
    marginVertical: 12,
    paddingHorizontal: 12,
  },
});
export default ContactsList;
