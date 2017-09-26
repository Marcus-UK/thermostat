describe("Thermostat", function() {

  var myThermostat = new Thermostat();

  it("returns default temperature of 20", function() {
    console.log(myThermostat);
    expect(myThermostat.getTemp()).toEqual(20)
  })
})
