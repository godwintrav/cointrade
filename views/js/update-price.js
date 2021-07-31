var btcPrice = document.getElementById('btcPrice');
const interval = setInterval(function() {
    //fetch post request
  fetch('/api/price', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      if (data.errors) {
        console.log(data.errors);
      } else {
        console.log(data.price);
        btcPrice.innerHTML = data.price;
      }
    })
    .catch((err) => {
      console.log(err);
    });
  }, 15000);