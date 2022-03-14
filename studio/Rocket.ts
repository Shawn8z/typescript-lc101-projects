import { Astronaut } from "./Astronaut";
import { Cargo } from "./Cargo";
import { Payload } from "./Payload";

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItem: Cargo[];
    astronauts: Astronaut[];

    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    };

    sumMass( items: Payload[] ): number {
        let totalSum: number;
        for (let obj of items) {
            totalSum += obj.massKg;
        };
        return totalSum;
    };

    currentMassKg(): number {
        return this.sumMass( this.astronauts ) + this.sumMass( this.cargoItem );
    };

    canAdd( item: Payload ): boolean {
        if ( this.currentMassKg() + item.massKg <= this.totalCapacityKg ) {
            return true;
        } else {
            return false;
        }
    };

    addCargo( cargo: Cargo ): boolean {
        if ( this.canAdd(cargo) ) {
            this.cargoItem.push(cargo);
            return true;
        } else {
            return false;
        };
    }

    addAstronaut( astronaut: Astronaut ): boolean {
        if ( this.canAdd(astronaut) ) {
            this.astronauts.push(astronaut);
            return true;
        } else {
            return false;
        }
    }
}