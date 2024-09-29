let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let header = document.querySelector(".header");
let closeIcon = document.querySelector("#close-icon");
// let sections =document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header nav a');



// window.onscroll = () =>{
//     sections.forEach(sec => {
//     let top = window.scrollY;
//     let offset = sec.offsetTop - 150;
//     let height = sec.offsetHeight;
//     let id = sec.getAttribute('id');



//     if(top >= offset && top < offset + height){
//         navLinks.forEach( links => {
//             links.classList.remove('active');
//             document.querySelector('header nav a [href*="' + id + '"]').classList.add('active');
//         })
//     }
//     })
// }


menuIcon.onclick = () =>{
   
 }

//  let changeIcon = (icon)=>{
//     icon.classList.toggle("fa-xmark");
//  }

menuIcon.addEventListener('click', function(){

    if(navbar.style.display === "none"){
        navbar.style.display = "block";
        // menuIcon.style.display = "none";
        
        // menuIcon.style.display = "none";
        // closeIcon.style.display = "block";
        // navbar.classList.toggle('active');

    }else{
        navbar.style.display = "none";
       


    // menuIcon.classList.toggle('bx-x');


    }


});

// let menuIcon = document.querySelector('#menu-icon');
// let navbar = document.querySelector('.navbar');
// let sections = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header nav a');

// window.onscroll = () => {
//     let top = window.scrollY;

//     sections.forEach(sec => {
//         let offset = sec.offsetTop - 150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if (top >= offset && top < offset + height) {
//             navLinks.forEach(link => {
//                 link.classList.remove('active');
//                 if (link.getAttribute('href').includes(id)) {
//                     link.classList.add('active');
//                 }
//             });
//         }
//     });
// };

// menuIcon.onclick = () => {
//     menuIcon.classList.toggle('bx-x');
//     navbar.classList.toggle('active');
// };
