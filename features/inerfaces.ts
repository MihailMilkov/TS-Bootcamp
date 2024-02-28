interface Reportable {
    summary(): string;
}

const oldCivic = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary(): string {
        return `Name: ${this.name}`;
    }
}

const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `My drink has ${this.sugar} grams of sugar`;
    }
}

const printVihicle_old = (vihicle: { name: string; year: Date; broken: boolean }): void => {
    console.log(`Name: ${vihicle.name}`);
    console.log(`Year: ${vihicle.year}`);
    console.log(`Broken: ${vihicle.broken}`);
}

const printVihicle_alt = (vihicle: { summary(): string }): void => {
    console.log(`Name: ${vihicle.summary()}`);
}


const printVihicle_new = (vihicle: Reportable): void => {
    console.log(`Name: ${vihicle.summary()}`);
}

const printSummary = (item: Reportable): void => {
    console.log(`Name: ${item.summary()}`);
}

printVihicle_old(oldCivic);
printVihicle_alt(oldCivic);
printVihicle_new(oldCivic);
printSummary(oldCivic);
printVihicle_new(drink);