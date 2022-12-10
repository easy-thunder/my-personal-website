// modal-1 modal-2 modal-3 === modal buttons
const modal1BTN = document.querySelector(".show-modal-1")
const modal2BTN = document.querySelector(".show-modal-2")
const modal3BTN = document.querySelector(".show-modal-3")
const modal4BTN = document.querySelector(".show-modal4")
const modal1 = document.querySelector(".modal-1")
const modal2 = document.querySelector(".modal-2")
const modal3 = document.querySelector(".modal-3")
const modal4 = document.querySelector(".modal-4")
const overlay = document.querySelector(".overlay")


modal1BTN.addEventListener(`click`, function(){ 
   // alert("I've been clicked")
    modal1.classList.remove("hidden");
    overlay.classList.remove('hidden');
});
modal2BTN.addEventListener(`click`, function(){ 
   // alert("I've been clicked")
    modal2.classList.remove("hidden");
    overlay.classList.remove('hidden');
});
modal3BTN.addEventListener(`click`, function(){ 
   // alert("I've been clicked")
    modal3.classList.remove("hidden");
    overlay.classList.remove('hidden');
});
modal4BTN.addEventListener(`click`, function(){ 
   // alert("I've been clicked")
    modal4.classList.remove("hidden");
    overlay.classList.remove('hidden');
});
