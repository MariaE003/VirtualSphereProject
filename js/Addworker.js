let btnAddWorker = document.querySelector('.btnAddWorker');
let closeModals = document.querySelectorAll('.closeModal');
let formAdd = document.querySelector('.formAdd');
let formAddContainer = document.querySelector('.formAddContainer');
let AddExperienceBtn = document.querySelector('.AddExperienceBtn');
let experienceDiv = document.querySelector('.experience')
//side
let workernoUnsignedSide = document.querySelector('.workernoUnsignedSide');
let listWorkersUnsigned = document.querySelector('.listWorkers');
//les champs
let inputName = document.querySelector('.name');
let inputEmail = document.querySelector('.email');
let inputTelephone = document.querySelector('.telephone');
let inputUrlImag = document.querySelector('.urlImag');


//select roles 
let selectRole = document.querySelector(".role");
//pour voir images
let imgVeiw = document.querySelector('.imgVeiw')
let urlImag = document.querySelector('.urlImag')
let textNoImage = document.querySelector('.textNoImage')
// console.log(btnDeleteExp);

//inputs
let AllInputs = Array.from(document.querySelectorAll('input,textarea,select'));
// console.log(AllInputs);




//modal desn worker disponible et worker 
let availableworkersbg = document.querySelector('.availableworkersbg')
let availableworkersList = document.querySelector('.availableworkersList')

let idExperience = 0;

//tableau des worker
let worker = JSON.parse(localStorage.getItem('worker')) || [];
//tableau des experiences disponible

//


//ouvrir fermer le modale d'jout
btnAddWorker.addEventListener('click', () => {
    formAddContainer.style.cssText = "display:flex;";
});





//fermer les button close
document.addEventListener("click", (e) => {
    if (e.target.closest('.closeModal')) {
        formAddContainer.style.display = "none";
        availableworkersbg.style.display = "none";
        modalDetailWorkerBg.style.display = "none";
    }
});

let inputsExperience = [];

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

//voir l'image de utilisateur
urlImag.addEventListener('input', () => {
    imgVeiw.src = urlImag.value;
    imgVeiw.style.display = "block";
    textNoImage.innerText = '';
});

//l'evenement sur les button +
// console.log(divMain);

let btnAddToRooms = document.querySelectorAll(".btnAddToRooms");
btnAddToRooms.forEach(btn => {
    btn.addEventListener('click', () => {
        let usWorker = worker.filter(ele => ele.statusWorker === 'unsigned');
        if (btn.classList.contains('BtnAddconferenceRom')) {
            filterSelonRole(usWorker, "salle de conference", 1);
        }
        if (btn.classList.contains('BtnAddServerRom')) {
            filterSelonRole(usWorker, "salle server", 2)
        } if (btn.classList.contains('BtnAddSecuriteeRom')) {
            filterSelonRole(usWorker, "salle de securite", 3)
        } if (btn.classList.contains('BtnAddreseptionRom')) {
            filterSelonRole(usWorker, "sallereseption", 4)
        } if (btn.classList.contains('BtnAddPersonelRom')) {
            filterSelonRole(usWorker, "salle de personel", 5)
        } if (btn.classList.contains('BtnAddArchiveRom')) {
            filterSelonRole(usWorker, "salle de archive", 6);
        }
    })
});


