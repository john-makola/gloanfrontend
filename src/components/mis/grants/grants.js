const Grants = [
  {
    _id: {
      $oid: "63418486d0e121671e4d5678",
    },
    username: "johnmakola",
    grantno: "gl001",
    grantname: "Uwezo Fund",
    granttype: "Women and Youth Empowerment",
    grantdescription: "Supporting Youth, Women, in uplifting Businesses",
    donor: "UNDP",
    currency: "KSHS",
    grantsamount: 10000000,
  },
  {
    _id: {
      $oid: "63418486d0e121671e4d8967",
    },
    username: "johnmakola",
    grantno: "gl002",
    grantname: "Hustler Fund",
    granttype: "All Kenyans",
    grantdescription: "Supporting Hustlers, Small Businesses",
    donor: "GOK",
    currency: "KSHS",
    grantsamount: 1070000000,
  },
];

export function getGrants() {
  return Grants;
}

const AllocatedGrants = [
  {
    _id: {
      $oid: "678888786d0e121671e4d5678",
    },
    username: "johnmakola",
    grantallocationno: "gl001",
    groupname: "Jirani Mwema",
    purpose: "Business Support",
    grantsamount: 300000,
  },
  {
    _id: {
      $oid: "67856757786d0e121671e4d5678",
    },
    username: "johnmakola",
    grantallocationno: "gl002",
    groupname: "Jenga Mama Group",
    purpose: "Small Enterprises Support",
    grantsamount:500000,
  },
];

export function getAllocatedGrants() {
  return AllocatedGrants;
}
