import AxiosInstance from "./AxiosInstance"

const GenderServices = {
    storeGender: async(data:any)=>{
        try{
            const response = await AxiosInstance.post("/gender/storeGender", data);
            return response;
        }catch(error){
            throw error;
        }
    },
};

export default GenderServices;