
import React, {useReducer} from 'react';
import {StyleSheet} from 'react-native';
import AppNavigator  from "./src/components/AppNavigator";
import {ContextApp, initialState, unionRdc} from "./src/reducers/unionRdc";




export default function App(props) {
    const [state, dispatch] = useReducer(unionRdc, initialState);


    // const {state, dispatch} = React.useContext(ContextApp);

    console.log("state", state)

    return (
        <ContextApp.Provider value={{state, dispatch}}>
            <AppNavigator />

        </ContextApp.Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

// проверка типов
// AppFooter.propTypes = {
//     mode: PropTypes.string,
//     setMode: PropTypes.func
// };

// save/load состояния в/из файла
// npm install --save redux-storage

// движок для redux-storage
// npm install redux-storage-engine-localstorage

//сохраняет зависимости
// react-native-fetch-blob with redux-persist, by implementing the needed methods: setItem, getItem, removeItem, getAllKeys and clear.
// Then, as rn-fetch-blob is a dependency of this project, we need to ensure its linked with
// react-native link rn-fetch-blob

//контроль правил для HOOK
//npm install eslint-plugin-react-hooks
