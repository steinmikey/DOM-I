const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

const links = document.querySelectorAll("nav a");
const linksArray = Array.from(links);

linksArray.forEach((link, index) => {
  link.textContent = siteContent["nav"][`nav-item-${index + 1}`];
});
// for (let i = 0; i < linksArray.length; i++) {
//   links[i].textContent = siteContent["nav"][`nav-item-${i + 1}`];
// }

const cta = document.querySelector(".cta");
cta.style.paddingLeft = "250px";

const ctaText = document.querySelector(".cta h1");
ctaText.innerHTML = siteContent.cta["h1"].split(" ").join(`<br/>`);

const ctaButton = document.querySelector(".cta button");
ctaButton.textContent = siteContent.cta["button"];

const ctaImage = document.getElementById("cta-img");
ctaImage.setAttribute("src", siteContent["cta"]["img-src"]);

// main
const mainContenth4 = document.querySelectorAll(".main-content .text-content h4");
mainContenth4[0].textContent = siteContent["main-content"]["features-h4"];
mainContenth4[1].textContent = siteContent["main-content"]["about-h4"];
mainContenth4[2].textContent = siteContent["main-content"]["services-h4"];
mainContenth4[3].textContent = siteContent["main-content"]["product-h4"];
mainContenth4[4].textContent = siteContent["main-content"]["vision-h4"];

const mainContentP = document.querySelectorAll(".main-content .text-content p");
mainContentP[0].textContent = siteContent["main-content"]["features-content"];
mainContentP[1].textContent = siteContent["main-content"]["about-content"];
mainContentP[2].textContent = siteContent["main-content"]["services-content"];
mainContentP[3].textContent = siteContent["main-content"]["product-content"];
mainContentP[4].textContent = siteContent["main-content"]["vision-content"];

// middle img
let middleImg = document.getElementById("middle-img");
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

// contact info
document.querySelector(".contact h4").textContent = siteContent.contact["contact-h4"];
document.querySelector(".contact p").innerHTML = siteContent.contact.address.split("Some").join("<br/>Some");
document.querySelector(".contact p:nth-of-type(2) ").textContent = siteContent.contact.phone;
document.querySelector(".contact p:nth-of-type(3)").textContent = siteContent.contact.email;

// footer
document.querySelector("footer p").textContent = siteContent.footer.copyright;
