const Laptop = function({name,ram,hdd}){
  this.name = name || '';
  this.ram = ram || 0;
  this.hadd = hdd || 0;
}


module.exports = Laptop;