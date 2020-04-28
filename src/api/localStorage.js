


export function loadState() {
    getState;
    return state;
}

export function stateToFile(state) {
    storeState;
}


const storeState = async () => {
    try {
      await AsyncStorage.setItem('@storage_Key', 'stored value')
    } catch (e) {
      // saving error
    }
  }
  
//   Read data
const getState = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_Key')
      if(value !== null) {
        // value previously stored
      }
    } catch(e) {
      // error reading value
    }
  }

