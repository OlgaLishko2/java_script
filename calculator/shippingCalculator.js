import { add, multiply } from "./calculator.js";
import { rate, zones } from "./config.js";

function calculateShipping(weight, zone) {
  let multiplier;
  if (zone === "local") {
    multiplier = zones.local;
  } else if (zone === "remote") {
    multiplier = zones.remote;
  } else {
    console.log("Incorrect zone!");
    return;
  }
  const weightCost = multiply(rate.perDistance, weight);
  const zoneCost = multiply(weightCost, multiplier);
  const totalCost = add(rate.standard, zoneCost);

  return totalCost;
}

console.log("Local 5kg:", calculateShipping(5, "local")); // 34
console.log("Remote 5kg:", calculateShipping(5, "remote")); // 44
console.log("Неверная зона:", calculateShipping(5, "wrong")); // Incorrect zone!
