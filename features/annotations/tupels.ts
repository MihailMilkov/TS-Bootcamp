const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
};

type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', true, 40]; // order matters

const carSpecs: [number, number] = [400, 3354]; // order matters

// object
const carStats = {
    horsepower: 400,
    weight: 3354
};