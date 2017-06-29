/**
 * @fileoverview This module provides some simple function for inheritance.
 * @author NHN Ent.
 *         FE Development Lab <dl_javascript@nhnent.com>
 */

'use strict';

/**
 * Create a new object with the specified prototype object and properties.
 * @param {Object} obj This object will be a prototype of the newly-created object.
 * @returns {Object}
 * @memberof tui.util
 */
function createObject(obj) {
    function F() {} /* eslint-ignore require-jsdoc */
    F.prototype = obj;
    return new F();
}

/**
 * Provide a simple inheritance in prototype-oriented.
 * Caution :
 *  Don't overwrite the prototype of child constructor.
 *
 * @param {function} subType Child constructor
 * @param {function} superType Parent constructor
 * @memberof tui.util
 * @example
 *  // Parent constructor
 *  function Animal(leg) {
 *      this.leg = leg;
 *  }
 *
 *  Animal.prototype.growl = function() {
 *      // ...
 *  };
 *
 *  // Child constructor
 *  function Person(name) {
 *      this.name = name;
 *  }
 *
 *  // Inheritance
 *  core.inherit(Person, Animal);
 *
 *  // After this inheritance, please use only the extending of property.
 *  // Do not overwrite prototype.
 *  Person.prototype.walk = function(direction) {
 *      // ...
 *  };
 */
function inherit(subType, superType) {
    var prototype = createObject(superType.prototype);
    prototype.constructor = subType;
    subType.prototype = prototype;
}

module.exports = {
    createObject: createObject,
    inherit: inherit
};
