describe("Thermostat", function () {

  var myThermostat;

  beforeEach(function () {
    myThermostat = new Thermostat();
  });

  describe("getTemp", function () {
    it("returns default temperature of " + DEFAULT_TEMP, function () {
      expect(myThermostat.getTemp()).toEqual(DEFAULT_TEMP);
    });
  });
  describe("increaseTemp", function () {
    it("increase temperature by 4", function () {
      myThermostat.increaseTemp(4);
      expect(myThermostat.getTemp()).toEqual(24);
    });
  });
  describe("decreaseTemp", function () {
    it("decrease temperature by 4", function () {

      myThermostat.decreaseTemp(4);
      expect(myThermostat.getTemp()).toEqual(16);
    });
  });
  describe("getPowerStatus", function () {
    it("return power saving mode", function () {
      expect(myThermostat.getPowerStatus()).toEqual('on');
    });
  });
  describe("resetTemp", function () {
    it("set tempeature back to default (" + DEFAULT_TEMP + ")", function () {
      myThermostat.resetTemp();
      expect(myThermostat.getTemp()).toEqual(DEFAULT_TEMP);
    });
  });
});
