

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}



function number_format(number, decimals, decPoint, thousandsSep){
  decimals = decimals || 0;
  number = parseFloat(number);

  if(!decPoint || !thousandsSep){
    decPoint = '.';
    thousandsSep = ',';
  }

  var roundedNumber = Math.round( Math.abs( number ) * ('1e' + decimals) ) + '';
  // add zeros to decimalString if number of decimals indicates it
  roundedNumber = (1 > number && -1 < number && roundedNumber.length <= decimals)
          ? Array(decimals - roundedNumber.length + 1).join("0") + roundedNumber
          : roundedNumber;
  var numbersString = decimals ? roundedNumber.slice(0, decimals * -1) : roundedNumber.slice(0);
  var checknull = parseInt(numbersString) || 0;

  // check if the value is less than one to prepend a 0
  numbersString = (checknull == 0) ? "0": numbersString;
  var decimalsString = decimals ? roundedNumber.slice(decimals * -1) : '';

  var formattedNumber = "";
  while(numbersString.length > 3){
    formattedNumber += thousandsSep + numbersString.slice(-3)
    numbersString = numbersString.slice(0,-3);
  }

  return (number < 0 ? '-' : '') + numbersString + formattedNumber + (decimalsString ? (decPoint + decimalsString) : '');
}


function printDate() {
    var temp = new Date();
    var dateStr = padStr(temp.getFullYear()) +
                  padStr(1 + temp.getMonth()) +
                  padStr(temp.getDate()) +
                  padStr(temp.getHours())+
                  padStr(temp.getMinutes());
    //debug (dateStr );
    document.getElementById('nomefile').value='file_'+dateStr+'.xml';
    link = document.getElementById('downloadlink').download='file_'+dateStr+'.xml';
}

function padStr(i) {
    return (i < 10) ? "0" + i : "" + i;
}

function datafile() {
    var temp = new Date();
    var dateStr = padStr(temp.getFullYear()) +
                  padStr(1 + temp.getMonth()) +
                  padStr(temp.getDate()) +
                  padStr(temp.getHours())+
                  padStr(temp.getMinutes());
    //debug (dateStr );
    return ( dateStr );
}