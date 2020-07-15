const Tablet = require('./tablet');
const Laptop = require('./laptop');
const gadget = {Laptop,Tablet};

module.exports = {
  createGadget(type,attributes){
    const GadgetType = gadget[type];
    return new GadgetType(attributes);
  }
}