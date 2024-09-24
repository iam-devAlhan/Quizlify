// This is a current home page that will be displayed after login and signin
import { BarGraph } from "../../components/charts/Bargraph";
import { LineGraph } from "../../components/charts/Linegraph";
import styled from "styled-components";

const Box = styled.div`
    padding: 2%;
    border-radius: 10px;
    margin-top: 20px;
    align-items: center;
    justify-content: center;
    width: 450px;
    height: 300px;
    background-color: #121212;

`
const Container = styled.div`
    display: flex;
    padding: 2%;
    gap: 10px;
    flex-direction: column;
    align-items: left;
    justify-content: left;
`
export default function Activity() {
    return (
        <>
            <h2>User activity</h2>
            <Container>
                <Box>
                    <LineGraph />
                </Box>
                <Box>
                    <BarGraph />
                </Box>
            </Container>
            
            
            
        </>
    )
}