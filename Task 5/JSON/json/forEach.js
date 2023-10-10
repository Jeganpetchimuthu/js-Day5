const x = {
  name: "Jegan",
  age: 27,
  qualification: "BE",
  state: "Tamilnadu",
};
Object.keys(x).forEach((key) => {
  console.log(`${key}: ${x[key]}`);
});
