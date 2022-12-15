import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {Repo} from "../models/Repo";

export const repoApi = createApi({
  reducerPath: "repoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://localhost:5001/",
  }),
  endpoints: (builder) => ({
    allRepositoryItems: builder.query<Repo[], void>({
      query: () => "Repo",
    }),
  }),
});

export const { useAllRepositoryItemsQuery } = repoApi;
