(function(){

    document.body.querySelector('#button').addEventListener('click', event => {
      event.preventDefault();

      let data = document.querySelector('#input').value;

      document.getElementById("response").innerHTML = `<img src= "https://robohash.org/${data}.png">`;

    });

})();
