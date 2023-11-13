const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const images = ["/img/pic1.jpg",
                "/img/pic2.jpg",
                "/img/pic3.jpg",
                "/img/pic4.jpg",
                "/img/pic5.jpg",]

const altText = {
    "image1": "A person's eye",
    "image2": "just rock",
    "image3": "some flowers",
    "image4": "old paintings",
    "image5": "either moth or butterfly"
}

/* Looping through images */
for (let i = 0; i < 5; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', images[i]);
    newImage.setAttribute('alt', altText['image' +(i+1)]);
    thumbBar.appendChild(newImage);
function displayImage() {
    displayedImage.setAttribute('src', images[i]);
    displayedImage.setAttribute('alt', altText['image' +(i+1)]);
}
        newImage.addEventListener("click", displayImage);
    }

/* Wiring up the Darken/Lighten button */
    btn.addEventListener("click", ()=> {
        if (btn.getAttribute("class") == "dark") {
            btn.setAttribute("class", "light");
            btn.textContent = "Lighten";
            overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";            
        }
        else if (btn.getAttribute("class") == "light") {
            btn.setAttribute("class", "dark");
            btn.textContent = "Darken";
            overlay.style.backgroundColor = "rgba(0, 0, 0, 0)";
            return
        }
        }
        
    )

