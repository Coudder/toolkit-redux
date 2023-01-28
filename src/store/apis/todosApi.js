

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const todosApi = createApi({

    reducerPath: 'todos',
    
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://jsonplaceholder.typicode.com'
    }),

    endpoints: (builder)=>({
        
        getTodos: builder.query({
            query: () => '/todos'
        }),
        getTodo: builder.query({
            query: (todoId) => `/todos/${todoId}`
        }),
    })


});


export const { useGetTodosQuery , useGetTodoQuery  } = todosApi;


/**
 * export const todosApi = createApi({

    reducerPath: 'todos', NOMBRE  NUESTRO REDUCER
    
    //AQUI LE PASAMOS NUESTRA BASE URL LO QUE NO CAMBIARA
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://jsonplaceholder.typicode.com'
    }),

    //PASAMOS LOS ENDPOINTS, LAS LLAMADAS A LA API QUE SOLICITAREMOS
    endpoints: (builder)=>({
        
        getTodos: builder.query({
            query: () => '/todos'
        })
    })

    EXPORTAMOS NUESTRO CUSTOM HOOK QUE NOS GENERA DE LA SIGUIENTE MANERA PARA QUE PUEDA SER 
    ACCESIBLE EN TRODA NUESTRA APLICACION
    export const { useGetTodosQuery   } = todosApi;

    ESTO ES UN MIDDLEWARE QUE ES ALGO QUE SE EJECUTA ANTES DE LA INTERFACE

});
 */