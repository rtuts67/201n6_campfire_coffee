'use strict';
//var childPikePlaceUl = document.createElement('ul');

//for (var i = 0; i < coffeeShopArray.length; i++) {
//  var liPikePlace = document.createElement('li');
//  liPikePlace.textContent = storeHours[i];
//  childPikePlace.appendChild(liPikePlace);
//}
//childPikePlace.textContent = 'Schedule of Output';
//var parentPikePlace = document.getElementById('parentPikePlace');
//parentPikePlace.appendChild(childPikePlaceUl);
//for (var i = 0; i < storeHours.length; i++) {
//  console.log(storeHours[i]);
//}

var pikePlace = {

  location: 'Pike Place Market',
  custMin: 14,
  custMax: 35,
  averageCupsPerCust: 1.2,
  averagePoundsPerCust: 0.34,
  storeHours: ['6:00am:','7:00am:', '8:00am:', '9:00am:', '10:00am:', '11:00am:','12:00pm:','1:00pm:','2:00pm:','3:00pm:','4:00pm:', '5:00pm:','6:00pm:', '7:00pm:', '8:00pm:'],
  custPerHour: [],
  custPerDay: 0,
  cupsPerHour: [],
  cupsPerDay:0,
  toGoPoundsPerHour: [],
  toGoPoundsPerDay: 0,
  beansNeededHourlyToMakeCup: [],
  beansPerDay:0,
  totalPoundNeededDaily:0,
  staffPerHour: [],
  stringValue: [],


  randomCustNumber: function() {
    return Math.floor(Math.random() * (this.custMax - this.custMin) + this.custMin);
  },

  generateCustNumber: function() {
    for (var i = 0; i < this.storeHours.length; i++) {
      this.custPerHour.push(this.randomCustNumber(this.custMin, this.custMax));
      this.custPerDay += this.custPerHour[i];
    }
  },

  generateCupsNumber: function() {
    for (var i = 0; i < this.storeHours.length; i++) {
      this.cupsPerHour.push(this.custPerHour[i] * this.averageCupsPerCust);
      this.cupsPerDay += this.cupsPerHour[i];
    }
  },

  generatePoundsNumber: function() {
    for (var i = 0; i < this.storeHours.length; i++) {
      this.toGoPoundsPerHour.push(this.custPerHour[i] * this.averagePoundsPerCust);
      this.toGoPoundsPerDay += this.toGoPoundsPerHour[i];
    }
  },

  generateBeanNumber: function() {
    for (var i = 0; i < this.storeHours.length; i++) {
      this.beansNeededHourlyToMakeCup.push((this.cupsPerHour[i] / 16));
      this.beansPerDay += this.beansNeededHourlyToMakeCup[i];
    }
  },

  calcTotalPoundNeededDaily: function() {
    this.totalPoundNeededDaily = (this.beansPerDay + this.toGoPoundsPerDay);
  },

  generateStaffNumber: function() {
    for (var i = 0; i < this.storeHours.length; i++) {
      this.staffPerHour.push(Math.ceil(this.custPerHour[i] / 30));
    }
  },
  printString: function () {
    for (var i = 0; i < this.storeHours.length; i++) {
      this.stringValue.push(this.storeHours[i] + ' ' + (this.beansNeededHourlyToMakeCup[i] + this.toGoPoundsPerHour[i]).toFixed(1) + 'lbs [' + this.custPerHour[i] + ' customers, ' + this.cupsPerHour[i].toFixed(1) + ' cups (' + this.beansNeededHourlyToMakeCup[i].toFixed(1) + ' lbs), ' + this.toGoPoundsPerHour[i].toFixed(1) + ' lbs to-go]');
    }
  },
  totalCustomers: function () {
    return 'Total customers at ' + this.location + ':' + this.custPerDay;
  },
  totalCups: function () {
    return 'Total cups sold at ' + this.location + ':' + this.cupsPerDay.toFixed(1);
  },

  totalToGoPounds: function() {
    return 'Total to-go pound packages sold at ' + this.location + ':' + this.toGoPoundsPerDay.toFixed(1);
  },
  totalPoundsOfBeansNeeded: function() {
    return 'Total pounds of beans needed at ' + this.location + ':' + (this.totalPoundsOfBeansNeeded + this.toGoPoundsPerDay.toFixed(1));
  },
};