function filterSelonRole(usworker, salle, numberBox) {
    availableworkersList.innerHTML = '';
    let workerChoisi = [];
    if (salle === "salle de conference") {
        usworker.forEach(w => {
            workerChoisi.push(w);
        });
    }
    if (salle === "salle de personel") {
        usworker.forEach(w => {
            workerChoisi.push(w);
        });
    }
    if (salle === "salle server") {
        usworker.forEach(w => {
            if (w.role === 'Nettoyage') {
                workerChoisi.push(w);
            }
            if (w.role === 'Techniciens IT') {
                workerChoisi.push(w);
            }
            if (w.role === 'Manager') {
                workerChoisi.push(w);
            }
        })
    }
    if (salle === "salle de securite") {
        usworker.forEach(w => {
            if (w.role === 'Nettoyage') {
                workerChoisi.push(w);
            }
            if (w.role === 'Agents De Securite') {
                workerChoisi.push(w);
            }
            if (w.role === 'Manager') {
                workerChoisi.push(w);
            }
        })
    }

    if (salle === "sallereseption") {
        usworker.forEach(w => {
            if (w.role === 'Nettoyage') {
                workerChoisi.push(w);
            }
            if (w.role === 'Receptionnistes') {
                workerChoisi.push(w);
            }
            if (w.role === 'Manager') {
                workerChoisi.push(w);
            }
        })
    }

    if (salle === "salle de archive") {
        usworker.forEach(w => {
            if (w.role === 'Manager') {
                workerChoisi.push(w);
            }
        })
    }
    if (workerChoisi.length !== 0) {
        //titre
        let h1 = document.createElement('h2')
        h1.setAttribute('class', 'text-xl Inter')
        h1.innerHTML = 'available worker';
        availableworkersList.appendChild(h1);

        //le btn supprimer
        let imgremove = document.createElement('img')
        imgremove.src = 'images/remove-svgrepo-com.svg';
        imgremove.setAttribute('class', 'closeModal absolute w-[33px] left-[17.3rem] top-[3px] cursor-pointer')
        imgremove.innerHTML = 'available worker';
        availableworkersList.appendChild(imgremove);


        workerChoisi.forEach(ele => {
            // console.log(ele.role);
            let div = document.createElement('div');
            div.innerHTML = `
            <div class="workerToAdd flex justify-evenly items-center bg-[#919090] w-[15rem] h-[4rem] rounded-[5px] cursor-pointer"
                data-id="${ele.id}" data-role="${ele.role}" data-status="${ele.statusWorker}">
                <img src="${ele.image}"
                    class="w-13 rounded-4xl h-13" alt="none">
                <div>
                    <h1>${ele.name}</h1>
                    <h3>${ele.role}</h3>
                </div>
            </div>
        `

            availableworkersList.appendChild(div);

            // // 
            // let targetBox = document.querySelector(`.box${numberBox} .DivworkerInRoom`);
            // let currentCount = targetBox.querySelectorAll('.workerinBox').length;

            // if (!targetBox) {
            //     console.log('box introuvable');
            //     return;
            // }

            // if (currentCount >= 5) {
            //     if (!targetBox.dataset.alertShown) {
            //         alert("tu as 5 worker cest le max ! ");
            //         targetBox.dataset.alertShown = "true"; // stoper de répéter
            //         availableworkersbg.style.display="none";
            //     }
            //     return;
            // }
            //2
            // let targetBox = document.querySelector(`.box${numberBox} .DivworkerInRoom`);
            // if (!targetBox) {
            //     console.log('box introuvable');
            //     return;
            // }

            // let currentCount = targetBox.querySelectorAll('.workerinBox').length;

            // if (currentCount >= 5) {
            //     // Affiche l'alerte une seule fois
            //     if (!targetBox.dataset.alertShown) {
            //         alert("Tu as 5 workers, c'est le maximum !");
            //         targetBox.dataset.alertShown = "true"; // empêche alert répétée
            //     }

            //     // Fermer le modal pour que l'utilisateur ne puisse pas ajouter
            //     availableworkersbg.style.display = "none";

            //     return; // arrêter le code ici pour ne pas ajouter de worker
            // } else {
            //     // Reset de l'alert si on supprime un worker plus tard
            //     if (targetBox.dataset.alertShown) {
            //         delete targetBox.dataset.alertShown;
            //     }
            // }
            // 3
            let box = document.querySelector(`.box${numberBox} .DivworkerInRoom`);
            if (!box) {
                console.log('box introuvable');
                return;
            }

            let conteurW = box.querySelectorAll('.workerinBox').length;

            // Si la box est déjà pleine
            if (conteurW >= 5) {
                if (!box.dataset.alertShown) {
                    alert("Tu as 5 workers, c'est le maximum !");
                    box.dataset.alertShown = "true";
                }
                //
                return;
            } else {
                // Si la box n'est pas pleine, on peut afficher le modal et ajouter
                if (box.dataset.alertShown) {
                    delete box.dataset.alertShown;
                }
            }

            // 

            div.addEventListener('click', () => {
                // let targetBox = document.querySelector(`.box${numberBox} .DivworkerInRoom`);
                // if (!targetBox) return;

                // let currentCount = targetBox.querySelectorAll('.workerinBox').length;

                // if (currentCount >= 5) {
                //     alert("Tu as 5 workers, c'est le maximum !");
                //     return; // Stop ici, pas d'ajout
                // }
                // // console.log(div);

                const workerToMove = usworker.find(wor => {
                    if ((wor.id === ele.id) || (wor.role === ele.role)) {
                        let workerToRemoveFromSideBar = document.querySelector(`.listWorkers .worker[data-id="${ele.id}"]`);
                        if (workerToRemoveFromSideBar) {
                            workerToRemoveFromSideBar.remove();
                        } else {
                            console.log('element non trouve');
                        }

                        // wor.statusWorker="conference Rom";//attribute
                        let usworker1 = usworker.find(w => w.id === ele.id);
                        usworker1.statusWorker = `box${numberBox}`
                        // console.log(usworker);
                        usworker = usworker.filter(w => w.id === ele.id);
                        // console.log(usworker);

                        localStorage.setItem('worker', JSON.stringify(worker));
                        // addToLocalStorage()
                        // console.log(worker);
                        affichierWorkerInBox(numberBox, usworker1);
                        availableworkersbg.style.display = "none";

                    }
                });
                console.log(workerToMove);


            })
        });
    } else {
        let h1 = document.createElement('h4');
        h1.setAttribute('class', 'text-xl Inter')
        h1.innerHTML = 'No workers';
        availableworkersList.appendChild(h1);
    }
    // Afficher le modal si le nbr des worker inferieur de 5
    let divWor = document.querySelector(`.box${numberBox} .DivworkerInRoom`);
    if (divWor.querySelectorAll('.workerinBox').length < 5) {
        availableworkersbg.style.display = "flex";
    }
    // availableworkersbg.style.display = "flex";
}



