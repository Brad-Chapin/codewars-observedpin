function getPINs(observed) {

  // let minus1 = [2,3,5,6,8,9];
  // let plus3 = [1,2,3,4,5,6];
  // let minus3 = [4,5,6,7,8,9];
  let test = observed.split("");
  let options = [observed];

  for (let i = 0; i < test.length; i++){
    let obs = test.slice(0);
    if (plus1(i, obs)){
      options.push(obs);
      console.log(test);
    }
  }
  return options;
}

function plus1 (i, obs) {
  let p1 = [1,2,5,7,8];
  obs.forEach(function (e) {
    if (p1.indexOf(parseInt(e)) == -1){
      return false;
    } else {
      obs[i] = (parseInt(e) + 1).toString();
      return obs.join("");
    }
  });
}

console.log(getPINs("139")); //expect ["139", "239"]
