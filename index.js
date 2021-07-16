class Formatter {
  //add static methods here
  static capitalize(str){
    return str.slice(0, 1).toUpperCase() + str.slice(1)
  }
  static sanitize(str){
    let newStr = '';
    for(let i = 0; i < str.length; i++){
      const regex = new RegExp('[\s\\-\'a-zA-Z0-9]')
      if(regex.test(str.slice(i,i+1))){
        newStr += str.slice(i,i+1)
      }
      else{
        newStr += ''
      }
    }
    return newStr; 
  }
  static titleize(str){
    let array = [];
    let newStr = ''
    this.capitalize(); 
    array = str.split(' ');
    array[0] = array[0].splice(0,1).toUpperCase() + array[0].splice(1);
    for(let i = 1; i < array.length; i++){
      if(array[i] === 'a' || array[i] === 'an' || array[i] === 'but' || array[i] === 'of' || array[i] === 'and' || array[i] === 'for' || array[i] === 'at' || array[i] === 'by' || array[i] === 'from'){
        array[i] = array[i];
      }
      else{
        array[i] = array[i].slice(0,1).toUpperCase() + array[i].slice(1);
      }
    }

    for(let i = 0; i < array.length; i++){
      newStr += array[i] + " "
    }
    return newStr; 


  }
}