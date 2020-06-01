import React from 'react';
import * as axios from 'axios';


const instence = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY" : "44b40fd4-f420-412e-b9db-9e53c005b988"}
});

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10){
        return instence.get(`users?page=${currentPage}&count=${pageSize}`)
        .then (response => {
            return response.data;
        })
    },

    followUser (id){
        return instence.post(`follow/${id}`)
        .then (response => {
            return response.data;
        })
    },

    unfollowUser (id){
        return instence.delete(`follow/${id}`)
        .then (response => {
            return response.data;
        })
    },

    checkIfLogged (){
        return instence.get(`auth/me`)
        .then (response => {
            return response.data;
        })
    },

    getUserLogo (id){
        return instence.get(`profile/${id}`)
        .then (response => {
            return response.data;
        })
    },

    getUserProfile (id){
        return instence.get(`profile/${id}`)
        .then (response => {
            return response.data;
        })
    }
}

