import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {Branch} from "../models/Branch";

export const branchApi = createApi({
  reducerPath: "branchApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://localhost:5001/",
  }),
  endpoints: (builder) => ({
    allBranchItems: builder.query<Branch[], void>({
      query: () => "Branch",
    }),
  }),
});

export const { useAllBranchItemsQuery } = branchApi;
