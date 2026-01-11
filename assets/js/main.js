//product generation

let imagesArray = [
  ["type2proteinIzmenjeno", "Power Protein", "Are you looking for a protein that will saturate you, completely replace your meal or become one additional high-protein snack during the day, without containing excess carbohydrates, fats and being tasty? Protein blends such as Protein Power contain several types of protein, which achieves the effect of prolonged action. In other words, you get a mix of proteins faster and continuous absorption, a wealth of amino acids of different structure and origin."], 
  ["100whey", "100% Whey Powder", "Whey protein is considered the 'king' of all bodybuilding proteins because it has the highest biological value. Whey protein has the best amino acid profile and a higher concentration of BCAAs than any other protein source. The amino acid composition of this preparation is based on the so-called. branched chain anabolic amino acids (BCAA, arginine, glutamine, taurine). A component of this preparation is the 10% microfraction of immunoglobulin, which improves the immune system, including increasing the synthesis of endogenous glutathione, which is the most powerful natural antioxidant in the human body."], 
  ["proteinmass", "MaX Gainer", "Super MaX Gainer is your most powerful ally in the fight for a bigger and stronger body, and at the same time speeds up and significantly reduces recovery time after intense and heavy training."]
];

let products = document.getElementById("product-proteins");

let ispisProizvoda = "";

for(let i = 0; i < imagesArray.length; i++){
  ispisProizvoda += `<div id="product${i + 1}" class="product">
        <div class="picture">
            <img src="assets/images/${imagesArray[i][0]}.jpg" alt="">
        </div>
        <h2>${imagesArray[i][1]}</h2>
        <div id="moreText${i + 1}" class="protein-text">
          <p>${imagesArray[i][2]}</p>
        </div>
      </div>`;
}

products.innerHTML = ispisProizvoda;

for(let i = 0; i < imagesArray.length; i++){
  $(`#product${i+1}`).click(() => {
    $(`#moreText${i+1}`).slideToggle("slow");
  });
}

//staff generation

let pMember = ["Jack Harlow", "Maria Mill", "Bob Jackson"];
let members = document.getElementById("staff-bio");

let writeStaff = "";

for(let i = 0; i < 3; i++){
    writeStaff += `<div class="member">
                  <img src="assets/images/personal-trainer${i + 1}.jpg" alt="personal-trainer${i + 1}"/>
                  <p>${pMember[i]}</p>
                  </div>`
}

members.innerHTML = writeStaff;

var menuLinks = document.querySelector(".menu-links");
function openMenu(){
    
    menuLinks.classList.add("menu-links-open");
}
$("#menuDugme").click(openMenu);
function closeMenu(){
    menuLinks.classList.remove("menu-links-open");
}

var menuLinksA = document.querySelectorAll('.menu-links ul li a');
for (let i = 0; i < menuLinksA.length; i++) {
  menuLinksA[i].addEventListener('click', () => {
    if (menuLinks.classList.contains('menu-links-open')) {
      menuLinks.classList.remove('menu-links-open');
    }
  })
}

//carousel
$('.staff-bio').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

//provera forme
let trainerArray = ["Choose your consultant" ,"Jack Hallow", "Maria Mill", "Bob Jackson"];
let selectTrainer = document.getElementById("trainer");

for(let i = 0; i < trainerArray.length; i++){
    var newOption = document.createElement("option");
    newOption.setAttribute("id",`${trainerArray[i]}`);
    newOption.setAttribute("value",`${trainerArray[i]}`);
    newOption.innerHTML = trainerArray[i];
    selectTrainer.appendChild(newOption);
}

let form = document.getElementById("form");

let nameSurname = document.getElementById("name");
let email = document.getElementById("email");
let age = document.getElementById("age");
let trainer= document.getElementById("trainer");
let gender = document.getElementsByName("gender");
console.log(gender);
let terms= document.getElementById("terms");

let nameBool = false;
let emailBool = false;
let ageBool = false;
let trainerBool = false;
let termsBool = false;
let genderBool = false;

