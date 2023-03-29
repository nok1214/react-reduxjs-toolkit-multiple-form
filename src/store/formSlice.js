import { createSlice, configureStore } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    name: '',
    age: '',
    dob: '',
    phone: '',
    email: '',
    street: '',
    state: '',
    city: '',
    zip: '',
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setAge: (state, action) => {
      state.age = action.payload;
    },
    setDob: (state, action) => {
      state.dob = action.payload;
    },
    setPhone: (state, action) => {
      state.phone = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setStreet: (state, action) => {
      state.street = action.payload;
    },
    setState: (state, action) => {
      state.state = action.payload;
    },
    setCity: (state, action) => {
      state.city = action.payload;
    },
    setZip: (state, action) => {
      state.zip = action.payload;
    },
  },
});

export const {
  setName,
  setAge,
  setDob,
  setPhone,
  setEmail,
  setStreet,
  setState,
  setCity,
  setZip,
} = formSlice.actions;

export const store = configureStore({
  reducer: {
    form: formSlice.reducer,
  },
});
