var callFriend = function(){
  var friend = 'Jake';
  function callF(number){
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF('435-215-9248');
};
console.log(callFriend());

//OR

var callFriend = function(){
  var friend = 'Jake';
  var number = '435-215-9248';
  function callF(number){
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF(number);
};
console.log(callFriend());

//Above, you're given a callFriend function, that returns another function. 
//Do what you need with the code above in order to console.log 'Calling Jake at 435-215-9248'


