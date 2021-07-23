const randomAmount = (min, max) =>
  (Math.random() * (max - min) + 1 + min).toFixed(2);

const data = [
  {
    id: 1,
    name: 'John',
    month: 'June',
    transactions: [
      {
        date: '06-22-21',
        amount: randomAmount(5, 300),
      },
      {
        date: '06-18-21',
        amount: randomAmount(5, 300),
      },
      {
        date: '06-09-21',
        amount: randomAmount(5, 300),
      },
    ],
  },
  {
    id: 1,
    name: 'John',
    month: 'May',
    transactions: [
      {
        date: '05-22-21',
        amount: randomAmount(5, 300),
      },
      {
        date: '05-15-21',
        amount: randomAmount(5, 300),
      },
      {
        date: '05-08-21',
        amount: randomAmount(5, 300),
      },
    ],
  },
  {
    id: 1,
    name: 'John',
    month: 'April',
    transactions: [
      {
        date: '04-28-21',
        amount: randomAmount(5, 300),
      },
      {
        date: '04-14-21',
        amount: randomAmount(5, 300),
      },
      {
        date: '04-10-21',
        amount: randomAmount(5, 300),
      },
    ],
  },
  {
    id: 2,
    name: 'Sarah',
    month: 'June',
    transactions: [
      {
        date: '06-22-21',
        amount: randomAmount(5, 300),
      },
      {
        date: '06-18-21',
        amount: randomAmount(5, 300),
      },
      {
        date: '06-09-21',
        amount: randomAmount(5, 300),
      },
    ],
  },
  {
    id: 2,
    name: 'Sarah',
    month: 'May',
    transactions: [
      {
        date: '05-22-21',
        amount: randomAmount(5, 300),
      },
      {
        date: '05-15-21',
        amount: randomAmount(5, 300),
      },
      {
        date: '05-08-21',
        amount: randomAmount(5, 300),
      },
    ],
  },
  {
    id: 2,
    name: 'Sarah',
    month: 'April',
    transactions: [
      {
        date: '04-28-21',
        amount: randomAmount(5, 300),
      },
      {
        date: '04-14-21',
        amount: randomAmount(5, 300),
      },
      {
        date: '04-10-21',
        amount: randomAmount(5, 300),
      },
    ],
  },
  {
    id: 3,
    name: 'Lee',
    month: 'June',
    transactions: [
      {
        date: '06-22-21',
        amount: randomAmount(5, 300),
      },
      {
        date: '06-18-21',
        amount: randomAmount(5, 300),
      },
      {
        date: '06-09-21',
        amount: randomAmount(5, 300),
      },
    ],
  },
  {
    id: 3,
    name: 'Lee',
    month: 'May',
    transactions: [
      {
        date: '05-22-21',
        amount: randomAmount(5, 300),
      },
      {
        date: '05-15-21',
        amount: randomAmount(5, 300),
      },
      {
        date: '05-08-21',
        amount: randomAmount(5, 300),
      },
    ],
  },
  {
    id: 3,
    name: 'Lee',
    month: 'April',
    transactions: [
      {
        date: '04-28-21',
        amount: randomAmount(5, 300),
      },
      {
        date: '04-14-21',
        amount: randomAmount(5, 300),
      },
      {
        date: '04-10-21',
        amount: randomAmount(5, 300),
      },
    ],
  },
];

export default data;