pikePlace.randomCustNumber();
pikePlace.generateCustNumber();
pikePlace.generateCupsNumber();
pikePlace.generatePoundsNumber();
pikePlace.generateBeanNumber();
pikePlace.calcTotalPoundNeededDaily();
pikePlace.generateStaffNumber();
pikePlace.printString();
pikePlace.totalCustomers();
pikePlace.totalCups();
pikePlace.totalToGoPounds();
pikePlace.totalPoundsOfBeansNeeded();

var parentPikePlaceUl = document.getElementById('pikePlaceUl');
for (var i = 0; i < pikePlace.storeHours.length; i++) {
  var childPikePlaceli = document.createElement('li');
  childPikePlaceli.textContent = pikePlace.stringValue[i];
  parentPikePlaceUl.appendChild(childPikePlaceli);
}


var capitolHill = {

  location: 'Capitol Hill',
  custMin: 12,
  custMax: 28,
  averageCupsPerCust: 3.2,
  averagePoundsPerCust: 0.03,
  storeHours: ['6:00am:','7:00am:', '8:00am:', '9:00am:', '10:00am:', '11:00am:','12:00pm:','1:00pm:','2:00pm:','3:00pm:','4:00pm:', '5:00pm:','6:00pm:', '7:00pm:', '8:00pm:'],
  custPerHour: [],
  custPerDay: 0,
  cupsPerHour: [],
  cupsPerDay:0,
  toGoPoundsPerHour: [],
  toGoPoundsPerDay: 0,
  beansNeededHourlyToMakeCup: [],
  beansPerDay:0,
  totalPoundNeededDaily:0,
  staffPerHour: [],
  stringValue: [],


  randomCustNumber: function() {
    return Math.floor(Math.random() * (this.custMax - this.custMin) + this.custMin);
  },

  generateCustNumber: function() {
    for (var i = 0; i < this.storeHours.length; i++) {
      this.custPerHour.push(this.randomCustNumber(this.custMin, this.custMax));
      this.custPerDay += this.custPerHour[i];
    }
  },

  generateCupsNumber: function() {
    for (var i = 0; i < this.storeHours.length; i++) {
      this.cupsPerHour.push(this.custPerHour[i] * this.averageCupsPerCust);
      this.cupsPerDay += this.cupsPerHour[i];
    }
  },

  generatePoundsNumber: function() {
    for (var i = 0; i < this.storeHours.length; i++) {
      this.toGoPoundsPerHour.push(this.custPerHour[i] * this.averagePoundsPerCust);
      this.toGoPoundsPerDay += this.toGoPoundsPerHour[i];
    }
  },

  generateBeanNumber: function() {
    for (var i = 0; i < this.storeHours.length; i++) {
      this.beansNeededHourlyToMakeCup.push((this.cupsPerHour[i] / 16));
      this.beansPerDay += this.beansNeededHourlyToMakeCup[i];
    }
  },

  calcTotalPoundNeededDaily: function() {
    this.totalPoundNeededDaily = (this.beansPerDay + this.toGoPoundsPerDay);
  },

  generateStaffNumber: function() {
    for (var i = 0; i < this.storeHours.length; i++) {
      this.staffPerHour.push(Math.ceil(this.custPerHour[i] / 30));
    }
  },
  printString: function () {
    for (var i = 0; i < this.storeHours.length; i++) {
      this.stringValue.push(this.storeHours[i] + ' ' + (this.beansNeededHourlyToMakeCup[i] + this.toGoPoundsPerHour[i]).toFixed(1) + 'lbs [' + this.custPerHour[i] + ' customers, ' + this.cupsPerHour[i].toFixed(1) + ' cups (' + this.beansNeededHourlyToMakeCup[i].toFixed(1) + ' lbs), ' + this.toGoPoundsPerHour[i].toFixed(1) + ' lbs to-go]');
    }
  },
  totalCustomers: function () {
    return 'Total customers at ' + this.location + ':' + this.custPerDay;
  },
  totalCups: function () {
    return 'Total cups sold at ' + this.location + ':' + this.cupsPerDay.toFixed(1);
  },

  totalToGoPounds: function() {
    return 'Total to-go pound packages sold at ' + this.location + ':' + this.toGoPoundsPerDay.toFixed(1);
  },
  totalPoundsOfBeansNeeded: function() {
    return 'Total pounds of beans needed at ' + this.location + ':' + (this.totalPoundsOfBeansNeeded + this.toGoPoundsPerDay.toFixed(1));
  },
};

