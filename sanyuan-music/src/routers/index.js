import React from 'react';
import {Redirect} from 'react-router-dom'
import Recommend from '../application/Recommend'
import Blacklayout from '../layouts/Blacklayout'
export default [
    {
        component : Blacklayout ,
        routes : [
            {
                path : '/',
                exact : true,
                render : () => <Redirect to={"/recommend"}
                />
            },
            {
                path : '/recommend',
                component : Recommend,
                // routes : [
                //     {
                //         path : '/recommend/:id',
                //         component : AlbumComponent
                //     }
                // ]
            },
            // {
            //     path : '/rank',
            //     component : 
            // }
        ]
    }
]