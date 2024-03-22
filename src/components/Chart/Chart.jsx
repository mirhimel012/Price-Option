import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const Chart = () => {

    const gymMemberData = [
        { id: 1, name: 'Alice', age: 25, membership_duration: 10, membership_type: 78 },
        { id: 2, name: 'Bob', age: 18, membership_duration: 25, membership_type: 80 },
        { id: 3, name: 'Charlie', age: 32, membership_duration: 28, membership_type: 95 },
        { id: 4, name: 'David', age: 28, membership_duration: 14, membership_type: 90 },
        { id: 5, name: 'Emma', age: 20, membership_duration: 15, membership_type: 68 },
        { id: 6, name: 'Frank', age: 35, membership_duration: 21, membership_type: 97 },
        { id: 7, name: 'Grace', age: 32, membership_duration: 28, membership_type: 85 },
        { id: 8, name: 'Hannah', age: 39, membership_duration: 33, membership_type: 77 },
        { id: 9, name: 'Ian', age: 17, membership_duration: 49, membership_type: 84 },
        { id: 10, name: 'Jack', age: 40, membership_duration: 28, membership_type: 92 }
    ];
    

    return (
        <div className='bg-slate-50 flex-col m-auto p-6 text-center w-fit mb-8'>
            <h2 className='text-xl md:text-3xl mb-6 font-medium'>Members Age, Membership Duration and ID Chart</h2>
            <LineChart className='m-auto' width={800} height={400} data={gymMemberData}>
                <XAxis dataKey="name" />
                <YAxis></YAxis>
                <Tooltip />
                <Legend />
                <Line dataKey="age" stroke='red'></Line>
                <Line dataKey={'membership_duration'} stroke='blue'></Line>
                <Line dataKey="id" stroke='green'></Line>
            </LineChart>
        </div>
    );
};

export default Chart;