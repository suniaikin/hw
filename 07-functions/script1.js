let gold = 100

let buildingName = 'Tower'
let costGold = 30

if (gold >= costGold) {
    gold -= costGold
    console.log(`${buildingName}: work complete!`);
} else {
    console.log(`${buildingName}: not enough resources!`);
}