capitolHill.randomCustNumber();
capitolHill.generateCustNumber();
capitolHill.generateCupsNumber();
capitolHill.generatePoundsNumber();
capitolHill.generateBeanNumber();
capitolHill.calcTotalPoundNeededDaily();
capitolHill.generateStaffNumber();
capitolHill.printString();
capitolHill.totalCustomers();
capitolHill.totalCups();
capitolHill.totalToGoPounds();
capitolHill.totalPoundsOfBeansNeeded();

var sPL = {

  location: 'Seattle Public Library',
  custMin: 9,
  custMax: 45,
  averageCupsPerCust: 2.6,
  averagePoundsPerCust: 0.02,
  storeHours: ['6:00am:','7:00am:', '8:00am:', '9:00am:', '10:00am:', '11:00am:','12:00pm:','1:00pm:','2:00pm:','3:00pm:','4:00pm:', '5:00pm:','6:00pm:', '7:00pm:', '8:00pm:'],
  custPerHour: [],
  custPerDay: 0,
  cupsPerHour: [],
  cupsPerDay:0,
  toGoPoundsPerHour: [],
  toGoPoundsPerDay: 0,
  beansNeededHourlyToMakeCup: [],
  beansPerDay:0,
  totalPoundNeededDaily:0,
  staffPerHour: [],
  stringValue: [],


  randomCustNumber: function() {
    return Math.floor(Math.random() * (this.custMax - this.custMin) + this.custMin);
  },

  generateCustNumber: function() {
    for (var i = 0; i < this.storeHours.length; i++) {
      this.custPerHour.push(this.randomCustNumber(this.custMin, this.custMax));
      this.custPerDay += this.custPerHour[i];
    }
  },

  generateCupsNumber: function() {
    for (var i = 0; i < this.storeHours.length; i++) {
      this.cupsPerHour.push(this.custPerHour[i] * this.averageCupsPerCust);
      this.cupsPerDay += this.cupsPerHour[i];
    }
  },

  generatePoundsNumber: function() {
    for (var i = 0; i < this.storeHours.length; i++) {
      this.toGoPoundsPerHour.push(this.custPerHour[i] * this.averagePoundsPerCust);
      this.toGoPoundsPerDay += this.toGoPoundsPerHour[i];
    }
  },

  generateBeanNumber: function() {
    for (var i = 0; i < this.storeHours.length; i++) {
      this.beansNeededHourlyToMakeCup.push((this.cupsPerHour[i] / 16));
      this.beansPerDay += this.beansNeededHourlyToMakeCup[i];
    }
  },

  calcTotalPoundNeededDaily: function() {
    this.totalPoundNeededDaily = (this.beansPerDay + this.toGoPoundsPerDay);
  },

  generateStaffNumber: function() {
    for (var i = 0; i < this.storeHours.length; i++) {
      this.staffPerHour.push(Math.ceil(this.custPerHour[i] / 30));
    }
  },
  printString: function () {
    for (var i = 0; i < this.storeHours.length; i++) {
      this.stringValue.push(this.storeHours[i] + ' ' + (this.beansNeededHourlyToMakeCup[i] + this.toGoPoundsPerHour[i]).toFixed(1) + 'lbs [' + this.custPerHour[i] + ' customers, ' + this.cupsPerHour[i].toFixed(1) + ' cups (' + this.beansNeededHourlyToMakeCup[i].toFixed(1) + ' lbs), ' + this.toGoPoundsPerHour[i].toFixed(1) + ' lbs to-go]');
    }
  },
  totalCustomers: function () {
    return 'Total customers at ' + this.location + ':' + this.custPerDay;
  },
  totalCups: function () {
    return 'Total cups sold at ' + this.location + ':' + this.cupsPerDay.toFixed(1);
  },

  totalToGoPounds: function() {
    return 'Total to-go pound packages sold at ' + this.location + ':' + this.toGoPoundsPerDay.toFixed(1);
  },
  totalPoundsOfBeansNeeded: function() {
    return 'Total pounds of beans needed at ' + this.location + ':' + (this.totalPoundsOfBeansNeeded + this.toGoPoundsPerDay.toFixed(1));
  },
};

