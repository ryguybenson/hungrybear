export let bear = {
  foodLevel: 10,
  sleepLevel: 50,
  planeParts: 0,
  setHunger: function() {
    if(this.foodLevel < 1000) {
      const hungerInterval = setInterval(() => {
        this.foodLevel--;
        if (this.didYouGetEaten() == true) {
          clearInterval(hungerInterval);
          return "You got eaten!";
        }
      }, 3000);
    } else if (this.foodLevel >= 1000 && this.foodLevel < 2000) {
      const hungerInterval = setInterval(() => {
        this.foodLevel--;
        if (this.didYouGetEaten() == true) {
          clearInterval(hungerInterval);
          return "You got eaten!";
        }
      }, 500);
    }
  },
  setSleep: function() {
    const sleepInterval = setInterval(() => {
      this.sleepLevel-2;
      if (this.didYouGetEaten() == true) {
        clearInterval(sleepInterval);
        return "You got eaten!";
      }
    }, 2000);
  },
  didYouGetEaten: function() {
    if (this.foodLevel > 0 || this.sleepLevel > 0) {
      return false;
    } else {
      return true;
    }
  },
  feed: function(amount) {
    let that = this;
    return function(food) {
      that.foodLevel += amount
      return `The bear ate the ${food}! Food level goes up ${amount}!`
    }
  },
  sleep: function(amount) {
    let that = this;
    return function(sleep) {
      that.sleepLevel += amount
      return `The bear ate the ${sleep}! Sleep level goes up ${amount}!`
    }
  },
  isHeSleeping: function() {
    if(this.sleepLevel > 100) {
      return true;
    } else {
      return false;
    }
  },
  parts: function(amount) {
    let that = this;
    return function(parts) {
      that.partsLevel += amount
      return `You collected the ${parts}! Parts level goes up ${amount}!`
    }
  },
  completedPlane: function() {
    if (this.partsLevel > 4) {
      return true;
    } else {
      return false;
    }
  },
  // didYouReachLevelTwo: function() {
  //   if (this.foodLevel > 1000) {
  //     this.setHunger: function() {
  //       const hungerInterval = setInterval(() => {
  //         this.foodLevel--;
  //         if (this.didYouGetEaten() == true) {
  //           clearInterval(hungerInterval);
  //           return "You got eaten!";
  //         }
  //       }, 500);
  //     }
  //   }
  // },
  // didYouReachLevelThree: function() {
  //   setHunger: function() {
  //     const hungerInterval = setInterval(() => {
  //       this.foodLevel--;
  //       if (this.didYouGetEaten() == true) {
  //         clearInterval(hungerInterval);
  //         return "You got eaten!";
  //       }
  //     }, 3000);
  //   },
  // }
};


bear.eatSmall = bear.feed(5);
bear.eatMedium = bear.feed(10);
bear.eatLarge = bear.feed(15);
bear.eatYuck = bear.feed(-10);
bear.eatPowerUp = bear.feed(50);
bear.eatSpecialBonus = bear.feed(100);
bear.eatBadFood = bear.feed(-200);
bear.badSleep = bear.sleep(10);
bear.goodSleep = bear.sleep(50);
