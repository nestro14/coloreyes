export function platesList(){
    return{
        type:'PLATES_LIST',
        payload:insertId(generatePlateDate())
    }  
}


var generatePlateDate = function (){
  var tests = ["protanopia","protanomaly","deuteranopia","deuteranomaly","tritanomaly","tritanopia"];
  var nums = [1,2,3,4,5,6,7,8,9];
  var arr = [];
  var counter = 1;
  
  for (var i = 0; i < tests.length; i++) {
   for(var j = 0; j < nums.length; j++) {
     var obj = {"id":counter,"number":nums[j],"imageName":nums[j]+".png","test":tests[i]};
    // console.log(obj)
    arr.push(obj);
     counter++;
   }
  }
  
  return shuffleArray(arr);
}

var shuffleArray = function(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};

var insertId = function(array){
  var counter = 1;
  for (var i = 0; i < array.length; i++) {
    array[i].id = counter;
    counter++;
  }
  return array;
}