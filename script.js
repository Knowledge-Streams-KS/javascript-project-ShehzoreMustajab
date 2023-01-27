
var b = document.getElementById("mybtn");
console.log(b);
b.addEventListener("click", getData);

async function getData(){
    let m = document.getElementById("moviename").value;
     m.innerHTML='';

    let y=document.getElementById("year").value;

    const x = await fetch(`http://www.omdbapi.com/?s=${m}&apikey=8eddb504`);
    const data = await x.json(); 
    let SearchData= await data['Search'];

   
    console.log(SearchData);

   


    if(y){
        SearchData= SearchData.filter((d) => y <= d['Year']);
    }

    SearchData.forEach((element) => {
        m.insertAdjacentHTML(
            'afterbegin',
            `<div class="main">
                <h1>Respone Card</h1>
                <ul class="cards">
             <li class="cards_item">
            <div class="card">
                <div class="card image"><img src="${element['Poster']}"></div>
                <div class ="card_content">
                    <p class="card_text">
                        ${element['Year']}
                    </p>
                </div>
            </div>

        </li>
        </ul>
        </div>`
            )
        
    });
}