const GadgetFactory = require('./gadgetFactory');
const MyLaptop = GadgetFactory.createGadget('Laptop',{
  ram : 8,
  ssd : 500,
  name : 'HP Elitebook Core i5'
});

const MyTablet = GadgetFactory.createGadget('Tablet',{
  ram : 8,
  ssd : 500,
  name : 'Huwavi Long screen',
  network : '4G'
});

console.log(MyLaptop);
console.log(MyTablet);