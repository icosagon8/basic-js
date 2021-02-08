const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    value = (value !== undefined) ? `( ${value} )` : '( )';
    this.arr.push(value);
    return this;
  },
  removeLink(position) {
    if (typeof (position) === 'number' && position <= this.arr.length && position === parseInt(position)) {
      this.arr.splice(position - 1, 1);
    } else {
      this.arr = [];
      throw new Error;
    }

    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let str = this.arr.join('~~');
    this.arr = [];
    return str;
  }
};

module.exports = chainMaker;