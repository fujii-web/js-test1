function fizzbuzz (n) {
  for(let i=0;i<n;i++){
    if(i%3==0 && i%5==0){
      console.log("fizzbuzz")
    else if(i%3==0)
      console.lof("fizz");
    else if(i%5==0)
      console.log("buzz");
  }
}

fizzbuzz(20)
