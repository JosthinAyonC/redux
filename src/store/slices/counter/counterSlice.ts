import { createSlice } from '@reduxjs/toolkit'

export interface CounterState {
    value: number
}

const initialState: CounterState = {
    value: 10,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        incrementCounter: (state) => {
            state.value += 1
        },
        decrementCounter: (state) => {
            state.value -= 1
        },
        incrementOn: (state, action) => {
            state.value += action.payload
        },
        restart: (state) => {
            state.value = initialState.value
        },
    },
})

export const { incrementCounter, decrementCounter, incrementOn, restart } = counterSlice.actions