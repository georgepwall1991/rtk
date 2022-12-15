import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {Project} from "../models/Project";

export const projectApi = createApi({
  reducerPath: "projectApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://localhost:5001/",
  }),
  endpoints: (builder) => ({
    allProjectItems: builder.query<Project[], void>({
      query: () => "Project",
    }),
  }),
});

export const { useAllProjectItemsQuery } = projectApi;
