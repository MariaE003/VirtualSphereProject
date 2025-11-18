let btnAddWorker = document.querySelector('.btnAddWorker');
let closeModal = document.querySelector('.closeModal');
let formAdd = document.querySelector('.formAdd');
let formAddContainer = document.querySelector('.formAddContainer');
let AddExperienceBtn = document.querySelector('.AddExperienceBtn');

//pour voir images
let imgVeiw=document.querySelector('.imgVeiw')
let urlImag=document.querySelector('.urlImag')
let textNoImage=document.querySelector('.textNoImage')
// console.log(btnDeleteExp);

let idExperience = 0;




//ouvrir fermer le modale d'jout
btnAddWorker.addEventListener('click', () => {
    formAddContainer.style.cssText = "display:flex;";
});
closeModal.addEventListener("click", () => {
    formAddContainer.style.cssText = "display:none;"
})

//ajouter des experience
AddExperienceBtn.addEventListener('click', () => {
    AddExperience();


})

//
formAdd.addEventListener('submit', (e) => {
    e.preventDefault();
})

//supprimer une experience
formAdd.addEventListener('click', (e) => {
    if (e.target.classList.contains('btnDeleteExp')) {
        let parent = e.target.closest('.experienceDiv');
        if (parent) {
            parent.remove();

        }
    }

})

//voir limage de utilisateur
urlImag.addEventListener('input',()=>{
    imgVeiw.src=urlImag.value;
    imgVeiw.style.display="block";
    textNoImage.innerText='';
})


// ajouter des experience
function AddExperience() {

    let newDiv = document.createElement('div');
    //ajouter un class et style au div
    newDiv.setAttribute('class', 'relative bg-[#9c9999] flex flex-col gap-y-3 py-5 rounded-[5px]')
    newDiv.classList.add('experienceDiv');
    // ajouter les champs d'experience 
    newDiv.innerHTML = `
                <div class="divDeleteExp">
                     <img src="images/trash-can-solid-full (1).svg" class="btnDeleteExp absolute w-[24px] top-[2px] left-[26rem] cursor-pointer " data-id="${idExperience}"/>
                 </div>
                <div class="DivJobTitleAndCompany flex justify-evenly items-center">
                    <input type="text" placeholder="JobTitle"
                        class="jobTitle ps-2 h-10 rounded-[5px]  bg-[#4e474729] shadow-[0_0_60px_10px_rgba(255,255,255,0.25)] w-[13rem]  ">
                    <input type="text" placeholder="CompanyName"
                        class="CompanyName ps-2 h-10 rounded-[5px]  bg-[#4e474729] shadow-[0_0_60px_10px_rgba(255,255,255,0.25)] w-[13rem]  ">
                </div>
                <div class="DivdateDebutFin flex justify-evenly items-center">
                    <div class="DivdateDebut w-[13rem] ">
                        <label for="dateDebut" class="dateDebutLabel">start date :</label><br>
                        <input type="date" id="dateDebut"
                            class="dateDebut ps-2 h-10 rounded-[5px]  bg-[#4e474729] shadow-[0_0_60px_10px_rgba(255,255,255,0.25)] w-[100%] ">
                    </div>
                    <div class="w-[13rem] DivdateFin">
                        <label for="dateFin" class="dateFinLabel">start date :</label><br>
                        <input type="date" id="dateFin"
                            class="dateFin ps-2 h-10  rounded-[5px]  bg-[#4e474729] shadow-[0_0_60px_10px_rgba(255,255,255,0.25)] w-[100%]">
                    </div>
                </div>
                <div class="divMissionsDescription flex justify-evenly items-center">
                    <input type="text" placeholder="Missions"
                        class="Missions ps-2 h-10 rounded-[5px]  bg-[#4e474729] shadow-[0_0_60px_10px_rgba(255,255,255,0.25)] w-[13rem]  ">
                    <textarea placeholder="Description"
                        class="Description ps-2 h-10 rounded-[5px]  bg-[#4e474729] shadow-[0_0_60px_10px_rgba(255,255,255,0.25)] w-[13rem]  "></textarea>
                </div>
    `
    // console.log(idExperience);

    formAdd.append(newDiv);
}

function AddImg() {
    
}