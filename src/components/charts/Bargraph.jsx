import { Bar} from "react-chartjs-2";
import {Chart as Chartjs, BarElement, LinearScale, Title, Tooltip, CategoryScale, Legend} from "chart.js";
import { DUMMY_DATA } from "./DUMMY_DATA";

Chartjs.register(
    BarElement,
    LinearScale,
    Title,
    Tooltip,
    CategoryScale,
    Legend
);

export const BarGraph = function () {
    
    const options = {
        responsive: true
    };
    
    return (
        <><Bar options={options} data={DUMMY_DATA}/></>
    )
}