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

document
  .getElementById("cta-img")
  .setAttribute("src", siteContent["cta"]["img-src"]);
document
  .getElementById("middle-img")
  .setAttribute("src", siteContent["main-content"]["middle-img-src"]);

let navArray = document.querySelectorAll("header nav a");
for (let i = 0; i < navArray.length; i++) {
  navArray[i].textContent = siteContent["nav"][`nav-item-${i + 1}`];
}

let node1 = document.createElement("a");
let node2 = document.createElement("a");
let text1 = document.createTextNode("Other 1");
let text2 = document.createTextNode("Other 2");
node1.appendChild(text1);
node2.appendChild(text2);

let nav = document.querySelector("header nav");
nav.appendChild(node1);
nav.prepend(node2);

document.querySelectorAll("header nav a").forEach((x) => {
  x.style.color = "green";
});

let ctaArray = document.querySelectorAll(".cta .cta-text *");
ctaArray[0].textContent = siteContent.cta.h1;
ctaArray[1].textContent = siteContent.cta.button;

let topCont = document.querySelectorAll(".top-content > *");
topCont[0].children[0].textContent = siteContent["main-content"]["features-h4"];
topCont[0].children[1].textContent =
  siteContent["main-content"]["features-content"];
topCont[1].children[0].textContent = siteContent["main-content"]["about-h4"];
topCont[1].children[1].textContent =
  siteContent["main-content"]["about-content"];

let botCont = document.querySelectorAll(".bottom-content > *");
botCont[0].children[0].textContent = siteContent["main-content"]["services-h4"];
botCont[0].children[1].textContent =
  siteContent["main-content"]["services-content"];
botCont[1].children[0].textContent = siteContent["main-content"]["product-h4"];
botCont[1].children[1].textContent =
  siteContent["main-content"]["product-content"];
botCont[2].children[0].textContent = siteContent["main-content"]["vision-h4"];
botCont[2].children[1].textContent =
  siteContent["main-content"]["vision-content"];

let contact = document.getElementsByClassName("contact");
contact[0].children[0].textContent = siteContent.contact["contact-h4"];
contact[0].children[1].textContent = siteContent.contact.address;
contact[0].children[2].textContent = siteContent.contact.phone;
contact[0].children[3].textContent = siteContent.contact.email;

document.querySelector("footer p").textContent =
  siteContent.footer.copyright;
