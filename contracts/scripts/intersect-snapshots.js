const fs = require("fs").promises;

async function view() {
  let sepHolders = JSON.parse(await fs.readFile("./scripts/snapshot/september.json"));
  let latestHolders = JSON.parse(await fs.readFile("./scripts/snapshot/latest-holders.json"));
  
  let matching = Object.keys(sepHolders).filter((holder) => Object.keys(latestHolders).some((address) => address == holder))
  console.log(matching.length)
  await fs.writeFile("./scripts/results/year-holders.json", JSON.stringify(matching))
}

// main()
//   .then(() => process.exit(0))
//   .catch((error) => {
//     console.error(error);
//     process.exit(1);
//   });

view()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
