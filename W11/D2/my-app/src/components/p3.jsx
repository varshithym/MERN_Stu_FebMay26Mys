import {useParams} from "react-router-dom";

export function MultipleDynamicParams(){
    const{userId,orderId} = useParams();
    return(
        <div>
            <h2>multiple Dynamic params</h2>
            <p>user ID from URL : {userId}</p>
            <p>orderId from URL : {orderId}</p>
        </div>
    )
}