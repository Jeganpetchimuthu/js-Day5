const data = {
  name: "Jegan",
  age: 27,
  qualification: "BE",
  state: "Tamilnadu",
};

const keys = Object.keys(data);
for (let i = 0; i < keys.length; i++) {
  const key = keys[i];
  console.log(`${key}: ${data[key]}`);
}
