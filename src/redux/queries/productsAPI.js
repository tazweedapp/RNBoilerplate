import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import axiosInstance from '@utils/axiosInstance';

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
  async ({ url, method, data, params, headers }) => {
    try {
      const result = await axiosInstance({
        url: baseUrl + url,
        method,
        data,
        params,
        headers,
      });
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const productsAPI = createApi({
  reducerPath: 'productsAPI',
  baseQuery: axiosBaseQuery({
    baseUrl: 'products',
  }),
  tagTypes: ['Products'],
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: (params) => ({
        url: '',
        method: 'GET',
        params,
      }),
      transformResponse: (response) => response.products,
      merge: (currentState = [], incomingState = [], { arg }) => {
        if (arg?.skip !== 0) {
          return [...currentState, ...incomingState];
        }
        return incomingState;
      },
      serializeQueryArgs: ({ endpointName, queryArgs }) => {
        const { skip, ...rest } = queryArgs;
        return `${endpointName}_${JSON.stringify(rest)}`;
      },
      forceRefetch: ({ currentArg, previousArg }) => {
        return JSON.stringify(currentArg) !== JSON.stringify(previousArg);
      },
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ _id }) => ({ type: 'Products', id: _id })),
              { type: 'Products', id: 'All' },
            ]
          : [{ type: 'Products', id: 'All' }],
    }),
  }),
});

export const { useGetAllProductsQuery } = productsAPI;
