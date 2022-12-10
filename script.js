// modal-1 modal-2 modal-3 === modal buttons
const modal0BTN = document.querySelector(".show-modal-0");
const modal1BTN = document.querySelector(".show-modal-1");
const modal2BTN = document.querySelector(".show-modal-2");
const modal3BTN = document.querySelector(".show-modal-3");
const modal0 = document.querySelector(".modal-0");
const modal1 = document.querySelector(".modal-1");
const modal2 = document.querySelector(".modal-2");
const modal3 = document.querySelector(".modal-3");
const overlay = document.querySelector(".overlay");
const closeModal0 = document.querySelector(".close-modal0");
const closeModal1 = document.querySelector(".close-modal1");
const closeModal2 = document.querySelector(".close-modal2");
const closeModal3 = document.querySelector(".close-modal3");

//select button

modal0BTN.addEventListener(`click`, function(){ 
   // alert("I've been clicked")
    modal0.classList.remove("hidden");
    overlay.classList.remove('hidden');
});
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
//close function button
const close0 = function(){
    modal0.classList.add("hidden");
    overlay.classList.add('hidden');
};
closeModal0.addEventListener("click", close0);


const close1 = function(){
    modal1.classList.add("hidden");
    overlay.classList.add('hidden');
};
closeModal1.addEventListener("click", close1);


const close2 = function(){
    modal2.classList.add("hidden");
    overlay.classList.add('hidden');
};
closeModal2.addEventListener("click", close2);


const close3 = function(){
    modal3.classList.add("hidden");
    overlay.classList.add('hidden');
};
closeModal3.addEventListener("click", close3);

