fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(json => {

    json.forEach((element) => {
     
      var starts = ``;
      var rate = parseInt(element.rating.rate)
      if(rate == 1){
        starts = `
          <span class="checked">1</span>
          <span class="">2</span>
          <span class="">3</span>
          <span class="">4</span>
          <span class="">5</span>
        `;
      }
      if(rate == 2){
        starts = `
          <span class="checked">1</span>
          <span class="checked">2</span>
          <span class="">3</span>
          <span class="">4</span>
          <span class="">5</span>
        `;
      }
      if(rate == 3){
        starts = `
          <span class="checked">1</span>
          <span class="checked">2</span>
          <span class="checked">3</span>
          <span class="">4</span>
          <span class="">5</span>
        `;
      }
      if(rate == 4){
        starts = `
          <span class="checked">1</span>
          <span class="checked">2</span>
          <span class="checked">3</span>
          <span class="checked">4</span>
          <span class="">5</span>
        `;
      }
      if(rate == 5){
        starts = `
          <span class="checked">1</span>
          <span class="checked">2</span>
          <span class="checked">3</span>
          <span class="checked">4</span>
          <span class="checked">5</span>
        `;
      }
      var card = `
      <div class="col-4">
        <div class="card" style="width: 18rem; height: 575px;  margin-bottom: 51px; margin-left: 200px;">
          <img src="${element.image}"  class="card-img-top" alt="..." style="height: 300px;">
          <div class="card-body">
              <h5 class="card-title">${element.title}</h5>
              <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#m${element.id}">
                read more
              </button>
              <h2> 
              ${starts} <br>
              ${ parseInt(element.rating.count)}
              <span style=" font-size: small;"> Person</span> 
              </h2>
              
              <a href="#" class"btn btn-primary">${element.price}</a>
          </div>
       </div>
      `;
      document.getElementById('parent').innerHTML = document.getElementById('parent').innerHTML + card;

      var modal = `
      <div class="modal fade" id="m${element.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-body">
            ${element.description}
          </div>
        </div>
      </div>
    </div>
    
     `;
      document.getElementById('top').innerHTML = document.getElementById('top').innerHTML + modal;


    
      
      
     
      

    });
  })