function affichierWorkerInBox(numbox, worker) {

    // console.log(DivworkerInRoom);
    // console.log(worker);
    let div = document.createElement('div');

    let roleAb;
    if (worker.role === 'Receptionnistes') {
        roleAb = 'Recp'
    } if (worker.role === 'Techniciens IT') {
        roleAb = 'It'
    } if (worker.role === 'Agents De Securite') {
        roleAb = 'Ags'
    } if (worker.role === 'Manager') {
        roleAb = 'M'
    } if (worker.role === 'Nettoyage') {
        roleAb = 'Net'
    }
    if (worker.role === 'Autres rôles') {
        roleAb = 'Ar'
    }
    if (worker.statusWorker != 'unsigned') {
        let box = document.querySelector(`.box${numbox} .DivworkerInRoom`);
        // let lengthbox = box.querySelectorAll(`.workerinBox`).length;

        if (box.querySelector(`.workerinBox[data-id="${worker.id}"]`)) return;
        if (!worker) return;
        // console.log(box);
        let name = worker.name.slice(0, 6).trim();

        div.innerHTML = `
        <div class="workerinBox flex justify-evenly items-center bg-[#919090] w-[5rem] h-[34px] text-[10px] rounded-[5px] cursor-pointer"
        data-id="${worker.id}" data-role="${worker.role}" data-status="${worker.statusWorker}">
        <img src="${worker.image}" class="w-6 rounded-4xl h-6" alt="none">
        <div>
        <h1>${name}</h1>
                    <h3>${roleAb}</h3>
                </div>
                <img src="images/delete-1-svgrepo-com (1).svg" class="redirigerWorkerBtn w-4 rounded-4xl h-4 cursor-pointer" alt="">
                
                </div>
        `
        box.appendChild(div);
       
    }
}
//event de rediriger un worker vers sidebar / 'unsigned' 
let divMain = document.querySelector('.divMain');





