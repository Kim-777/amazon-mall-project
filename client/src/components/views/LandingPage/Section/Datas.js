const continents = [
    {
        _id: 1,
        name: 'Africa'
    },
    {
        _id: 2,
        name: 'Europe'
    },
    {
        _id: 3,
        name: 'Asia'
    },
    {
        _id: 4,
        name: 'North America'
    },
    {
        _id: 5,
        name: 'South America'
    },
    {
        _id: 6,
        name: 'Australia'
    },
    {
        _id: 7,
        name: 'Antarctica'
    },
]

const price = [

    {
        _id: 0,
        name: 'Any',
        array: []
    },
    {
        _id: 1,
        name: '0 to 10000',
        array: [0, 10000]
    },
    {
        _id:2,
        name: '10001 to 20000',
        array: [10001, 20000]
    },
    {
        _id:3,
        name: '20001 to 30000',
        array: [20001, 30000]
    },
    {
        _id:4,
        name: '30001 to 40000',
        array: [30001, 40000]
    },
    {
        _id:5,
        name: 'More than 40001',
        array: [40001, 10000000000]
    },

]

export {
    continents, price
}