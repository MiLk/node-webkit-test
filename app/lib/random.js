module.exports = function() {
  var rand = ''+Math.round(Math.random() * 123456789123456789);
  var str = '';
  for(var i = 0; i < rand.length; ++i) {
    str += String.fromCharCode(65+parseInt(rand.charAt(i)));
  }
  return str;
};
