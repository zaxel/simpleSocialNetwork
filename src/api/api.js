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

    
    getUserLogo (id){
        return instence.get(`profile/${id}`)
        .then (response => {
            return response.data;
        })
    },

    getUserProfile (id){
        console.warn('Obsolete methode! Use profileAPI object instead!');
        return profileAPI.getUserProfile(id);
    }
}

export const profileAPI = {
    getUserProfile (id){
        return instence.get(`profile/${id}`)
        .then (response => {
            return response.data;
        })
    },
    getUserStatus (id){
        return instence.get(`profile/status/${id}`)
        .then (response => {
            return response.data;
        })
    },
    updateStatuse (status){
        return instence.put(`profile/status`, 
        {
            status: status
        })
        .then (response => {
            return response.data;
        })
        
    },
    savePhoto (photoFile){
        const formData = new FormData();
        formData.append('image', photoFile);
        return instence.put(`profile/photo`, formData, 
        {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then (response => {
            return response.data;
        })
    },

    updateProfile (profile){
        return instence.put(`profile`, profile)
        .then (response => {
            return response.data;
        })
    }
}
export const authAPI = {
    checkIfLogged (){
        return instence.get(`auth/me`)
        .then (response => {
            return response.data;
        })
    },
    login (email, password, rememberMe = false){
        return instence.post(`auth/login`, {
            email, password, rememberMe
        })
        .then (response => {
            return response.data;
        })
    },
    logout (){
        return instence.delete(`auth/login`)
        .then (response => {
            return response.data;
        })
    },

}

