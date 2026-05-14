import { useState,useEffect } from "react";

//managing API state with useEffect
export  function ManagingApiState() {
    //use state: stores the list of users returned from API
    const [users, setUsers] = useState([]);
    //true while data is being fetched
    const [loading, setLoading] = useState(false);
    //To store error message
    const [error, setError] = useState("");
    //The following function accepts "signal" so the request can be cancelled by abortController during cleanup
    async function loadUsers() {
        setLoading(true);
        setError("");
        try {
            const reponse = await fetch(
                "https://jsonplaceholder.typicode.com/users",
                { signal }
            );
            if (!response.ok) {
                throw new Error(`Failed with status ${response.status}`);
            }

            const data = await response.json();
            setUsers(data);
        }
        catch(error){
            if(error.name === "AbortError") {
                return;
            }
            console.error(error);
            setError(error.message || "Failed to fetch users");
        }
        finally{
            setLoading(false);
        }
    }
    //What happens in useEffect()
       //1. Create an AbortController
       //2. Start the API request
       //3. Return a cleanUp function that aborts the request if the component unmounts
    useEffect(()=>{
        const controller = new AbortController();
        loadUsers(controller.signal);
        return () => {
            controller.abort();
        };
    },[]);

    //Reload function 
    function handleReload(){
        const controller = new AbortController();
        loadUsers(controller.signal);
    }
    return(
        <section>
            <h2>MAnaging API State</h2>
            <button onClick={handleReload} disabled={loading}>{loading ? "loading...":"Reload Users"}
            </button>
            {/* Loading UI */}
            {loading && <p>Loading Users...</p>}

            {/* Error UI */}
            {!loading && error && <p> Error: {error}</p>}

            {/* Empty state UI */}
            {!loading && !error && users.length === 0 && <p>No users found.</p>}

            {/* success UI */}
            {!loading && !error && users.length > 0 && users.map((user)=>(
                <article key={user.id}>
                    <h4>{user.name}</h4>
                    <p>Email:{user.email}</p>
                    <p>Company:{user.company?.name}</p>
                    <p>City:{user.address?.city}</p>
                    </article>
            ))
            }
        </section>
    )
};