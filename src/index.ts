import { Registered } from "./decorators/is-registered.decorator";

class Vehicle {
    brand: string;
    color: string;

    @Registered()
    isRegistered: boolean;

    constructor(brand: string, color: string, isRegistered: boolean) {
        this.brand = brand;
        this.color = color;
        this.isRegistered = isRegistered;
    }

    showDetails(): void {
        console.log(`The car is of ${this.brand} and ${this.color}.`)
    }
}

const myVehicle = new Vehicle('McLaren', 'orange', false);
console.log(myVehicle.isRegistered);