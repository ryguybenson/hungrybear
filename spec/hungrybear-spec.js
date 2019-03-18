
import { bear } from './../src/hungrybear.js';

describe('HungryBear', function() {
  let fuzzy = bear;

  beforeEach(function() {
    jasmine.clock().install();
    fuzzy.foodLevel = 10;
    fuzzy.sleepLevel = 30;
    fuzzy.name = "Fuzzy";
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should have a name and a food level of 10 when it is created', function() {
    expect(fuzzy.name).toEqual("Fuzzy");
    expect(fuzzy.foodLevel).toEqual(10);
  });
  it('should test if the bear is asleep', function() {
    fuzzy.sleepLevel = 101;
    expect(fuzzy.isHeSleeping()).toEqual(true);
  });

  it('should have a food level of 9 after 3001 milliseconds', function() {
    fuzzy.setHunger();
    jasmine.clock().tick(3001);
    expect(fuzzy.foodLevel).toEqual(9);
  });
  it('should get very hungry if the food level drops below zero', function() {
    fuzzy.foodLevel = 0;
    expect(fuzzy.didYouGetEaten()).toEqual(false);
  });

  it('should get very hungry if 10 seconds pass without feeding', function() {
    jasmine.clock().tick(30001);
    expect(fuzzy.didYouGetEaten()).toEqual(false);
  });

  it('should return that the bear ate blueberries and the food level should go up 5', function() {
    expect(fuzzy.eatSmall("blueberries")).toEqual("The bear ate the blueberries! Food level goes up 5!");
    expect(fuzzy.foodLevel).toEqual(15);
  });
  it('should return that the bear ate blueberries and the food level should go up 10', function() {
    expect(fuzzy.eatMedium("blueberries")).toEqual("The bear ate the blueberries! Food level goes up 10!");
    expect(fuzzy.foodLevel).toEqual(20);
  });
  it('should return that the bear ate blueberries and the food level should go up 15', function() {
    expect(fuzzy.eatLarge("blueberries")).toEqual("The bear ate the blueberries! Food level goes up 15!");
    expect(fuzzy.foodLevel).toEqual(25);
  });
  it('should return that the bear ate blueberries and the food level should go up -10', function() {
    expect(fuzzy.eatYuck("blueberries")).toEqual("The bear ate the blueberries! Food level goes up -10!");
    expect(fuzzy.foodLevel).toEqual(0);
  });
  it('should return that the bear ate blueberries and the food level should go up 50', function() {
    expect(fuzzy.eatPowerUp("blueberries")).toEqual("The bear ate the blueberries! Food level goes up 50!");
    expect(fuzzy.foodLevel).toEqual(60);
  });
  it('should return that the bear ate blueberries and the food level should go up 100', function() {
    expect(fuzzy.eatSpecialBonus("blueberries")).toEqual("The bear ate the blueberries! Food level goes up 100!");
    expect(fuzzy.foodLevel).toEqual(110);
  });
  it('should test if the plane is completed', function() {
    fuzzy.partsLevel = 5;
    expect(fuzzy.completedPlane()).toEqual(true);
  });
  it('should test the food is going down by correct amount', function() {
    fuzzy.foodLevel = 1500;
    fuzzy.setHunger();
    jasmine.clock().tick(3001);
    expect(fuzzy.foodLevel).toEqual(1494);
  });
});