sPL.randomCustNumber();
sPL.generateCustNumber();
sPL.generateCupsNumber();
sPL.generatePoundsNumber();
sPL.generateBeanNumber();
sPL.calcTotalPoundNeededDaily();
sPL.generateStaffNumber();
sPL.printString();
sPL.totalCustomers();
sPL.totalCups();
sPL.totalToGoPounds();
sPL.totalPoundsOfBeansNeeded();

var sLU = {

  location: 'South Lake Union',
  custMin: 5,
  custMax: 18,
  averageCupsPerCust: 1.3,
  averagePoundsPerCust: 0.04,
  storeHours: ['6:00am:','7:00am:', '8:00am:', '9:00am:', '10:00am:', '11:00am:','12:00pm:','1:00pm:','2:00pm:','3:00pm:','4:00pm:', '5:00pm:','6:00pm:', '7:00pm:', '8:00pm:'],
  custPerHour: [],
  custPerDay: 0,
  cupsPerHour: [],
  cupsPerDay:0,
  toGoPoundsPerHour: [],
  toGoPoundsPerDay: 0,
  beansNeededHourlyToMakeCup: [],
  beansPerDay:0,
  totalPoundNeededDaily:0,
  staffPerHour: [],
  stringValue: [],


  randomCustNumber: function() {
    return Math.floor(Math.random() * (this.custMax - this.custMin) + this.custMin);
  },

  generateCustNumber: function() {
    for (var i = 0; i < this.storeHours.length; i++) {
      this.custPerHour.push(this.randomCustNumber(this.custMin, this.custMax));
      this.custPerDay += this.custPerHour[i];
    }
  },

  generateCupsNumber: function() {
    for (var i = 0; i < this.storeHours.length; i++) {
      this.cupsPerHour.push(this.custPerHour[i] * this.averageCupsPerCust);
      this.cupsPerDay += this.cupsPerHour[i];
    }
  },

  generatePoundsNumber: function() {
    for (var i = 0; i < this.storeHours.length; i++) {
      this.toGoPoundsPerHour.push(this.custPerHour[i] * this.averagePoundsPerCust);
      this.toGoPoundsPerDay += this.toGoPoundsPerHour[i];
    }
  },

  generateBeanNumber: function() {
    for (var i = 0; i < this.storeHours.length; i++) {
      this.beansNeededHourlyToMakeCup.push((this.cupsPerHour[i] / 16));
      this.beansPerDay += this.beansNeededHourlyToMakeCup[i];
    }
  },

  calcTotalPoundNeededDaily: function() {
    this.totalPoundNeededDaily = (this.beansPerDay + this.toGoPoundsPerDay);
  },

  generateStaffNumber: function() {
    for (var i = 0; i < this.storeHours.length; i++) {
      this.staffPerHour.push(Math.ceil(this.custPerHour[i] / 30));
    }
  },
  printString: function () {
    for (var i = 0; i < this.storeHours.length; i++) {
      this.stringValue.push(this.storeHours[i] + ' ' + (this.beansNeededHourlyToMakeCup[i] + this.toGoPoundsPerHour[i]).toFixed(1) + 'lbs [' + this.custPerHour[i] + ' customers, ' + this.cupsPerHour[i].toFixed(1) + ' cups (' + this.beansNeededHourlyToMakeCup[i].toFixed(1) + ' lbs), ' + this.toGoPoundsPerHour[i].toFixed(1) + ' lbs to-go]');
    }
  },
  totalCustomers: function () {
    return 'Total customers at ' + this.location + ':' + this.custPerDay;
  },
  totalCups: function () {
    return 'Total cups sold at ' + this.location + ':' + this.cupsPerDay.toFixed(1);
  },

  totalToGoPounds: function() {
    return 'Total to-go pound packages sold at ' + this.location + ':' + this.toGoPoundsPerDay.toFixed(1);
  },
  totalPoundsOfBeansNeeded: function() {
    return 'Total pounds of beans needed at ' + this.location + ':' + (this.totalPoundsOfBeansNeeded + this.toGoPoundsPerDay.toFixed(1));
  },
};

sLU.randomCustNumber();
sLU.generateCustNumber();
sLU.generateCupsNumber();
sLU.generatePoundsNumber();
sLU.generateBeanNumber();
sLU.calcTotalPoundNeededDaily();
sLU.generateStaffNumber();
sLU.printString();
sLU.totalCustomers();
sLU.totalCups();
sLU.totalToGoPounds();
sLU.totalPoundsOfBeansNeeded();

