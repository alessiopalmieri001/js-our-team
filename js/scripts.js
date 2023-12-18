const teams = [{

    name: "Wayne Barnett",
    role: "Founder & CEO",
    photo: "wayne-barnett-founder-ceo.jpg"
}, 

{
    name: "Angela Caroll",
    role: "Chief Editor",
    photo: "angela-caroll-chief-editor.jpg"
},

{
    name:"Walter Gordon",
    role: "Office Manager",
    photo: "walter-gordon-office-manager.jpg"
},

{
    name : "Angela Lopez",
    role: "Social Media Manager",
    photo: "angela-lopez-social-media-manager.jpg"
},

{
    name: "Scott Estrada",
    role: "Developer",
    photo: "scott-estrada-developer.jpg"
},

{
    name: "Barbara Ramos",
    role: "Graphic Designer",
    photo: "barbara-ramos-graphic-designer.jpg"
}]; 

console.log(teams);


const pippo = document.getElementById('container');
console.log(pippo)

drawTeam();

function drawTeam(){
// resetto il teamContainer
    pippo.innerHTML = '';

    teams.forEach( (teames) => teamcontainermember(teames) );

}

function teamcontainermember(teames){
// 1    leggo il contentuto del container
let content = pippo.innerHTML;

// 2    prendo le informazioni del teams nell'array 
const nome = teames.name;
const ruolo = teames.role;
const immagine = teames.photo;


// 3    genero l'ouput HTML con il template 
content += `
        <div class="team-card">
        <div class="card-image">
            <img
            src="img/${immagine}"
            alt="immagine"
            />
        </div>
        <div class="card-text">
            <h3>${nome}</h3>
            <p>${ruolo}</p>
        </div>
        </div>
        `;
    
// 4    lo aggiungo all'HTML 
container.innerHTML = content;
}