//event de detail et rederige
divMain.addEventListener('click', (e) => {
    //le div pour affcicher le details

    let div = e.target.closest('.workerinBox');
    if (!div) return;

    //le click sur le button de redirige
    if (e.target.classList.contains('redirigerWorkerBtn')) {
        e.stopPropagation();//


        let idToRedirige = div.getAttribute('data-id');


        worker = worker.map(ele => {
            if (Number(ele.id) === Number(idToRedirige)) {
                ele.statusWorker = 'unsigned';
            }
            return ele;
        })
        localStorage.setItem('worker', JSON.stringify(worker));

        redirigeToUnsigned(div, worker);
        return
    }
    let workerId = div.getAttribute('data-id');
    // console.log(workerId);
    affichierDetails(workerId);

})
//evenet pour afichier le detail dun worker


let modalDetailWorkerBg = document.querySelector('.modalDetailWorkerBg');
// detail du qorker
function affichierDetails(workerId) {
    modalDetailWorkerBg.innerHTML = '';
    let workerD = worker.find(w => Number(w.id) === Number(workerId));
    // console.log(workerD);

    let sectionModalDetailWorker = document.createElement('section');
    sectionModalDetailWorker.setAttribute('class', 'modalDetailWorker rounded-[5px] w-99 h-115 fixed top-[31px] right-[33%]  bg-[black/50] flex justify-end items-start  overflow-y-auto'
    );
    sectionModalDetailWorker.innerHTML = `
        <div class="divdetail bg-[#aaaaaae6] w-full max-w-md h-full p-6 flex flex-col overflow-y-auto shadow-xl relative">
        <img src="images/remove-svgrepo-com.svg" 
            class="closeModal absolute w-8 right-4 top-4 cursor-pointer hover:scale-110 transition-transform" 
            alt="Close">

        <div class="flex flex-col items-center mb-6">
            <img src="${workerD.image}" 
                class="w-24 h-24 rounded-full border border-gray-300 object-cover mb-3">
            <h2 class="text-2xl font-semibold">${workerD.name}</h2>
            <h4 class="text-gray-600">${workerD.role}</h4>
        </div>

        <section class="mb-6 space-y-2 text-gray-700">
            <p><span class="font-semibold">Email:</span> ${workerD.email}</p>
            <p><span class="font-semibold">Phone:</span> ${workerD.phone}</p>
            <p><span class="font-semibold">Status:</span> ${workerD.statusWorker}</p>
        </section>

        <hr class="border-gray-300 mb-4">

        <div class="Exp flex flex-col gap-4">
            <h2 class="text-lg font-semibold text-center">Expériences</h2>

            ${workerD.experience.map(exp => `
                <div class="bg-[#c5c5c5a4] rounded-lg p-4 shadow flex flex-col gap-3">
                    <div class="flex justify-between text-gray-800 font-medium">
                        <span>${exp.jobTitle}</span>
                        <span>${exp.CompanyName}</span>
                    </div>
                    <div class="flex justify-between text-gray-500 text-sm">
                        <span>From: ${exp.dateDebut}</span>
                        <span>To: ${exp.dateFin}</span>
                    </div>
                    <div class="flex flex-col gap-2">
                        <div>
                            <h5 class="font-semibold">Mission:</h5>
                            <p class="text-gray-700">${exp.Missions}</p>
                        </div>
                        <div>
                            <h5 class="font-semibold">Description:</h5>
                            <p class="text-gray-700">${exp.Description}</p>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    </div>
`;

    modalDetailWorkerBg.appendChild(sectionModalDetailWorker);

    modalDetailWorkerBg.style.display = "flex";

}

function redirigeToUnsigned(divworker, worker) {

    divworker.remove();
    listWorkersUnsigned.appendChild(divworker);
    AfficherWorker(worker);
}


// ajouter des experience
function AddExperience() {

    idExperience++;
    let newDiv = document.createElement('div');
    //ajouter un class et style au div
    newDiv.setAttribute('class', 'relative bg-[#9c9999] flex flex-col gap-y-3 py-7 rounded-[5px] my-3')
    newDiv.classList.add('experienceDiv');
    newDiv.setAttribute('data-id', idExperience);
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
                        class="inputsExperience Description ps-2 h-10 rounded-[5px]  bg-[#4e474729] shadow-[0_0_60px_10px_rgba(255,255,255,0.25)] w-[13rem] "></textarea>
                </div>
    `
    experienceDiv.append(newDiv);
    // console.log(idExperience);

}

