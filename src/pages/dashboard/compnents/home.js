import React from 'react'
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Sector } from 'recharts';
import DashBoard from '../../../components/DashBoard';

function Home() {

  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 13490,
      pv: 4300,
      amt: 2100,
    },
  ];
  const pieData = [
    { name: 'Group A', value: 700},
    { name: 'Group B', value: 300},
  ];
  const COLORS = ['#8884d8', '#00C49F', '#FFBB28', '#FF8042'];
  return (
    <div>
      <DashBoard/>
    <main className='w-full text-white mt-10'>
      <div className='flex  md:justify-around lg:justify-around justify-center items-center w-full lg:flex-row md:flex-row flex-col '>
        <div className='md:w-40 mt-3 w-11/12 lg:w-40 bg-blue-500 rounded py-2 ps-2 pr-2'>
          <div className='flex justify-between items-center'>
            <h3>PRODUCTS</h3>
            <BsFillArchiveFill className='text-xl' />
          </div>
          <h1>300</h1>
        </div>
        <div className='md:w-40 mt-3 w-11/12 lg:w-40 bg-orange-500 rounded py-2 ps-2 pr-2'>
          <div className='flex justify-between items-center'>
            <h3>CATEGORIES</h3>
            <BsFillGrid3X3GapFill className='text-xl' />
          </div>
          <h1>12</h1>
        </div>
        <div className='md:w-40 mt-3 w-11/12 lg:w-40 bg-green-500 rounded py-2 ps-2 pr-2'>
          <div className='flex justify-between items-center'>
            <h3>CUSTOMERS</h3>
            <BsPeopleFill className='text-xl' />
          </div>
          <h1>33</h1>
        </div>
        <div className='md:w-40 mt-3 w-11/12 items-center lg:w-40 bg-red-500 rounded py-2 ps-2 pr-2'>
          <div className='flex justify-between items-center'>
            <h3>ALERTS</h3>
            <BsFillBellFill className='text-xl' />
          </div>
          <h1>42</h1>
        </div>
      </div>
      <div className='flex mt-20 h-80 md:justify-around w-full lg:flex-row md:flex-row flex-col'>
        <ResponsiveContainer width="100%" height="100%" className="mt-10">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
        <ResponsiveContainer width="100%" height="100%" className="mt-10">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
        <ResponsiveContainer width="100%" height={400}>
          <PieChart
          width={900}
          height={500}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          >
            <Pie
              dataKey="value"
              isAnimationActive={false}
              data={pieData}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </main>
    </div>
  )
}

export default Home;