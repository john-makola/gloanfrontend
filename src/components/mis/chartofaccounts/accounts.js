const CashBankAcs = [
  {
    id: "00015002",
    account: "Cash",
  },
  {
    id: "00015021",
    account: "Bank",
  },
];

const TrasnsactionType = [
  {
    id: "45454542",
    transationType: "Debit",
  },
  {
    id: "478942",
    transationType: "Credit",
  },
];

export function getCashBankAC() {
  return CashBankAcs;
}

export function getTransactionType() {
  return TrasnsactionType;
}
