import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeAsyncData = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
    return true;
  } catch (e) {
    // saving error
    console.log(e);
    return false;
  }
};
export const getAsyncData = async (key: string) => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (e) {
    // saving error
    console.log(e);
  }
};

export const removeAsyncData = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (e) {
    // saving error
    console.log(e);
    return false;
  }
};
