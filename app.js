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
var storeHours = ['6:00am:','7:00am:', '8:00am:', '9:00am:', '10:00am:', '11:00am:','12:00pm:','1:00pm:','2:00pm:','3:00pm:','4:00pm:', '5:00pm:','6:00pm:', '7:00pm:', '8:00pm:'];
for (var i = 0; i < storeHours.length; i++) {
  console.log(storeHours[i]);
}
var pikePlace = {
  averageCustomerNumber: function() {
    return Math.floor(Math.random() * (this.custMax - this.custMin) + this.custMin);
  },
  custMin: 14,
  custMax: 35,
  averageCupsPerHour: function() {
    var cupsPerCustomer = 1.2;
    return cupsPerCustomer * this.averageCustomerNumber;
  },
  averageBeansPurchased: function () {
    var beansToGo = .34;
    return beansToGo * this.averageCustomerNumber;
  },
  AmountofBeansForecast: function() {
    return averageBeansPurchased + (this.averageCupsPerHour / 16);
  },
};
pikePlace;
// I didn't get to finish this - I am confused so I am going to submit for partial credit and resubmit it later when I better understand the methods