function validerForm(inputsExperience) {
    // console.log(inputsExperience);
    let regexName = /^[a-zA-Z\s]+$/;
    let regexEmail = /^[a-zA-Z0-9._-]+@gmail\.com$/;
    let regexPhone = /^(06|07)[0-9]{8}$/;
    let regexUrl = /^https:\/\/.+\.(jpg|png|gif)$/;

    let isvalid = true;
    // les input deja exist
    AllInputs.forEach(ele => {
        if (!ele.value.trim()) {
            ele.placeholder = "le champ est obligatoir"
            ele.style.border = "1px solid red";
            isvalid = false;
        } else {
            ele.placeholder = ""
            ele.style.border = "none";
            if (!regexName.test(inputName.value)) {
                inputName.style.border = "red solid 1px";
                inputName.value = "";
                inputName.placeholder = "le champ ne doit pas cotient des chiffre"
                isvalid = false;
            } else if (!regexEmail.test(inputEmail.value)) {
                inputEmail.style.border = "red solid 1px";
                inputEmail.value = "";
                inputEmail.placeholder = "email doit contient des @gmail.com"
                isvalid = false;
            } else if (!regexPhone.test(inputTelephone.value)) {
                inputTelephone.style.border = "red solid 1px";
                inputTelephone.value = "";
                inputTelephone.placeholder = "le numero de telephone doit cotient just 10 chifres "
                isvalid = false;
            } else if (!regexUrl.test(inputUrlImag.value)) {
                inputUrlImag.style.border = "red solid 1px";
                inputUrlImag.value = "";
                inputUrlImag.placeholder = "L'URL de l'image doit commencer par https:// et se terminer par .jpg"
                isvalid = false;
            } else {
                ele.placeholder = ""
                ele.style.border = "none";
            }
        }
    })




    inputsExperience.forEach(ele => {
        if (!ele.value.trim()) {
            ele.placeholder = "le champ est obligatoir"
            ele.style.border = "1px solid red";
            isvalid = false;
        } else {
            ele.placeholder = ""
            ele.style.border = "none";
            // isvalid=true;
        }

        // tous les date de debut et dates fin 
        let DatesDebut = document.querySelectorAll('input.dateDebut');
        // console.log(DatesDebut.length);
        let DatesFin = document.querySelectorAll('input.dateFin');
        let spanErrorDate = document.querySelectorAll('span.errorDate');
        // console.log(spanErrorDate);
        DatesDebut.forEach((dateDebut, i) => {
            let dateFin = DatesFin[i]
            let spanerror = spanErrorDate[i];
            if (dateDebut.value && dateFin.value) {
                if (dateDebut.value > dateFin.value) {
                    spanerror.style.cssText = "color:red;text-align:center;"
                    spanerror.innerText = "la date debut doit etre inferieur que la date de fin";
                    isvalid = false;
                } else {
                    spanerror.style.display = "none";
                    // isvalid=true;
                }
            }
        })
    })

    if (isvalid) {
        AddWorker();
        formAdd.reset();
        formAddContainer.style.cssText = "display:none;"
    }
}

