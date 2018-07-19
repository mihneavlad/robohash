(function(){

    document.body.querySelector('#button').addEventListener('click', event => {
      event.preventDefault();

      let data = [...document.querySelectorAll('.form-control-lg')].map(item => item.value);


      data.forEach(item => {
        document.getElementById("response").innerHTML = `<img src= "https://robohash.org/${data}.png?size=250x250">`;
      })


    });

})();
