const Tablet = function({name,ram,hdd,network}){
  this.name = name || '';
  this.ram = ram || 0;
  this.hadd = hdd || 0;
  this.network = network || 0;
}


module.exports = Tablet;