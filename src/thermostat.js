
const DEFAULT_TEMP = 20;

function Thermostat() {
  this.temp = DEFAULT_TEMP;
  this.powerStatus = 'on'
}

Thermostat.prototype.getTemp = function() {
  return this.temp;
}

Thermostat.prototype.increaseTemp = function(increase) {
  this.temp +=  increase;
}

Thermostat.prototype.decreaseTemp = function(decrease) {
  if (this.temp - decrease < 10) {
  return 'Temperature too low'
} else {
    this.temp -= decrease
    return this.temp
  }

}

Thermostat.prototype.getPowerStatus = function() {
  return this.powerStatus;
}

Thermostat.prototype.resetTemp = function(number) {
  this.temp = DEFAULT_TEMP;
}
