const options = {
	method: 'GET',
	headers: {
        
        Authorization: "Bearer 563492ad6f91700001000001cc0bc86c9beb48cb979e061e61f4efb8"
	}
};
const loadbutton=document.querySelector('#loadbutton')
const container1=document.querySelector('#rowcard')
fetch('https://api.pexels.com/v1/search?query=dior', options)
.then((response)=>response.json())
.then((data)=>{
    let photos=data.photos
    console.log(photos)
    container.innerHTML = "";
    for(let i=0; i<photos.length;i++){
        let arrofPhoto=photos[i]
        console.log(arrofPhoto)
        loadbutton.addEventListener('click',()=>{
            console.log(arrofPhoto)
            container1.innerHTML += `<div class="col-md-4 mb-3">
              <div class="card mb-4 shadow-sm h-100">
                <img class="card-img-top" src="${arrofPhoto.src.medium}" alt="" >
                <div class="card-body">
                  <p class="card-text">
                  </p>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary" onclick="hideCard(event)"
                      >
                        Hide
                      </button>
                      <p><p>
                    </div>
                    <small class="text-muted">ID: ${arrofPhoto.id}</small>
                  </div>
                </div>
              </div>
            </div>`;
        })
    }
}).catch(err => console.error(err));

const secondbutton=document.querySelector('#secondbutton')
const container=document.querySelector('#rowcard')
fetch('https://api.pexels.com/v1/search?query=car', options)
.then((response)=>response.json())
.then((data)=>{
    console.log(data)
    container.innerHTML = "";
    let photos=data.photos
    for(let i=0; i<photos.length;i++){
        let arrofPhoto=photos[i]
        console.log(arrofPhoto)
        secondbutton.addEventListener('click',()=>{
            console.log(arrofPhoto)
            container.innerHTML += `<div class="col-md-4 mb-3">
              <div class="card mb-4 shadow-sm h-100">
                <img class="card-img-top" src="${arrofPhoto.src.medium}" alt="" >
                <div class="card-body">
                  <p class="card-text">
                  </p>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary" onclick="hideCard(event)"
                      >
                        Hide
                      </button>
                      <p><p>
                    </div>
                    <small class="text-muted">ID: ${arrofPhoto.id}</small>
                  </div>
                </div>
              </div>
            </div>`;
        })
    }
}).catch(err => console.error(err));
let hideCard = (event) => {
    let card =
      event.target.parentElement.parentElement.parentElement.parentElement
        .parentElement;
    card.classList.add("d-none");
  };
