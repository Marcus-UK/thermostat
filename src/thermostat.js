function Thermostat() {
this.temp = 20;
}

Thermostat.prototype.getTemp = function(number) {
  return this.temp;
}

Thermostat.prototype.increaseTemp = function(increase) {
  this.temp +=  increase;
}
