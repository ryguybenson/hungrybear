import 'bootstrap';
import $ from 'jquery';
import '../node_modules/bootstrap/scss/bootstrap.scss';
import './sass/styles.scss';

let bear = new Object;
bear.name = "Fuzzy Wuzzy";

bear.introduction = function() {
  console.log("Name in the outer function: " + this.name);
  let that = this;
  function doThis() {
    console.log("Name in the inner function: " + that.name);
    return `My name is ${that.name}`
  }
  return doThis()
}
bear.introduction();
