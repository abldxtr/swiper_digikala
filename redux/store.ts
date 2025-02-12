// store.ts
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { counterSlice } from "./reducer/count";

const persistConfig = {
  key: "root",
  storage,
};

// const persistedReducer = persistReducer(persistConfig, counterReducer);
const rootReducer = combineReducers({
  count: counterSlice,
});

// export const store = configureStore({
//   reducer: { counter: persistedReducer },
// });

export const makeConfiqureStore = () =>
  configureStore({
    reducer: rootReducer,
  });

// export const persistor = persistStore(store);

export const makeStore = () => {
  const isServer = typeof window === undefined;
  if (isServer) {
    makeConfiqureStore();
  } else {
    const persistedReducer = persistReducer(persistConfig, rootReducer);
    let store: any = configureStore({
      reducer: persistedReducer,
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false, // برای جلوگیری از ارورهای redux-persist
        }),
    });
    store.__persistore = persistStore(store);
    return store;
  }
};

// export type AppStore = ReturnType<typeof makeStore>;

// export type RootState = ReturnType<AppStore["getstate"]>;
// export type AppDispatch = AppStore["dispatch"];

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

// how to setup redux toolkit with redux persist in
