'use strict';
//
//var childPikePlaceUl = document.createElement('ul');

//for (var i = 0; i < storeHours.length; i++) {
  //var liPikePlace = document.createElement('li');
  //liPikePlace.textContent = storeHours[i];
  //childPikePlace.appendChild(liPikePlace);
//}
//childPikePlace.textContent = 'Schedule of Output';
//var parentPikePlace = document.getElementById('parentPikePlace');
//parentPikePlace.appendChild(childPikePlaceUl);
//for (var i = 0; i < storeHours.length; i++) {
  //console.log(storeHours[i]);
//}
var pikePlace = {

  location: 'Pike Place',
  custMin: 14,
  custMax: 35,
  averageCupsPerCust: 1.2,
  averagePoundsPerCust: 0.34,
  storeHours: ['6:00am:','7:00am:', '8:00am:', '9:00am:', '10:00am:', '11:00am:','12:00pm:','1:00pm:','2:00pm:','3:00pm:','4:00pm:', '5:00pm:','6:00pm:', '7:00pm:', '8:00pm:'],
  custPerHour: [],
  custPerDay: 0,
  cupsPerHour: [],
  cupsPerDay:0,
  poundsPerHour: [],
  poundsPerDay: 0,
  beansNeededHourlyToMakeCup: [],
  beansPerDay:0,
  staffPerHour: [],
  staffPerDay: 0,

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
      this.poundsPerHour.push(this.custPerHour[i] * this.averagePoundsPerCust);
      this.poundsPerDay += this.poundsPerHour[i];
    }
  },

  generateBeanNumber: function() {
    for (var i = 0; i < this.storeHours.length; i++) {
      this.beansNeededHourlyToMakeCup.push((this.cupsPerHour[i] / 16) * this.custPerHour[i]);
      this.beansPerDay += this.beansNeededHourlyToMakeCup[i];
    }
  },

  generateStaffNumber: function() {
    for (var i = 0; i < this.storeHours.length; i++) {
      this.staffPerHour.push(Math.ceil(this.custPerHour[i] / 30));
      this.staffPerDay += this.staffPerHour[i];
    }
  }
};
pikePlace.randomCustNumber();
pikePlace.generateCustNumber();
pikePlace.generateCupsNumber();
pikePlace.generatePoundsNumber();
pikePlace.generateBeanNumber();
pikePlace.generateStaffNumber();
