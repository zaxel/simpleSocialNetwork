import React from 'react';
import * as axios from 'axios';


const instence = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY" : "1203fa1f-c9a4-43f5-bca3-2e2f29d0227d"}
});

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10){
        return instence.get(`users?page=${currentPage}&count=${pageSize}`)
        .then (response => {
            return response.data;
        })
    }
}

export const followAPI = {
    followUser (id){
        return instence.post(`follow/${id}`)
        .then (response => {
            return response.data;
        })
    }
}

export const unfollowAPI = {
    unfollowUser (id){
        return instence.delete(`follow/${id}`)
        .then (response => {
            return response.data;
        })
    }
}

export const ifLoggedInAPI = {
    checkIfLogged (){
        return instence.get(`auth/me`)
        .then (response => {
            return response.data;
        })
    }
}

export const userLogoAPI = {
    getUserLogo (id){
        return instence.get(`profile/${id}`)
        .then (response => {
            return response.data;
        })
    }
}

export const profileAPI = {
    getUserProfile (id){
        return instence.get(`profile/${id}`)
        .then (response => {
            return response.data;
        })
    }
}


