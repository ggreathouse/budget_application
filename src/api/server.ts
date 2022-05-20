let token = '3db0dffd203e84462178c56b427c89c2d7b2bb08ae2e6824'
// Retrieve token of logged in user
// let token = async () =>{
//     const response = await fetch(`/signin`,{
//         method: 'GET',
//         headers:{
//             'Content-Type': 'application/json',
//         }
//     })
//     console.log(response)
//}

export const serverCalls = {
    // token: async () =>{
    //     const response = await fetch(`/signin`,{
    //         method: 'GET',
    //         headers:{
    //             'Content-Type': 'application/json',
    //         }
    //     })
    //     console.log(response)
    //},

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