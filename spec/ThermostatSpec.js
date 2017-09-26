describe("Thermostat", function() {

  var myThermostat;

  beforeEach(function() {
    myThermostat = new Thermostat();
  })

  describe("getTemp", function() {
    it("returns default temperature of 20", function() {
      expect(myThermostat.getTemp()).toEqual(20);
    })
    it("increase temperature by 4", function() {
      myThermostat.increaseTemp(4);
      expect(myThermostat.getTemp()).toEqual(24);
    })
    it("decrease temperature by 4", function() {
      myThermostat.decreaseTemp(4);
      expect(myThermostat.getTemp()).toEqual(16);
    })
  })
  describe("getPowerStatus", function() {
    it("return power saving mode", function() {
      expect(myThermostat.getPowerStatus()).toEqual('on');
    })
  })
})
