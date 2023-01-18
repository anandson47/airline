import axios from "axios";
import { toast } from "react-toastify";

const searchService = async (searchDetails) =>{
    let data=await axios.post("http://localhost:8090/api/getFlightdetails",searchDetails).then(
        res=>res.data
    ).catch(error=>{
        return []
    })
    return data
}
export default searchService;