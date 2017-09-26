function Thermostat() {
  this.temp = 20;
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
