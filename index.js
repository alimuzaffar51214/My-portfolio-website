// // taggle icon navbar

// let menuIcon = document.querySelector('#menu-icon');
// let navbar = document.querySelector('.navbar');

// menuIcon.onclick = () => {
//     menuIcon.classList.toggle('bx-x');
//     navbar.classList.toggle('active');
// }



// // Scroll Section 

// let section = document.querySelectorAll('section');
// let navlinks = document.querySelectorAll('header nav a');

// window.onscroll = () =>{
//     section.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offset - 100;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');
        
//         if(top >= offset && top < offset + height) {

//             navlinks.forEach(links => {
//                 links.classList.remove('active');
//                 document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
//             });

//             // active section for Animation on scroll
            
//             sec.classList.add('show-animate');
//         }

//         // if want to use Animation that repeat on scroll use this 

//         else {
//             sec.classList.remove('show-animate');
//         }

//     });

// // Sticky header 

// let header = document.querySelector('header');

// header.classList.toggle('sticky' ,window.scrollY > 100);

// // remove toggle icon and navbar 


// menuIcon.classList.remove('bx-x');
// navbar.classList.remove('active');


//   animation footer on scroll 

//   let footer = document.querySelector('footer');
//   footer.classList.toggle('show animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
// }












// Toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
};

// Scroll Section
let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach((sec) => {
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            // Remove 'active' class from all links
            navlinks.forEach((link) => link.classList.remove("active"));

            // Add 'active' class to the correct link
            let activeLink = document.querySelector(`header nav a[href*="${id}"]`);
            if (activeLink) activeLink.classList.add("active");

            // Show animation for section
            sec.classList.add("show-animate");
        } else {
            // Remove animation when scrolling away
            sec.classList.remove("show-animate");
        }
    });

    // Sticky header
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 100);

    // Remove toggle icon and navbar when clicking a nav link
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");

 // animation footer on scroll 

   let footer = document.querySelector('footer');

   footer.classList.toggle('show animate', this.innerHeight + this.scrollY >= document.scrollingElement.
    scrollHeight);



 };













