let inputErrors = document.getElementsByClassName("error");

let regexName = /^[A-ZŠĐĆŽČ]{1}[a-zšđžćč]{2,15}\s[A-ZŠĐŽĆČ]{1}[a-zšđžćč]{2,15}$/;
let regexEmail = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;
let regexAge = /^[0-9]{2}$/;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkName();
    checkEmail();
    checkAge();
    checkTrainer();
    checkTerms();
    genderBool = checkGender();
    if (trainerBool && nameBool && emailBool && ageBool && termsBool){
        showToast();  
      // setTimeout(() => location.reload(), 3000);
        form.reset();
    }
});

function showToast() {
  const toast = document.getElementById("toast");
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}



form.addEventListener("reset", () => {
    for(let i = 0; i < inputErrors.length; i++){
      inputErrors[i].innerHTML = "";
    }
});

function checkGender(){
  for(let i = 0; i < gender.length; i++){
    if(gender[i].checked == true){
      inputErrors[4].innerHTML = "";
      return true;
    }
  }
  inputErrors[4].innerHTML = "You must choose a gender";
  return false;
}

function checkTerms(){
  if(document.getElementById("terms").checked == false){
    inputErrors[5].innerHTML = "You must agree with terms and conditions";
    termsBool = false;
  }
  else{
    inputErrors[5].innerHTML = "";
    termsBool = true;
  }
}

function checkName() {
    if (!regexName.test(nameSurname.value)) {
        inputErrors[0].innerHTML = "Your name is invalid, example: \"Name Surname\"";
        nameBool = false;
    } 
    else {
        inputErrors[0].innerHTML = "";
        nameBool = true;
    }
  };

function checkEmail() {
    if (!regexEmail.test(email.value)) {
        inputErrors[1].innerHTML = "Your email is invalid, example: \"something@domain.com\"";
        emailBool = false;
    } 
    else {
        inputErrors[1].innerHTML = "";
        emailBool = true;
    }
};

function checkAge() {
    if (!regexAge.test(age.value)) {
        inputErrors[2].innerHTML = "Please input a number of years,you must be 16 or older";
        ageBool = false;
    }
    else if(parseInt(age.value) < 16){
        inputErrors[2].innerHTML = "Sorry, you need to be older to get a trainer";
        ageBool = false;
    }
    else {
        inputErrors[2].innerHTML = "";
        ageBool = true;
    }
};
function checkTrainer() {
    if (trainer.value == "Choose your consultant") {
        inputErrors[3].innerHTML = "Please select a consultant.";
        trainerBool = false;
    }
    else {
        inputErrors[3].innerHTML = "";
        trainerBool = true;
    }
};

$(nameSurname).blur(checkName);
$(email).blur(checkEmail);
$(age).blur(checkAge);
$(trainer).blur(checkTrainer);


const links = [
  {
    url: "https://www.facebook.com/",
    icon: "fab fa-facebook",
    text: "Facebook"
  },
  {
    url: "https://www.instagram.com/",
    icon: "fab fa-instagram",
    text: "Instagram"
  },
  {
    url: "https://www.twitter.com/",
    icon: "fab fa-twitter",
    text: "Twitter"
  },
  {
    url: "https://www.linkedin.com/",
    icon: "fab fa-linkedin",
    text: "LinkedIn"
  },
  {
    url: "Dokumentacija_finalno.pdf",
    icon: "fas fa-file-pdf",
    text: "Documentation"
  }
];

let footer = document.getElementById("footer");

let ul = document.createElement("ul");
ul.className = "footer-links";

links.forEach(link => {
  let li = document.createElement("li");
  let a = document.createElement("a");

  a.href = link.url;
  a.target = "_blank";

  let icon = document.createElement("i");
  icon.className = link.icon;

  a.appendChild(icon);
  a.append(" " + link.text);

  li.appendChild(a);
  ul.appendChild(li);
});
footer.appendChild(ul);















