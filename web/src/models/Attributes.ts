export class Attributes<T extends object> {
    constructor(private data: T) { }
    //Very cool way to declare a generic type,
    //being restricted to the keys of another generic type
    //and returning a value of type based on the selected key
    get = <K extends keyof T>(key: K): T[K] => {
        return this.data[key];
    }
    getAll = (): T => {
        return this.data;
    }
    set = (update: T): void => {
        Object.assign(this.data, update);
    }
}