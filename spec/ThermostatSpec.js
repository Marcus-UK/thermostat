describe("Thermostat", function() {

  var myThermostat;

  beforeEach(function() {
    myThermostat = new Thermostat();
  })


  it("returns default temperature of 20", function() {
    expect(myThermostat.getTemp()).toEqual(20);
  })

  it("increase temperature", function() {
    myThermostat.increaseTemp(4);
    expect(myThermostat.getTemp()).toEqual(24);
  })

  it("decrease temperature", function() {
    myThermostat.decreaseTemp(4);
    expect(myThermostat.getTemp()).toEqual(16);
  })
})
