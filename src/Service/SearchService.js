import axios from "axios";
import { toast } from "react-toastify";

// const sitelink="http://ec2-3-110-171-177.ap-south-1.compute.amazonaws.com:8095"
const sitelink="http://localhost:8090"
const searchService = async (searchDetails) =>{
    let data=await axios.post(`${sitelink}/api/getFlightdetails`,searchDetails).then(
        res=>res.data
    ).catch(error=>{
        return []
    })
    return data
}
export default searchService;