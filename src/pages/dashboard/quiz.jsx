import React from "react";
import styled from "styled-components";

const Box = styled.div`
    display: flex;
    align-items: left;
    justify-content: start;
    padding: 5%;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    background-color: #121212;

    & form {
        display: flex;
        flex-direction: column;
        align-items: left;
        justify-content: flex-start;
        padding: 5%;
        width: 80vw;
        height: 100vh;
        color: black;
        background-color: white;
        border-radius: 20px;
        margin-top: 2%;
    }
`

function QuizForm() {

    return (
        <>
            <Box>

                    <h1>This is a quiz Page</h1>
                    
                    <form>
                        <label>Question No: </label>

                        <label>Question Name</label>
                        
                        <label>Option <input type="radio" /></label>            
                    </form>
            </Box>
        </>
    )
}

export default QuizForm;
