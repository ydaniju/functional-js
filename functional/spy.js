function Spy(target, method){
  const self = {
    count: 0
  }
  const oldMethod = target[method];

  target[method] = (function() {
    return function() {
      ++self.count;
      return oldMethod.apply(target, arguments);    
    };    
  })(this);

  return self;
}

module.exports = Spy
