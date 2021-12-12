//product generation

let imagesArray = ["type2proteinIzmenjeno", "100whey", "proteinmass"];

let products = document.getElementById("inner-products");

let proteins = document.createElement("div");
proteins.setAttribute("class", "product-proteins");

for(image in imagesArray){
    let pictureDiv = document.createElement("div");
    pictureDiv.setAttribute("class", "picture");

    let pictureDivImg = document.createElement("img");
    pictureDivImg.src = `assets/images/${imagesArray[image]}.jpg`;
    pictureDivImg.alt = `${imagesArray[image]}`;

    pictureDiv.appendChild(pictureDivImg);
    proteins.appendChild(pictureDiv);
}

products.appendChild(proteins);

//staff generation

let pMember = ["Jack Hallow", "Maria Mill", "Bob Jackson"];
let members = document.getElementById("inner-staff");

let staff = document.createElement("div");
staff.setAttribute("class", "staff-bio");

for(let i = 0; i < 3; i++){
    let memberDiv = document.createElement("div");
    memberDiv.setAttribute("class", "member");

    let memberDivImg = document.createElement("img");
    memberDivImg.src = `assets/images/personal-trainer${i + 1}.jpg`;
    memberDivImg.alt = `personal-trainer${i + 1}`;

    let memberP = document.createElement("p");
    memberP.innerHTML = pMember[i];

    memberDiv.appendChild(memberDivImg);
    memberDiv.appendChild(memberP);

    staff.appendChild(memberDiv);
}

members.appendChild(staff);


var menuLinks = document.querySelector(".menu-links");
function openMenu(){
    
    menuLinks.classList.add("menu-links-open");
}

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



