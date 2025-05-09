import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import ledgerSlice from "./ledger/ledgerSlice";
import principalSlice from "./principal/principalSlice";
import serverSlice from "./server/serverSlice";
import entitiesSlice from "./entities/entitiesSlice";
import evaluationsSlice from "./evaluations/evaluationsSlice";

export const store = configureStore({
  reducer: {
    ledger: ledgerSlice,
    principal: principalSlice,
    server: serverSlice,
    entities: entitiesSlice,
    evaluations: evaluationsSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
