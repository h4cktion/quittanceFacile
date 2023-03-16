import { configureStore } from '@reduxjs/toolkit';

import app from '../reducers/appSlice';

const store = configureStore({
  reducer: {
    app,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {app: AppState, perso: PersoState}
export type AppDispatch = typeof store.dispatch;