var sTAirport = {

  location: 'Sea-Tac Airport',
  custMin: 28,
  custMax: 44,
  averageCupsPerCust: 1.1,
  averagePoundsPerCust: 0.41,
  storeHours: ['6:00am:','7:00am:', '8:00am:', '9:00am:', '10:00am:', '11:00am:','12:00pm:','1:00pm:','2:00pm:','3:00pm:','4:00pm:', '5:00pm:','6:00pm:', '7:00pm:', '8:00pm:'],
  custPerHour: [],
  custPerDay: 0,
  cupsPerHour: [],
  cupsPerDay:0,
  toGoPoundsPerHour: [],
  toGoPoundsPerDay: 0,
  beansNeededHourlyToMakeCup: [],
  beansPerDay:0,
  totalPoundNeededDaily:0,
  staffPerHour: [],
  stringValue: [],


  randomCustNumber: function() {
    return Math.floor(Math.random() * (this.custMax - this.custMin) + this.custMin);
  },

  generateCustNumber: function() {
    for (var i = 0; i < this.storeHours.length; i++) {
      this.custPerHour.push(this.randomCustNumber(this.custMin, this.custMax));
      this.custPerDay += this.custPerHour[i];
    }
  },

  generateCupsNumber: function() {
    for (var i = 0; i < this.storeHours.length; i++) {
      this.cupsPerHour.push(this.custPerHour[i] * this.averageCupsPerCust);
      this.cupsPerDay += this.cupsPerHour[i];
    }
  },

  generatePoundsNumber: function() {
    for (var i = 0; i < this.storeHours.length; i++) {
      this.toGoPoundsPerHour.push(this.custPerHour[i] * this.averagePoundsPerCust);
      this.toGoPoundsPerDay += this.toGoPoundsPerHour[i];
    }
  },

  generateBeanNumber: function() {
    for (var i = 0; i < this.storeHours.length; i++) {
      this.beansNeededHourlyToMakeCup.push((this.cupsPerHour[i] / 16));
      this.beansPerDay += this.beansNeededHourlyToMakeCup[i];
    }
  },

  calcTotalPoundNeededDaily: function() {
    this.totalPoundNeededDaily = (this.beansPerDay + this.toGoPoundsPerDay);
  },

  generateStaffNumber: function() {
    for (var i = 0; i < this.storeHours.length; i++) {
      this.staffPerHour.push(Math.ceil(this.custPerHour[i] / 30));
    }
  },
  printString: function () {
    for (var i = 0; i < this.storeHours.length; i++) {
      this.stringValue.push(this.storeHours[i] + ' ' + (this.beansNeededHourlyToMakeCup[i] + this.toGoPoundsPerHour[i]).toFixed(1) + 'lbs [' + this.custPerHour[i] + ' customers, ' + this.cupsPerHour[i].toFixed(1) + ' cups (' + this.beansNeededHourlyToMakeCup[i].toFixed(1) + ' lbs), ' + this.toGoPoundsPerHour[i].toFixed(1) + ' lbs to-go]');
    }
  },
  totalCustomers: function () {
    return 'Total customers at ' + this.location + ':' + this.custPerDay;
  },
  totalCups: function () {
    return 'Total cups sold at ' + this.location + ':' + this.cupsPerDay.toFixed(1);
  },

  totalToGoPounds: function() {
    return 'Total to-go pound packages sold at ' + this.location + ':' + this.toGoPoundsPerDay.toFixed(1);
  },
  totalPoundsOfBeansNeeded: function() {
    return 'Total pounds of beans needed at ' + this.location + ':' + (this.totalPoundsOfBeansNeeded + this.toGoPoundsPerDay.toFixed(1));
  },
};

sTAirport.randomCustNumber();
sTAirport.generateCustNumber();
sTAirport.generateCupsNumber();
sTAirport.generatePoundsNumber();
sTAirport.generateBeanNumber();
sTAirport.calcTotalPoundNeededDaily();
sTAirport.generateStaffNumber();
sTAirport.printString();
sTAirport.totalCustomers();
sTAirport.totalCups();
sTAirport.totalToGoPounds();
sTAirport.totalPoundsOfBeansNeeded();
