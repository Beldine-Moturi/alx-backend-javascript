export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }
}

Airport.prototype.toString = function airporttoString() {
  return `[Object ${this._code}]`;
};
