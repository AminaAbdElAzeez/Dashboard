import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./Reducers/AuthReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["token", "email", "name"],
};

const persistedReducer = persistReducer(persistConfig, authReducer);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
