import React, {useState, FormEvent} from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import { chooseMonth, 
        chooseClothing, 
        chooseDine_out, 
        chooseEntertainment,
        chooseGroceries,
        chooseIncome,
        chooseInsurance,
        chooseInternet,
        chooseLoans,
        chooseMisc_bills,
        chooseOther,
        choosePhone,
        chooseRent,
        chooseSavings,
        chooseSubscriptions,
        chooseTransportation,
        chooseUtilities } from '../../redux/slices/rootSlice';
import { Input } from '../sharedComponents/Input';
import { serverCalls } from '../../api';
import { useGetData } from '../../custom-hooks';

interface BudgetFormProps {
    id?:string;
    data?:{}
}

interface BudgetState {
    month: number;
    income: number;
    clothing: number;
    dine_out: number;
    entertainment: number;
    groceries: number;
    insurance: number;
    internet: number;
    loans: number;
    misc_bills: number;
    other: number;
    phone: number;
    rent: number;
    savings: number;
    subscriptions: number;
    transportation: number;
    utilities: number;
}

export const BudgetForm = (props:BudgetFormProps) => {

    const dispatch = useDispatch();
    let { budgetData, getData } = useGetData();
    const store = useStore()
    const name = useSelector<BudgetState>(state => state.month)
    const { register, handleSubmit } = useForm({ })

    const onSubmit = (data:any, event:any) => {
        console.log(props.id)

        if( props.id!){
            serverCalls.update(props.id!, data)
            console.log(`Updated:${data} ${props.id}`)
            window.location.reload()
            event.target.reset();
        } else {
            dispatch(chooseMonth(data.month))
            dispatch(chooseIncome(data.income))
            dispatch(chooseClothing(data.clothing))
            dispatch(chooseDine_out(data.dine_out))
            dispatch(chooseEntertainment(data.entertainment))
            dispatch(chooseGroceries(data.groceries))
            dispatch(chooseInsurance(data.insurance))
            dispatch(chooseInternet(data.internet))
            dispatch(chooseLoans(data.loans))
            dispatch(chooseMisc_bills(data.misc_bills))
            dispatch(chooseOther(data.other))
            dispatch(choosePhone(data.phone))
            dispatch(chooseRent(data.rent))
            dispatch(chooseSavings(data.savings))
            dispatch(chooseSubscriptions(data.subscriptions))
            dispatch(chooseTransportation(data.transportation))
            dispatch(chooseUtilities(data.utilities))
            serverCalls.create(store.getState())
            window.location.reload()
        };

        //  Zero Balance Counter
        // data = budgetData
        // const [count, setCount] = useState(data.income)
        // const handleDecrement = (e: FormEvent<HTMLFormElement>) => {
        //     for (var element in data){
        //         if (element){
        //             setCount((count: number) => count - data.element)
        //         }
        //     }
        // }
        // console.log(count)
        // return count
    

    };
// TODO: implement Balance Counter with {budgetData, getData} from custom hook
   
    
// Add to form tag onInput={handleDecrement}
    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="month">Month</label>
                    <Input {...register('month')} name="month" placeholder='Month' />
                </div>
                <div>
                    <label htmlFor="income">Income</label>
                    <Input {...register('income')} name="income" placeholder="Income"/>
                </div>
                <div>
                    <label htmlFor="rent">Rent/Mortgage</label>
                    <Input {...register('rent')} name="rent" placeholder="Rent/Mortgage"/>
                </div>
                <div>
                    <label htmlFor="clothing">Clothing</label>
                    <Input {...register('clothing')} name="clothing" placeholder="Clothing"/>
                </div>
                <div>
                    <label htmlFor="dine_out">Dine Out</label>
                    <Input {...register('dine_out')} name="dine_out" placeholder="Dine Out"/>
                </div>
                <div>
                    <label htmlFor="entertainment">Entertainment</label>
                    <Input {...register('entertainment')} name="entertainment" placeholder="Entertainment"/>
                </div>
                <div>
                    <label htmlFor="groceries">Groceries</label>
                    <Input {...register('groceries')} name="groceries" placeholder="Groceries"/>
                </div>
                <div>
                    <label htmlFor="insurance">Insurance</label>
                    <Input {...register('insurance')} name="insurance" placeholder="Insurance"/>
                </div>
                <div>
                    <label htmlFor="internet">Internet</label>
                    <Input {...register('internet')} name="internet" placeholder="Internet"/>
                </div>
                <div>
                    <label htmlFor="loans">Loans/Debt</label>
                    <Input {...register('loans')} name="loans" placeholder="Loans"/>
                </div>
                <div>
                    <label htmlFor="misc_bills">Miscellaneous Bills</label>
                    <Input {...register('misc_bills')} name="misc_bills" placeholder="Miscellaneous Bills"/>
                </div>
                <div>
                    <label htmlFor="phone">Phone</label>
                    <Input {...register('phone')} name="phone" placeholder="Phone"/>
                </div>
                <div>
                    <label htmlFor="savings">Savings</label>
                    <Input {...register('savings')} name="savings" placeholder="Savings"/>
                </div>
                <div>
                    <label htmlFor="subscriptions">Subscriptions</label>
                    <Input {...register('subscriptions')} name="subscriptions" placeholder="Subscriptions"/>
                </div>
                <div>
                    <label htmlFor="transportation">Transportation</label>
                    <Input {...register('transportation')} name="transportation" placeholder="Transportation"/>
                </div>
                <div>
                    <label htmlFor="utilities">Utilities</label>
                    <Input {...register('utilities')} name="utilities" placeholder="Utilities"/>
                </div>
                <div>
                    <label htmlFor="other">Other</label>
                    <Input {...register('other')} name="other" placeholder="Other"/>
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}