import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
const data = [
    {
        name: '2020', 
        demand : 4000
    }, 
    {
        name : '2021', 
        demand : 2000
    },
    {
        name : '2022', 
        demand : 3500
    },

    {
        name : '2023', 
        demand : 2500
    },

];

const renderBarChart = () => (

    <BarChart width={700} height={500} data={data} margin={{top : 50, bottom: 50, left : 50, right : 50}}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey="demand" fill="#8884d8" />
  </BarChart>
);

export default renderBarChart;