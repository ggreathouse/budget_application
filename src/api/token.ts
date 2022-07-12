// get token of a logged user

export const getToken ={
    
    get: async () => {
        const response = await fetch(`/token`,{
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
            }
        });
        
        if (!response.ok){
            throw new Error('No authenticated user')
        }
        return response.json()
    }
}