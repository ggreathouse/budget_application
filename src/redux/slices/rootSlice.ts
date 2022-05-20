import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        month: 0,
        income: 0,
        rent :0,
        utilities: 0,
        internet: 0,
        insurance: 0,
        phone: 0,
        misc_bills: 0,
        groceries: 0,
        dine_out: 0,
        transportation: 0,
        loans: 0,
        subscriptions: 0,
        savings: 0,
        clothing: 0,
        entertainment: 0,
        other: 0
    },
    reducers: {
        chooseMonth: (state, action) => { state.month = action.payload},
        chooseIncome: (state, action) => { state.income = action.payload},
        chooseRent: (state, action) => { state.rent = action.payload},
        chooseUtilities: (state, action) => { state.utilities = action.payload},
        chooseInternet: (state, action) => { state.internet = action.payload},
        chooseInsurance: (state, action) => { state.insurance = action.payload},
        choosePhone: (state, action) => { state.phone = action.payload},
        chooseMisc_bills: (state, action) => { state.misc_bills = action.payload},
        chooseGroceries: (state, action) => { state.groceries = action.payload},
        chooseDine_out: (state, action) => { state.dine_out = action.payload},
        chooseTransportation: (state, action) => { state.transportation = action.payload},
        chooseLoans: (state, action) => { state.loans = action.payload},
        chooseSubscriptions: (state, action) => { state.subscriptions = action.payload},
        chooseSavings: (state, action) => { state.savings = action.payload},
        chooseClothing: (state, action) => { state.clothing = action.payload},
        chooseEntertainment: (state, action) => { state.entertainment = action.payload},
        chooseOther: (state, action) => { state.other = action.payload},

    }
})

export const reducer = rootSlice.reducer;
export const { chooseMonth, chooseIncome, chooseRent, chooseUtilities, chooseInternet, chooseInsurance,
               choosePhone, chooseMisc_bills, chooseGroceries, chooseDine_out, chooseTransportation,
               chooseLoans, chooseSubscriptions, chooseSavings, chooseClothing, chooseEntertainment, 
               chooseOther} = rootSlice.actions 