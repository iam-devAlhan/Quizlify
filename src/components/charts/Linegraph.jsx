import {Line} from "react-chartjs-2";
import {Chart as Chartjs, LineElement, LinearScale, Title, Tooltip, CategoryScale, PointElement, Legend} from "chart.js";
import { DUMMY_DATA } from "./DUMMY_DATA";

Chartjs.register(
    LineElement,
    LinearScale,
    Title,
    Tooltip,
    CategoryScale,
    PointElement,
    Legend
);

export const LineGraph = function () {
    
    const options = {
        responsive: true
    };
    
    return (
        <><Line options={options} data={DUMMY_DATA}/></>
    )
}