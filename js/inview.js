/*!
Waypoints Inview Shortcut - 4.0.0
Copyright © 2011-2015 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
(function() {
  'use strict'



  function noop() {}



  var Waypoint = window.Waypoint



  /* http://imakewebthings.com/waypoints/shortcuts/inview */
  function Inview(options) {
    this.options = Waypoint.Adapter.extend({}, Inview.defaults, options)
    this.axis = this.options.horizontal ? 'horizontal' : 'vertical'
    this.waypoints = []
    this.element = this.options.element
    this.createWaypoints()
  }



  // Just add this code after Waypoints import/inclusion
Inview.prototype.createWaypoints = function() {
  // same as jQuery.outerHeight() function, works for IE9+
  function outerHeight(el) {
    var height = el.offsetHeight;
    var style = getComputedStyle(el);



    height += parseInt(style.marginTop) + parseInt(style.marginBottom);
    return height;
  }



  var configs = {
    vertical: [{
      down: 'enter',
      up: 'exited',
      offset: function() {
        var _offset = this.options.offset && this.options.offset.bottom || 0;
        return this.options.context.innerHeight - _offset;
      }.bind( this )
    }, {
      down: 'entered',
      up: 'exit',
      offset: function() {
        var _offset = this.options.offset && this.options.offset.bottom || 0;
        return this.options.context.innerHeight - outerHeight(this.element) - _offset;
      }.bind( this )
    }, {
      down: 'exit',
      up: 'entered',
      offset: function() {
        var _offset = this.options.offset && this.options.offset.top || 0;
        return _offset;
      }.bind( this )
    }, {
      down: 'exited',
      up: 'enter',
      offset: function() {
        var _offset = this.options.offset && this.options.offset.top || 0;
        return _offset - outerHeight(this.element);
      }.bind( this )
    }],
    horizontal: [{
      right: 'enter',
      left: 'exited',
      offset: '100%'
    }, {
      right: 'entered',
      left: 'exit',
      offset: 'right-in-view'
    }, {
      right: 'exit',
      left: 'entered',
      offset: 0
    }, {
      right: 'exited',
      left: 'enter',
      offset: function() {
        return -this.adapter.outerWidth()
      }
    }]
  };



  for (var i = 0, end = configs[this.axis].length; i < end; i++) {
    var config = configs[this.axis][i]
    this.createWaypoint(config)
  }
};



  /* Private */
  Inview.prototype.createWaypoint = function(config) {
    var self = this
    this.waypoints.push(new Waypoint({
      context: this.options.context,
      element: this.options.element,
      enabled: this.options.enabled,
      handler: (function(config) {
        return function(direction) {
          self.options[config[direction]].call(self, direction)
        }
      }(config)),
      offset: config.offset,
      horizontal: this.options.horizontal
    }))
  }



  /* Public */
  Inview.prototype.destroy = function() {
    for (var i = 0, end = this.waypoints.length; i < end; i++) {
      this.waypoints[i].destroy()
    }
    this.waypoints = []
  }



  Inview.prototype.disable = function() {
    for (var i = 0, end = this.waypoints.length; i < end; i++) {
      this.waypoints[i].disable()
    }
  }



  Inview.prototype.enable = function() {
    for (var i = 0, end = this.waypoints.length; i < end; i++) {
      this.waypoints[i].enable()
    }
  }



  Inview.defaults = {
    context: window,
    enabled: true,
    enter: noop,
    entered: noop,
    exit: noop,
    exited: noop
  }



  Waypoint.Inview = Inview
}())
;
