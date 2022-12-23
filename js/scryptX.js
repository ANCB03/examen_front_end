function getData(){
    fetch('http://localhost:8080/users/crangarita/bills')
      .then((response) => {
        return response.json();
      })
      .then((data) => insertarHtmlDiv(data))
      .catch(function(error) {
        console.log(error);
      });
  }


  function insertarHtmlDiv(data){
    const div = document.getElementById('movimiento');
    const list = document.createDocumentFragment();
    const url = 'http://localhost:8080/administrador';
    let authors = data;

    authors.map(function(author) {
        const element = `<div class='row'>
        <div class='col'>
            <h2>${author.date_bill}</h2>
            <p>${author.observation}</p>
        </div>
        <h1>${author.value}</h1>
    </div>`;
      div.innerHTML += element;
    });
}