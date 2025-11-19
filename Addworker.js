let btnAddWorker = document.querySelector('.btnAddWorker');
let closeModal = document.querySelector('.closeModal');
let formAdd = document.querySelector('.formAdd');
let formAddContainer = document.querySelector('.formAddContainer');
let AddExperienceBtn = document.querySelector('.AddExperienceBtn');
let experienceDiv = document.querySelector('.experience')

//les champs
let inputName = document.querySelector('.name');
let inputEmail = document.querySelector('.email');
let inputTelephone = document.querySelector('.telephone');
let inputUrlImag = document.querySelector('.urlImag');


//select roles 
let selectRole=document.querySelector(".role");
//pour voir images
let imgVeiw = document.querySelector('.imgVeiw')
let urlImag = document.querySelector('.urlImag')
let textNoImage = document.querySelector('.textNoImage')
// console.log(btnDeleteExp);

//inputs
let AllInputs = Array.from(document.querySelectorAll('input,textarea,select'));
// console.log(AllInputs);


let idExperience = 0;

//tableau des worker
let worker=JSON.parse(localStorage.getItem('worker'))||[];


//ouvrir fermer le modale d'jout
btnAddWorker.addEventListener('click', () => {
    formAddContainer.style.cssText = "display:flex;";
});
closeModal.addEventListener("click", () => {
    formAddContainer.style.cssText = "display:none;"
})

let inputsExperience;

//ajouter des experience
AddExperienceBtn.addEventListener('click', () => {
    AddExperience();
    // console.log(idExperience);
    inputsExperience = Array.from(document.querySelectorAll('.experienceDiv input, .experienceDiv textarea'));
    // validerForm(inputsExperience);
    // console.log(inputsExperience);
})





//la validation du formulaire
formAdd.addEventListener('submit', (e) => {
    e.preventDefault();
    validerForm(inputsExperience);

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
urlImag.addEventListener('input', () => {
    imgVeiw.src = urlImag.value;
    imgVeiw.style.display = "block";
    textNoImage.innerText = '';
})


// ajouter des experience
function AddExperience() {

    let newDiv = document.createElement('div');
    //ajouter un class et style au div
    newDiv.setAttribute('class', 'relative bg-[#9c9999] flex flex-col gap-y-3 py-7 rounded-[5px] my-3')
    newDiv.classList.add('experienceDiv');
    // ajouter les champs d'experience 
    newDiv.innerHTML = `
                <div class="divDeleteExp">
                     <img src="images/trash-can-solid-full (1).svg" class="btnDeleteExp absolute w-[24px] top-[2px] left-[26rem] cursor-pointer " />
                 </div>
                <div class="DivJobTitleAndCompany flex justify-evenly items-center">
                    <input type="text" placeholder="JobTitle"
                        class="inputsExperience jobTitle ps-2 h-10 rounded-[5px]  bg-[#4e474729] shadow-[0_0_60px_10px_rgba(255,255,255,0.25)] w-[13rem]  ">
                    <input type="text" placeholder="CompanyName"
                        class="inputsExperience CompanyName ps-2 h-10 rounded-[5px]  bg-[#4e474729] shadow-[0_0_60px_10px_rgba(255,255,255,0.25)] w-[13rem]  ">
                </div>
                <div class="DivdateDebutFin flex justify-evenly items-center">
                    <div class="DivdateDebut w-[13rem] ">
                        <label for="dateDebut" class="dateDebutLabel">start date :</label><br>
                        <input type="date" id="dateDebut"
                            class="inputsExperience dateDebut ps-2 h-10 rounded-[5px]  bg-[#4e474729] shadow-[0_0_60px_10px_rgba(255,255,255,0.25)] w-[100%] ">
                    </div>
                    <div class="w-[13rem] DivdateFin">
                        <label for="dateFin" class="dateFinLabel">start date :</label><br>
                        <input type="date" id="dateFin"
                            class="inputsExperience dateFin ps-2 h-10  rounded-[5px]  bg-[#4e474729] shadow-[0_0_60px_10px_rgba(255,255,255,0.25)] w-[100%]">
                    </div>
                </div>
                <span class="errorDate"></span>
                <div class="divMissionsDescription flex justify-evenly items-center">
                    <input type="text" placeholder="Missions"
                        class="inputsExperience Missions ps-2 h-10 rounded-[5px]  bg-[#4e474729] shadow-[0_0_60px_10px_rgba(255,255,255,0.25)] w-[13rem]  ">
                    <textarea placeholder="Description"
                        class="inputsExperience Description ps-2 h-10 rounded-[5px]  bg-[#4e474729] shadow-[0_0_60px_10px_rgba(255,255,255,0.25)] w-[13rem]  "></textarea>
                </div>
    `
    experienceDiv.append(newDiv);
    // console.log(idExperience);
    idExperience++;

}

function validerForm(inputsExperience) {
    // console.log(inputsExperience);
    let regexName = /^[a-zA-Z\s]+$/;
    let regexEmail = /^[a-zA-Z0-9._-]+@gmail\.com$/;
    let regexPhone = /^(06|07)[0-9]{8}$/;
    let regexUrl = /^https:\/\/.+\.(jpg|png|gif)$/;

    // les input deja exist
    AllInputs.forEach(ele => {
        if (!ele.value.trim()) {
            ele.placeholder = "le champ est obligatoir"
            ele.style.border = "1px solid red";
        } else {
            ele.placeholder = ""
            ele.style.border = "none";
            if (!regexName.test(inputName.value)) {
                inputName.style.border = "red solid 1px";
                inputName.value = "";
                inputName.placeholder = "le champ ne doit pas cotient des chiffre"
            } else if (!regexEmail.test(inputEmail.value)) {
                inputEmail.style.border = "red solid 1px";
                inputEmail.value = "";
                inputEmail.placeholder = "email doit contient des @gmail.com"
            } else if (!regexPhone.test(inputTelephone.value)) {
                inputTelephone.style.border = "red solid 1px";
                inputTelephone.value = "";
                inputTelephone.placeholder = "le numero de telephone doit cotient just 10 chifres "
            } else if (!regexUrl.test(inputUrlImag.value)) {
                inputUrlImag.style.border = "red solid 1px";
                inputUrlImag.value = "";
                inputUrlImag.placeholder = "L'URL de l'image doit commencer par https:// et se terminer par .jpg"
            } else {
                ele.placeholder = ""
                ele.style.border = "none";
            }
        }
    })


    // les input des experiance
    // console.log(inputsExperience);
        
    inputsExperience.forEach(ele => {
        if (!ele.value.trim()) {
            ele.placeholder = "le champ est obligatoir"
            ele.style.border = "1px solid red";
        } else {
            ele.placeholder = ""
            ele.style.border = "none";
        }
    // last inchalah
    let DatesDebut=document.querySelectorAll('input.dateDebut');
    // console.log(DatesDebut.length);
    
    let DatesFin=document.querySelectorAll('input.dateFin');
    let spanErrorDate=document.querySelectorAll('span.errorDate');
    // console.log(spanErrorDate);
    DatesDebut.forEach((dateDebut,i)=>{
        let dateFin=DatesFin[i] 
        let spanerror=spanErrorDate[i]
        if(dateDebut.value && dateFin.value){
            if(dateDebut.value>dateFin.value){
                spanerror.style.cssText="color:red;text-align:center;"
                spanerror.innerText="la date debut doit etre inferieur que la date de fin";
            }else{
                spanerror.style.display="none";
                // console.log("hi");
                
            }
        }
    })
    })
}



