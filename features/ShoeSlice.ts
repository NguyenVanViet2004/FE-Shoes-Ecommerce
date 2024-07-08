import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { remove } from 'lodash'

import type Shoes from '~/interfaces/Shoes'

interface State {
  selected: Shoes[]
}

const initialState: State = {
  selected: []
}

export const shoesSlice = createSlice({
  initialState,
  name: 'shoes',
  reducers: {
    add: (state, action: PayloadAction<Shoes>) => {
      state.selected.push(action.payload)
    },
    clear: (state) => {
      state.selected = []
    },
    removeItem: (state, action: PayloadAction<Shoes>) => {
      remove(state.selected, (shoes) => shoes.id === action.payload.id)
    },
    set: (state, action: PayloadAction<Shoes[]>) => {
      state.selected = action.payload
    }
  }
})

export const { clear, add, set, removeItem } = shoesSlice.actions

export default shoesSlice.reducer
