let responsive = document.querySelector(".responsive");
let webDesign = document.querySelector(".webDesign");
let development = document.querySelector(".development");
let number = document.querySelector(".section-6-number");
let intro = document.querySelector(".intro")
let para = document.querySelector(".para")
let image = document.querySelector(".image")


responsive.addEventListener("click", () => {
  number.innerText = "01";
  intro.innerText ="When Creativity Matters in life"
  para.innerText = "Responsive design can help you solve a lot of problems for your website. It will make your site mobile-friendly, improve the way it looks on devices with both large and small screens, and increase the amount of time that visitors spend on your site."
  image.innerHTML = "<img src='img/responsive.png'></img>"
})

webDesign.addEventListener("click", () => {
  number.innerText = "02";
  intro.innerText = "Design is intelligence made visible"
  para.innerText = "Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development rather than software development."
  image.innerHTML = "<img src='img/webdesign.jpg'></img>"

})

development.addEventListener("click", () => {
  number.innerText = "03";
  intro.innerText ="Catering exactly to your needs"
  para.innerText = "Web development is the building and maintenance of websites; its the work that happens behind the scenes to make a website look great, work fast and perform well with a seamless user experience."
  image.innerHTML = "<img src='img/development.jpeg'></img>"

})


$(document).on('click','.menu h3', function(){
  $(this).addClass('active').siblings().removeClass('active');
});


// ***************************Nav bar show/hide code************

window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  
  if (currentScrollPos > 10) {
    document.getElementById("nav-scroll").classList.add("nav-scrolled");
  }
  else {
    document.getElementById("nav-scroll").classList.remove("nav-scrolled");

  }
}


$(document).on('change', '#checkbox', function() {
    if(this.checked) {
      $('.menu-items').css("right", "50%");
    }else{
      $('.menu-items').css("right", "-200rem");

    }
});