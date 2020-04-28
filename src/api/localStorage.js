


export function stateToLocalStorage(dispatch, type, payload, state ) {
    dispatch({type: type, payload: payload});
    console.log("stateToLocalStorage.state = ", state);
    return state;
}



// export const LOAD = 'REDUX_STORAGE_LOAD';
// export const SAVE = 'REDUX_STORAGE_SAVE';

// const engine = createEngine('my-save-key');
// const middleware = storage.createMiddleware(engine);
// const createStoreWithMiddleware = applyMiddleware(middleware);
// const store = createStoreWithMiddleware(reducer);

// const customMiddleWare = store => next => action => {
//     console.log("Middleware triggered:", action);
//     next(action);
// };

// import { initial, final } from './log';
// import localStorage from './localStorage';
//
// export default ({ state, action, handler }) => {
//     const chain = [initial, handler, localStorage, final];
//
//     return chain.reduce((st, fn) => fn(st, action), state);
// };
