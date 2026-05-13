//Dynamic Params with useParams hook
//Dynamic Params are values that are taken from URL. useParams hook helps us read those values inside the component.
import {useParams} from "react-router-dom"
export function DynamicParamsUseParams(){
    const {id} = useParams();
    return(
        <div>
            <h2>Dynamic params with  userParams</h2>
            <p>product id from:{id}</p>
        </div>
    )
}