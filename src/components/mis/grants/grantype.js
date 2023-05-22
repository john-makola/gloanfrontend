const GrantType = [
  {
    id: "0001",
    type: "Women Empowerment",
  },
  {
    id: "0002",
    type: "Youth/Women Empowerment",
  },
  {
    id: "0003",
    type: "Business Financing",
  },
];

export function getGrantType() {
  return GrantType;
}

const Currency = [
  {
    id: "0001",
    name: "KSHS",
    Country: "Kenya",
  },
  {
    id: "0002",
    name: "TSHS",
    Country: "Tanzania",
  },
  {
    id: "0002",
    name: "USHS",
    Country: "Uganda",
  },
  {
    id: "0003",
    name: "$ USD",
    Country: "United State of America",
  },
  {
    id: "0004",
    name: "Pound",
    Country: "United Kingdom",
  },
];

export function getCurrency() {
  return Currency;
}

const Donor = [
  {
    id: "0001",
    name: "UNDP",
  },
  {
    id: "0002",
    name: "USAID",
  },
  {
    id: "0003",
    name: "World Bank",
  },
  {
    id: "0004",
    name: "GOK",
  },
];

export function getDonor() {
  return Donor;
}
