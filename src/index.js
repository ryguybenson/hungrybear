import 'bootstrap';
import $ from 'jquery';
import '../node_modules/bootstrap/scss/bootstrap.scss';
import './sass/styles.scss';


import { bear } from './hungrybear.js'







$(document).ready(function() {
  let bear = new Object;
  bear.name = "Fuzzy Wuzzy";
  $
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
  function collision() {
    var $projectile =$("#projectile"),
    projectile = $projectile[0],
    ballRect = projectile.getBoundingClientRect();
    // console.log(ballRect);
    var $target = $('#target'),
    target = $target[0],
    targetRect = target.getBoundingClientRect();
    if (targetRect.x < ballRect.x + ballRect.width &&
      targetRect.x + targetRect.width > ballRect.x &&
      targetRect.y < ballRect.y + ballRect.height &&
      targetRect.y + targetRect.height > ballRect.y) {
        // $('#target').hide();
        var docHeight = $("#pane").height(),
        docWidth = $("#pane").width(),
        $div = $('#target'),
        divWidth = $div.width(),
        divHeight = $div.height(),
        heightMax = docHeight - divHeight,
        widthMax = docWidth - divWidth;

        $div.css({
          left: Math.floor( Math.random() * widthMax ),
          top: Math.floor( Math.random() * heightMax )
        });
      }
  }
    var test = setInterval(collision, 100);

  var pane = $('#pane'),
  projectile = $('#projectile'),
  w = pane.width() - projectile.width(),
  d = {},
  x = 3;

  function newv(v,a,b) {
    var n = parseInt(v, 10) - (d[a] ? x : 0) + (d[b] ? x : 0);
    return n < 0 ? 0 : n > w ? w : n;
  }

  $(window).keydown(function(e) { d[e.which] = true; });
  $(window).keyup(function(e) { d[e.which] = false; });

  setInterval(function() {
    projectile.css({
      left: function(i,v) { return newv(v, 37, 39); },
      top: function(i,v) { return newv(v, 38, 40); }
    });
  }, 20);

});
