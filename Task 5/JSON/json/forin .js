const obj = {
  name: "Jegan",
  age: 27,
  qualification: "BE",
  state: "Tamilnadu",
};
for (const key in obj) {
  console.log(`${key}: ${obj[key]}`);
}
