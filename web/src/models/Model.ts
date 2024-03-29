import { AxiosPromise } from "axios";
import { AxiosResponse } from "axios";

interface ModelAttributes<T> {
    set(value: T): void;
    getAll(): T;
    get<K extends keyof T>(key: K): T[K];
}

interface Sync<T> {
    fetch(id: number): AxiosPromise;
    save(data: T): AxiosPromise;
}

interface Events {
    on(eventName: string, callback: () => void): void;
    trigger(eventName: string): void;
}

export interface HasId {
    id?: number;
}

export class Model<T extends HasId> {
    constructor(
        private attributes: ModelAttributes<T>,
        private events: Events,
        private sync: Sync<T>
    ) { }

    //Passthrough methods
    get on() {
        return this.events.on//Either this .bind(this.events) or On should be an arrow function;
    }
    get trigger() {
        return this.events.trigger//.bind(this.events);
    }
    get get() {
        return this.attributes.get//.bind(this.attributes);
    }
    set(update: T): void {
        this.attributes.set(update);
        this.events.trigger('change');
    }
    fetch(): void {
        const id = this.get('id');
        if (!id) {
            throw new Error('Cannot fetch without ID');
        }
        this.sync.fetch(id).then((response: AxiosResponse): void => {
            this.set(response.data);
        });
    }
    save(): void {
        this.sync.save(this.attributes.getAll())
            .then((): void => {
                this.trigger('save')
            })
            .catch((): void => {
                this.trigger('Error')
            });
    }
}