//Nested routes
// a route inside nested route
//Dashboard /profile/settings/reports
import {Link,Outlet} from 'react-router-dom'

export function NestedRoutes(){
    return(
        <div>
            <h2>Nested Routes</h2>
            <nav>
                <Link to="/dashboard"> Home </Link> | {' '}
                 <Link to="/dashboard/profile"> Profile </Link> | {' '}
                  <Link to="/dashboard/settings"> Settings </Link> | {' '}

                  <hr />
                  {/* <outlet/> is the place where matched child routes will render */}
                  {/* without <outlet/> child roots will not appear inside parent layout */}
                  <Outlet/>
            </nav>
        </div>
    )
}