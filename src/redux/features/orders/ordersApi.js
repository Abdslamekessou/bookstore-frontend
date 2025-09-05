import { createApi ,fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import getBaseUrl from "../../../utils/getBaseUrl";

const ordresApi = createApi({
    reducerPath : 'ordersApi' ,
    baseQuery : fetchBaseQuery( {
        baseUrl : `${getBaseUrl()}/api/orders` ,
        credentials : 'include' ,
    }),
    tagTypes : ['Orders'] ,
    endpoints : (builder) => ({
        createOrder : builder.mutation({
            query : (newOrder) => ({
                url : "/" ,
                method : "POST" ,
                body : newOrder ,
                credentials : "include"
            })
        }),
        getOrdersByEmail : builder.query({
            query : (email) => ({
                url : `/email/${email}` ,
                method : "GET" ,
                credentials : "include"
            })
            , 
            providesTags : ['Orders'] //explain this please
        })
    })
})


export const {useCreateOrderMutation , useGetOrdersByEmailQuery} = ordresApi;

export default ordresApi;