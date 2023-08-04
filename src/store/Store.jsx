import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

// add all reducers here
import counterReducer from "../pages/app/counter/Store";
import dashboardReducer from "../pages/app/dashboard/Store";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    dashboard: dashboardReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
export default store;
