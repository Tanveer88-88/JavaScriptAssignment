function carFunction(manufacturer,model,...args)
{
    car={
        "manufacturer":manufacturer,
        "model":model,
        "others":args,
    };
    return car;
}
items=carFunction("Toyota","Gli",color="White",transmission="Automatic");
for (const key in items) {
    if (items.hasOwnProperty(key)) {
      console.log(`${key}: ${items[key]}`);
    }
  }
  console.log("\n");
  items=carFunction("Honda","Civic",color="Black",transmission="Manaul");
for (const key in items) {
    if (items.hasOwnProperty(key)) {
      console.log(`${key}: ${items[key]}`);
    }
  }