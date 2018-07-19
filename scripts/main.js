(function(){

    document.body.querySelector('#button').addEventListener('click', event => {
      event.preventDefault();


      let data = [...document.querySelectorAll('#input')].map(item => item.value);

      data.forEach(item => {
        document.getElementById("response").innerHTML = `<img src= "https://robohash.org/${data}.png?set=set2 ">`;
      })


    });

})();
