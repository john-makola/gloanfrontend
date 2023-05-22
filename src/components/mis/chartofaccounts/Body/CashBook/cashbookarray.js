const CashBookDR = [
  {
    id: "0001",
    date: "01/01/2022",
    particulars: "Capital A/C",
    cash: 100000,
    bank: 100000,
  },
  {
    id: "0002",
    date: "9/01/2022",
    particulars: "UNDP Funding",
    cash: 15000,
    bank: 0,
  },
  {
    id: "0004",
    date: "15/01/2022",
    particulars: "GOK Fund",
    cash: 0,
    bank: 11000,
  },
  {
    id: "005",
    date: "21/01/2022",
    particulars: "GOK Fund",
    cash: 15000,
    bank: 0,
  },
 
];

const CashBookCR = [
  {
    id: "0001",
    date: "02/01/2022",
    particulars: "Advertisement A/c",
    cash: 0,
    bank: 500,
  },
  {
    id: "0002",
    date: "04/01/2022",
    particulars: "Purchase A/c",
    cash: 10000,
    bank: 0,
  },
  {
    id: "0003",
    date: "04/01/2022",
    particulars: "Stationery A/c",
    cash: 550,
    bank: 0,
  },
  {
    id: "0004",
    date: "10/01/2022",
    particulars: "Office Expense A/c",
    cash: 200,
    bank: 0,
  },
  {
    id: "0005",
    date: "18/01/2022",
    particulars: "Purchase A/c",
    cash: 0,
    bank: 10000,
  },
  {
    id: "0006",
    date: "21/01/2022",
    particulars: "Cash A/c",
    cash: 0,
    bank: 15000,
  },
  {
    id: "0007",
    date: "30/01/2022",
    particulars: "Rent A/c",
    cash: 0,
    bank: 7500,
  },
  {
    id: "0008",
    date: "30/01/2022",
    particulars: "Salary A/c",
    cash: 17000,
    bank: 0,
  },
  {
    id: "0009",
    date: "30/01/2022",
    particulars: "Balance C/D A/c",
    cash: 102250,
    bank: 78000,
  },

];

export function getCashBookDr() {
  return CashBookDR;
}

export function getCashBookCr() {
  return CashBookCR;
}
