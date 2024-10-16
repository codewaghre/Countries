import { NavLink, useRouteError } from "react-router-dom"



function ErrorPage() {
    
    const routerError = useRouteError()
    console.log(routerError);

    return (
        <>
            <div style={{
                margin: "18rem",
            }}
        >
                <h1> Opps! Errro Occurred</h1>
                <br></br>
                <p>{routerError && routerError.data}</p>
                <NavLink to='/'>
                    <button>Go Home</button>
                </NavLink>

            </div>
        </>
    )
}

export default ErrorPage
