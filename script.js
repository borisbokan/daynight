'use strict';
/**
 * @author Boris Bokan, borisbokan@gmail.com; v1
 *
 */
function Thermostat() {
  this.currentTime = 6; //change the data as you wish
  this.switched = true; // if temp < 8 must be true and if  > 16 must be false
  this.currentTemp = 3; //change the data as you wish
  this.dailyTemperature = 27; //Daly temp

  this.getCurrentTemperature = () => this.currentTemp;
  //Current time in minutes
  this.getCurrentTime = () => this.currentTime;
  //Is switched
  this.isSwitched = () => this.switched;
  //Resseting time not date
  this.resetTime = () => (this.currentTime = 6);

  this.resetTemperature = () => (this.currentTemp = 3);

  //get daily temperature
  this.getDailyTemperature = () => this.dailyTemperature;
}

//increase hour
Thermostat.prototype.increaseHour = function () {
  this.currentTime++;
};
//increase
Thermostat.prototype.increase = function () {
  this.currentTemp += 2;
};

//decrease
Thermostat.prototype.decrease = function () {
  this.currentTemp -= 2;
};

// switch On thermostate
Thermostat.prototype.switchOn = function () {
  this.switched = true;
};

//switch off thermostate
Thermostat.prototype.switchOff = function () {
  this.switched = false;
};

//control of temperature
Thermostat.prototype.settingCriteriaOfTemperature = function () {
  if (this.getCurrentTemperature() < 8) {
    this.switchOn();
    console.log(`Thermostat status: ${this.isSwitched() ? 'On' : 'Off'} `);
  }

  if (this.getCurrentTemperature() > 16) {
    this.switchOff();
    console.log(`Thermostat status: ${this.isSwitched() ? 'On' : 'Off'} `);
  }
};

//TEST
const thermo = new Thermostat();
setInterval(function () {
  //???
  //Increasinghours
  thermo.increaseHour();
  thermo.getCurrentTime() == 7
    ? thermo.resetTemperature()
    : thermo.getCurrentTemperature();
  if (thermo.getCurrentTime() > 24) {
    thermo.resetTime();
  } else {
    if (
      thermo.getCurrentTime() === 24 ||
      (thermo.getCurrentTime() > 1 && thermo.getCurrentTime() < 7)
    ) {
      thermo.decrease();

      console.log(
        `Current time: ${thermo.getCurrentTime()} h and temperature is: ${thermo.getCurrentTemperature()} degrees`
      );
      thermo.settingCriteriaOfTemperature();
    }
    if (thermo.getCurrentTime() >= 7 && thermo.getCurrentTime() <= 15) {
      thermo.increase();

      console.log(
        `Current time: ${thermo.getCurrentTime()} h and temperature is: ${thermo.getCurrentTemperature()} degrees`
      );
      thermo.settingCriteriaOfTemperature();
    }
    if (thermo.getCurrentTime() > 15 && thermo.getCurrentTime() < 20) {
      if (thermo.currentTemp > 27) {
        thermo.currentTemp = thermo.getDailyTemperature();
      }

      //thermo.settingCriteriaOfTemperature();
      console.log(
        `Current time: ${thermo.getCurrentTime()} h and temperature is: ${thermo.getCurrentTemperature()} degrees`
      );
      thermo.settingCriteriaOfTemperature();
    }

    if (thermo.getCurrentTime() > 20 && thermo.getCurrentTime() < 24) {
      thermo.decrease();
      console.log(
        `Current time: ${thermo.getCurrentTime()} h and temperature is: ${thermo.getCurrentTemperature()} degrees`
      );
      thermo.settingCriteriaOfTemperature();
    }
  }
}, 2000); //Set the simulated time you want (that the minute does not last 6000 sec)..to have a shorter duration
