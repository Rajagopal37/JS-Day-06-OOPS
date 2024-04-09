//----------Calculate to Uber Price -------

class UberPrice {
    constructor(perKM, perMin, basefare, waiting){
        this.perKM = perKM;
        this.perMin = perMin;
        this.basefare = basefare;
        this.waiting=waiting;
    }
    priceCalculate (distance,time,waiting) {
        const fare  = (distance*this.perKM) + (this.perMin*time/60) + this.basefare + (this.waiting * waiting/ 60) ;
        return fare;
    }

}



const calculate = new UberPrice (10, 20, 15, 5);
const distance = 7;
const time = 15;
const waiting = 2;

const totalUberPrice = calculate.priceCalculate(distance,time,waiting);
console.log("fare ", totalUberPrice);

