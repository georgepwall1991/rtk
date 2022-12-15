import {configureStore} from "@reduxjs/toolkit";
import {repoApi} from '../services/repoApi';
import {projectApi} from '../services/projectApi';
import {branchApi} from "../services/branchApi";

export const store = configureStore({
    reducer: {
        [repoApi.reducerPath]: repoApi.reducer,
        [projectApi.reducerPath]: projectApi.reducer,
        [branchApi.reducerPath]: branchApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(repoApi.middleware),
            getDefaultMiddleware().concat(projectApi.middleware),
            getDefaultMiddleware().concat(branchApi.middleware)
    }
});