// container /Wrapper Component
import {React} from 'react'

export default function Container({children}) {
  return (
    // children special case of props it takes valure anthing passes in component
    <div className='card'>
        {children}
    </div>
  );
}
// parent component
export function PropsChildren(){
    return(
        <>
            <Container>
                <h3>First child element in nested approch</h3>
            </Container>
        </>
    )
}
 