
const DEFAULT_TEMP = 20;

function Thermostat() {
  this.temp = DEFAULT_TEMP;
  this.powerStatus = 'on'
}

Thermostat.prototype.getTemp = function(number) {
  return this.temp;
}

Thermostat.prototype.increaseTemp = function(increase) {
  this.temp +=  increase;
}

Thermostat.prototype.decreaseTemp = function(decrease) {
  this.temp -= decrease;
}

Thermostat.prototype.getPowerStatus = function() {
  return this.powerStatus;
}

Thermostat.prototype.resetTemp = function(number) {
  this.temp = DEFAULT_TEMP;
}
