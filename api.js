fetch('http://ron-swanson-quotes.herokuapp.com/v2/quotes/5')
  .then(function(response) {
    return response.json();
  })
  .then(function(quotes) {
      let list = quotes.map(item => {
        var node = document.createElement("LI");
        var textNode = document.createTextNode(item);
        node.appendChild(textNode);
        return document.getElementById("Quote").appendChild(node);
      })
  });
