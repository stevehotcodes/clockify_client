import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const employeeListingApi = createApi({
  reducerPath: "employeeListingApi",
  baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:3000/api/` }),
  tagTypes: ["Employees"],
  endpoints: (builder) => ({
    getAllEmployees: builder.query({
      query: () => ({
        url: `user`,
        method: `GET`,
      }),
      providesTags: [`Employees`],
    }),

    getAllEmployeesByGender: builder.query({
      query: () => ({
        url: `user/gender`,
        method: `GET`,
      }),
      providesTags: [`Employees`],
    }),
    editEmployeesSchedule: builder.mutation({
      query: (employee) => ({
        url: `user/schedule/${employee.user_id}`,
        method: `PUT`,
        body: employee,
      }),
      invalidatesTags: [`Employees`],
    }),
    editEmployeePosition: builder.mutation({
      query: (employee) => ({
        url: `user/position/${employee.user_id}`,
        method: `PUT`,
        body: employee,
      }),
      invalidatesTags: [`Employees`],
    }),
  }),
});

export const {
  useGetAllEmployeesQuery,
  useGetAllEmployeesByGenderQuery,
  useEditEmployeesScheduleMutation,
  useEditEmployeePositionMutation,
} = employeeListingApi;
