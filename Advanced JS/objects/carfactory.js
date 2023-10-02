function carFactory(object) {
  let volume = 0;
  let power = 0;
  if (object.power <= 90) {
    volume = 1800;
    power = 90;
  } else if (object.power <= 120) {
    volume = 2400;
    power = 120;
  } else {
    volume = 3500;
    power = 200;
  }
  let wheels =
    object.wheelsize % 2 === 0 ? object.wheelsize - 1 : object.wheelsize;
  let myWheels = [wheels, wheels, wheels, wheels];
  const myObject = {
    model: object.model,
    engine: {
      power: power,
      volume: volume,
    },
    carriage: {
      type: object.carriage,
      color: object.color,
    },
    wheels: myWheels,
  };
  console.log(myObject);
  return myObject;
}
carFactory({
  model: "Opel Vectra",
  power: 60,
  color: "grey",
  carriage: "coupe",
  wheelsize: 17,
});