//fetcher sur les roles dun worker  
fetcherRoles()
function fetcherRoles() {
    fetch('./json/role.json').then(resp => resp.json()).then(data => {
        data.roles.forEach(ele => {

            let option = document.createElement('option');
            option.classList.add('text-black');
            option.value = `${ele}`;
            option.textContent = `${ele}`;
            selectRole.appendChild(option);
        })
    })
}


function AddWorker() {
    let experianceTable = [];
    let AllExperience = Array.from(document.querySelectorAll('.experienceDiv'));
    AllExperience.forEach((exp, i) => {
        let jobTitle = exp.querySelector('input.jobTitle');
        let CompanyName = exp.querySelector('input.CompanyName');
        let dateDebut = exp.querySelector('input.dateDebut');
        let dateFin = exp.querySelector('input.dateFin');
        let Missions = exp.querySelector('input.Missions');
        let Description = exp.querySelector('textarea.Description');

        let experienceObject = {
            jobTitle: jobTitle.value,
            CompanyName: CompanyName.value,
            dateDebut: dateDebut.value,
            dateFin: dateFin.value,
            Missions: Missions.value,
            Description: Description.value,
        }
        experianceTable.push(experienceObject);

    })
    // console.log(experianceTable);
    const workerObject = {
        id: getIdWorker(),
        name: inputName.value, email: inputEmail.value, phone: inputTelephone.value, image: inputUrlImag.value, role: selectRole.value,
        // room :'',
        experience: experianceTable,
        statusWorker: 'unsigned'
    }

    worker.push(workerObject);
    // console.log(worker);

    addToLocalStorage()
    AfficherWorker(worker);

}
function getIdWorker() {
    if (worker.length === 0) {
        return 1;
    } else {
        return Math.max(...worker.map(ele => ele.id)) + 1;
    }
}

function addToLocalStorage() {
    localStorage.setItem('worker', JSON.stringify(worker));
}

AfficherWorker(worker);
function AfficherWorker(worker) {
    listWorkersUnsigned.innerHTML = '';
    worker.forEach(ele => {

        if (ele.statusWorker === "unsigned") {
            let divWorkerUnsigned = document.createElement('div');
            divWorkerUnsigned.classList.add("worker", "flex", "justify-evenly", "items-center", "bg-[#655e5e6f]", "w-[15rem]", "h-[4rem]", "rounded-[5px]");
            divWorkerUnsigned.setAttribute('data-id', `${ele.id}`);
            // divWorkerUnsigned.setAttribute('data-role', `${ele.role}`);
            divWorkerUnsigned.innerHTML = `
                    <img src="${ele.image}"
                        class="w-13 rounded-4xl h-13" alt="none">
                    <div>
                        <h1>${ele.name}</h1>
                        <h3>${ele.role}</h3>
                    </div>
                    <img src="images/delete-1-svgrepo-com (1).svg" class="btnDeleteWorker w-6 rounded-4xl h-6 cursor-pointer" alt="">
            `
            listWorkersUnsigned.appendChild(divWorkerUnsigned);
        }
        if (ele.statusWorker != 'unsigned') {
            let boxnum = ele.statusWorker.slice(3).trim();
            // console.log(boxnum);
            affichierWorkerInBox(boxnum, ele);

        }

    })
}
deleteWorker()
function deleteWorker() {
    listWorkersUnsigned.addEventListener('click', (e) => {
        if (e.target.classList.contains('btnDeleteWorker')) {
            let parent = e.target.closest('.worker');
            let confirmeDelete = confirm('vous voulez vraiment supprimer ce worker !?');

            if (confirmeDelete && parent) {
                console.log(parent);

                parent.remove();
                let idR = parent.getAttribute("data-id");
                console.log(idR);

                worker = worker.filter(ele => ele.id != idR);
                console.log(worker)
                addToLocalStorage(worker);
            }
        }

    })

}
// localStorage.clear();
