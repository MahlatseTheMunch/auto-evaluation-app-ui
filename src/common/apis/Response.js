import axios from "axios";

// https://s2pconsulting-coupalink-new-demo.coupacloud.com/api/quote_requests/629/quote_responses

export default axios.create({
    baseURL: "https://s2pconsulting-coupalink-new-demo.coupacloud.com/api/quote_requests/629/quote_responses"
})