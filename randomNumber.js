function randomNumber(no,max){
  
  //maxNum = Number.MAX_SAFE_INTEGER;
  function seedFixer(digits,max){
    maxNum = 10000000000;
    for(var i = maxNum;i>max; i = i - 3){
      if(i<max){
        return i;
      }
      if((i-digits)<max){
        return i;
      }
    }
  }

  function nextRand(digits,seed) {
    var n = (seed*seed).toString();
    while(n.length < digits*2){
      n = "0" + n;
    }
    var start = digits/2,
        end = start + digits;
    start = ~~start;
    seed = parseInt(n.substring(start,end));
    return seed;
  }

  // no number case  
  if(no == max){
    //console.log(result.toFixed(10));
    const digits = 10,
          seed = 8670472567;
    result = nextRand(digits,seed);    
    console.log(result);
  }

  //single no case
  if(no && !max){
    //console.log(5);
    const digits = no*2;
    var maxNumBer = 10 ;
    if(no<=3){
      for(var i = 0; (i+3) <= digits; i++){
        maxNumBer = maxNumBer*10;   
      } 
    }
    if(no>3){
      for(var i = 0; (i+3) < digits; i++){
        maxNumBer = maxNumBer*10;  
      }
    }
    var seed = seedFixer(digits,maxNumBer);
    //console.log(maxNumBer);
    result = nextRand(digits,seed);
    console.log(result);
  }

  //double no case
  if(no && max){
    //console.log(max);
    const string = max.toString();
    const digits = string.length;

    const seed = seedFixer(digits,max);

    var cont = nextRand(digits,seed);
    while(true){
      if(cont<max){
        return console.log(cont);
      }
      else{
        cont = nextRand(digits,cont);
      }
    }
  }

}


randomNumber();
randomNumber(1,100000);
randomNumber(5);
