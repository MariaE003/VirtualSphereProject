let btnAddWorker = document.querySelector('.btnAddWorker');
let closeModal = document.querySelector('.closeModal');
let formAdd = document.querySelector('.formAdd');
let formAddContainer = document.querySelector('.formAddContainer');


console.log('hi');



btnAddWorker.addEventListener('click', () => {
    formAddContainer.style.cssText = "display:flex;";
});
closeModal.addEventListener("click",()=>{
    formAddContainer.style.cssText="display:none;"
})