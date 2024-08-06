import { Frame } from "components/index";
import { NavLink, useLocation } from "react-router-dom";

export default function GitPage() {

    const location = useLocation();
    console.log(location.pathname)

    return (
        <>
            <Frame />
            <h1>THIS IS GIT</h1>
            <NavLink to={"/home"}>
                BACK
            </NavLink>
        </>
    )
}
