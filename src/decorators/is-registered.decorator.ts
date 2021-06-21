import fetch from "node-fetch";

export function Registered(): any {
  return function (target: Object, key: string) {
    async function getVehicleRegistrationDetails() {
      return await (await fetch("https://jsonkeeper.com/b/8G6M")).json();
    }
    
    let value: boolean;
    const getter = function () {
      return value;
    };
    const setter = function (newValue) {
      value = newValue;
    };

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
    });
  };
}
