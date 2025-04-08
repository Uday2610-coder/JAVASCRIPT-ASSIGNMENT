// question 1

const worldPopulation = 7900;
const chinaPopulation = 1441;
const indiaPopulation = 1484;
const usaPopulation = 340;

// function declaration
function percentageOfWorld1(population){
  return (population/worldPopulation) * 100;
}

const china = percentageOfWorld1(chinaPopulation);
const india = percentageOfWorld1(indiaPopulation);
const usa = percentageOfWorld1(usaPopulation);

const chinaResult = `China has ${chinaPopulation} milion people, so it's about ${china}% of the world population` ;

const indiaResult = `India has ${indiaPopulation} million people, so it's about ${india}% of the world population.`;

const usaResult = `USA has ${usaPopulation} million people, so it's about ${usa}% of the world population.`;

console.log(chinaResult);
console.log(indiaResult);
console.log(usaResult);


// function expression
const percentageOfWorld2 = function(population){
  return (population/worldPopulation) * 100;
}

const china1 = percentageOfWorld2(chinaPopulation);
const india1 = percentageOfWorld2(indiaPopulation);
const usa1 = percentageOfWorld2(usaPopulation);


console.log("China: ", china1);
console.log("India: ",india1);
console.log("USA: ",usa1);


// question 2

function describePopulation(country,population){
  const percentage =percentageOfWorld1(population)
  return `${country} has ${population} milion people, which is about ${percentage} of the world.`
}

const chinaperc = describePopulation("China",chinaPopulation);
const indiaperc = describePopulation("India", indiaPopulation);
const usaperc = describePopulation("USA", usaPopulation);

console.log(chinaperc);
console.log(indiaperc);
console.log(usaperc);


