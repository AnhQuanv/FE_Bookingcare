// src/redux/rootReducer.js
import { combineReducers } from 'redux';
import authReducer from './slices/authSlice';
// import storage from 'redux-persist/lib/storage';

// const accountPersistConfig = {
//     key: 'account',
//     storage,
//     whitelist: ['user', 'isAuthenticated'], // Chỉ lưu user và isAuthenticated
// };

// const rootReducer = combineReducers({
//     account: persistReducer(accountPersistConfig, authReducer),
// });

const rootReducer = combineReducers({
    account: authReducer,
});

export default rootReducer;
