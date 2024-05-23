// what are class in js
// firs way to create the object is called object literal
// const obj1 = {      
//     abc: 123,
//     logABC: function(){
//         console.log(this.abc)
//     }
// }
// obj1.logABC()    // i can call the like this

// const obj2 = {      
//     abc: 223,
//     logABC: function(){
//         console.log(this.abc)
//     }
// }
// obj2.logABC()     // i can call the like this


// the other way to create the object is constructor function
//if i have create many class 

// red

//  suppose that i have to create the 25 car object with same pattern for that we can 
//  use the constructor function : it is input function : the first name of the construction fucntion should be capital


// function Car(name,vehicleNo){
// this.name = name;
// this.vehicleNo = vehicleNo;
// this.logName = function(){
//     console.log(this.name)
// }
// }

// const wagnar = new Car("wagnar", 34567)
// const fronx = new Car("fronx", 34739)

// wagnar.logName()
// fronx.logName()


// class : this the one more way to or lates way to write the object
// class is the almost copy pest constructor function.

// class Car {
//     constructor(name, vehicleNo){
//         this.name = name,
//         this.vehicleNo = vehicleNo
//     }
//     logName(){
//         console.log(this.name)
//     }
// }
// const wagnar = new Car("wagnar", 34567)
// const fronx = new Car("fronx", 34739)

// wagnar.logName()
// fronx.logName()

//inheritance 
// class Car {
//     constructor(name, vehicleNo){
//         this.name = name,
//         this.vehicleNo = vehicleNo
//     }
//     logName(){
//         console.log(this.name)
//     }
//     logNo(){
//         console.log(this.vehicleNo);
//     }
// }

// class SUV extends Car{
//     constructor(name, vehicleNo, brand){
//         super(name,vehicleNo)
//         this.brand = brand
//     }
//     logBrand(){
//         console.log(this.brand + this.vehicleNo);
//     }

// }

// const safari = new SUV("safari", 2235, "TATA")
// safari.logName()
// safari.logBrand()
// safari.logNo()