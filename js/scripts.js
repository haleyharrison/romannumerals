
  var romanNumeral = function(number){
    var ones = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
    var tens = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
    var hundreds = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
    var thousands = ['', 'M', 'MM', 'MMM'];

    var inputNumber = number;
    var onesPosition = 0;
    var tensPosition = 0;
    var hundredsPosition = 0;
    var thousandsPosition = 0;



    while (number > 0)
       {
        if (number >= 1000)
         {number -= 1000;
         thousandsPosition++;
        }

        else if (number >= 100)
        {number -= 100;
        hundredsPosition++;
        }

        else if (number >= 10)
        {number -= 10;
        tensPosition++;
        }

        else
        {number -= 1;
        onesPosition++;
        }

      }

    return thousands[thousandsPosition] + hundreds[hundredsPosition]
    + tens[tensPosition] + ones[onesPosition];

  }

  $(document).ready(function() {
   $("form#roman-numeral").submit(function(event) {
     var number = parseInt($("input#number").val());
     var result = romanNumeral(number);
     $(".output").text(result);

     $("#result").show();
       event.preventDefault();


});
})
