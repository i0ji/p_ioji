import { Frame } from "components/index";
import { NavLink } from "react-router-dom";

export default function GitPage() {
    return (
        <Frame>
                <h1>THIS IS GIT</h1>
                <NavLink to={"/home"}>
                    BACK
                </NavLink>
    
        </Frame>
    )
}
