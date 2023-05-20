import React from 'react'
import { combineReducers, legacy_createStore } from "redux"



const initialState ={
    data : []
}


export const store = legacy_createStore(initialState)