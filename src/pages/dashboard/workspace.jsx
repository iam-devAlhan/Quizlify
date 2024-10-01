import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Workspace() {
    
    const Button = styled.button`
        display: flex;
        align-items: center;
        height: fit-content;
        width: fit-content;
        padding: 3%;
        border: none;
        border-radius: 10px;
        font-size: 15px;
        background-color: rgb(0, 99, 255);
        color: white;
        margin: 10px;
        transition: 0.2s ease-out;

        &:hover {
            opacity: calc(0.7);
            cursor: pointer;
        }
    `
    return (
        <>
            <div>
                    <h1>Your Workspace</h1>
                        <Button>Create Room</Button>
                    <Link style={{textDecoration: "none"}}to="/createTest">
                        <Button>Create Test</Button>
                    </Link>
                    
            </div>
        
        </>
    )
}