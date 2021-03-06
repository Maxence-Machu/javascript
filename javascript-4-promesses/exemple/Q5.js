Promise = require('bluebird');

wait = (time) =>  {
  a = new Promise((resolve, reject) => {
    if (time > 3000) {
      reject('erreur');
    } else {
      setTimeout( () => resolve(--time) , time);
    }
  }); 
  return a;
}

 
wait(2000)
.then(
  (result) => {
    console.log("coucou", result);
    return wait(result)
  })
.then(() => console.log('cool') )
.catch((res) => console.log('Erreur', res))

