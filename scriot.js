const toggler = document.querySelector("#navtoggler");
const navli = document.querySelector("nav .navlists");
const headerselect = document.querySelector("header");
const howitworks = document.querySelector(".howitworks");
const howitworksimage = document.querySelector("#howitworksimg");
const navbar = document.querySelector("nav");
const navclosebtn=document.querySelector("#navcloser")

window.addEventListener("scroll", () => {
  let scrollheight = window.pageYOffset;
  let headerheight = headerselect.getBoundingClientRect().height;
  let hiw = howitworks.getBoundingClientRect().height;
  if (scrollheight > headerheight) {
    navbar.classList.add("navtransparent");
  } else {
    navbar.classList.remove("navtransparent");
  }
  if (scrollheight>= hiw) {
         howitworksimage.classList.add('addanim');
         console.log(hiw);
  }
  console.log(scrollheight, headerheight);
});

toggler.addEventListener("click", function () {
  navli.classList.toggle("respnav");
  toggler.classList.add('dispnone');
});

navcloser.addEventListener("click", function () {
  navli.classList.toggle("respnav");
  // navcloser.classList.toggle('dispnone');
});

const headertext='';
const headerelem=document.querySelector("#headertexthtml");
let i=0;

function typing(){
if(i<headertext.length){
  headerelem.innerHTML+=headertext.charAt(i);
  i++;
}
setTimeout(typing,100);
}
typing();


$(function(){
  $("a").creep({
    speed:400,
    offset:-100
  });
});