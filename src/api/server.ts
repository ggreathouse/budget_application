import {getToken} from '../api/token'

let token = getToken.get()
console.log(token)

export const serverCalls ={
    
    get: async () => {
        const response = await fetch(`/api/budget`,{
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
                'x-access-token' : `Bearer ${token}`
            }
        });
        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }
        return await response.json()
    },

    create: async(data: any={})=>{
        const response = await fetch(`/api/budget`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        if (!response.ok){
            throw new Error(`Failed to fetch data from server`)
        }
        return await response.json()
    },

    update: async (id:string, data:any = {}) =>{
        const response = await fetch(`/api/budget/${id}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }
    },

    delete: async (id:string) =>{
        const response = await fetch(`/api/budget/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });
    }
}