
const landingPosters = ["assets/img/onepiece-landing.png", "assets/img/kimetsu-landing.png", 
    "assets/img/academia-landing.png", "assets/img/dandadan-landing.png", "assets/img/jujutsu-landing.png"]

const landingDetails = document.getElementById("poster-wrapper");

const lpTitle = ["One Piece", "Kimetsu No Yaiba", "My Hero Academia", "Dandadan", "Jujutsu Kaisen"];

const lpGenre = ["Shonen | Action | Adventure | Comedy", "Shonen | Action | Adventure | Thriller", 
    "Shonen | Action | Comedy | Drama", "Shonen | Action | Comedy | Thriller | Occult | Mystery", 
"Shonen | Action | Adventure | Supernatural"];

const lpAbout = [
    "Monkey D. Luffy sets off on an adventure with his pirate crew in hopes of finding the greatest treasure ever, known as the One Piece.",
    "A family is attacked by demons and only two members survive - Tanjiro and his sister Nezuko, who is turning into a demon slowly. Tanjiro sets out to become a demon slayer to avenge his family and cure his sister.",
    "A superhero-admiring boy enrolls in a prestigious hero academy and learns what it really means to be a hero, after the strongest superhero grants him his own powers.",
    "When Momo and Okarun's beliefs clash, they're thrown into a world of ghosts, aliens and awakened powers.",
    "A boy swallows a cursed talisman - the finger of a demon - and becomes cursed himself. He enters a shaman's school to be able to locate the demon's other body parts and thus exorcise himself."
]

let index = 0;

function swapImage() {
    const landingImg = document.getElementById("landing-img");
    const landingTitle = document.getElementById("poster-title");
    const landingGenre = document.getElementById("poster-genre");
    const landingAbout = document.getElementById("poster-about");

    landingImg.src = landingPosters[index];
    landingTitle.textContent = lpTitle[index];
    landingGenre.textContent = lpGenre[index];
    landingAbout.textContent = lpAbout[index];

    index = (index + 1) % landingPosters.length;
    index = (index + 1) % lpTitle.length;
    index = (index + 1) % lpGenre.length;
    index = (index + 1) % lpAbout.length;
}

setInterval(swapImage, 6000);

swapImage();

const posters = ["assets/img/one-piece-poster.jpg", "assets/img/kimetsu-poster.jpg", 
    "assets/img/academia-poster.jpg", "assets/img/dandadan-poster.jpg", "assets/img/jujutsu-poster.jpg"];

const postersTitle = ["One Piece", "Kimetsu No Yaiba", "My Hero Academia", "Dandadan", "Jujutsu Kaisen"];

const posterTranslate = ["Subbed", "Subbed | Dubbed", "Subbed | Dubbed", "Subbed | Dubbed", "Subbed"];

const posterField = document.getElementById("landing-category");

function renderImages(){
    posters.forEach((src, index) => {
        const poster = document.createElement("span");
        poster.setAttribute("id", "anime-poster");

        const image = document.createElement("img");
        image.src = src;
        image.setAttribute("id", "anime-img")
        poster.appendChild(image);

        const animeTitle = document.createElement("h4");
        animeTitle.textContent = postersTitle[index];
        animeTitle.setAttribute("id", "anime-title");
        poster.appendChild(animeTitle);

        posterField.appendChild(poster);

        const animeTranslate = document.createElement("h6");
        animeTranslate.textContent = posterTranslate[index];
        animeTranslate.setAttribute("id", "anime-translate");
        poster.appendChild(animeTranslate);
    });
}

renderImages();

