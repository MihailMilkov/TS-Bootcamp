import { Sorter } from './Sorter';
import { NumberCollection } from './NumberCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';


const numbersCollection = new NumberCollection([10, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);

// const charactersCollection = new CharactersCollection('Xaayb');
// const sorter2 = new Sorter(charactersCollection);
// sorter2.sort();
// console.log(charactersCollection.data);

// const linkedList = new LinkedList();
// linkedList.add(500);
// linkedList.add(-10);
// linkedList.add(-3);
// linkedList.add(4);
// const sorter3 = new Sorter(linkedList);
// sorter3.sort();
// console.log(linkedList.print());