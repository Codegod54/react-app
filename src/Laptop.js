import React from "react";
class Laptop{
    constructor(brand, name, origin, distributor){
        this.Brand = brand;
        this.Name = name;
        this.Origin = origin;
        this.Distributor = distributor;

}

present() {
    return 'I have a ' + this.Brand;

}}

const mylaptop = new Laptop("ASUS")
mylaptop.present();

export default Laptop;

