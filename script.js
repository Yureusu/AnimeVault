
function renderHome(){
    const landingPosters = ["assets/img/onepiece-landing.png", "assets/img/kimetsu-landing.png", 
        "assets/img/academia-landing.png", "assets/img/dandadan-landing.png", "assets/img/jujutsu-landing.png"]
    
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
    
    setInterval(swapImage, 5000);
    
    swapImage();
    
    //redirect
    
    document.getElementById("watch-poster").addEventListener("click", () => {  
        index = (index + 1) % landingPosters.length; 
        if (landingPosters[index] == "assets/img/onepiece-landing.png"){
            renderOnePiece();
        }
        else if (landingPosters[index] == "assets/img/kimetsu-landing.png"){
            alert("Kimetsu No Yaiba");
        }
        else if (landingPosters[index] == "assets/img/academia-landing.png"){
            alert("My Hero Academia");
        }
        else if (landingPosters[index] == "assets/img/dandadan-landing.png"){
            alert("Dandadan");
        }
        else if (landingPosters[index] == "assets/img/jujutsu-landing.png"){
            alert("Jujutsu Kaisen");
        }
    });
}

renderHome();

//posters

const posterField = document.getElementById("landing-category");

const posters = ["assets/img/one-piece-poster.jpg", "assets/img/kimetsu-poster.jpg", 
    "assets/img/academia-poster.jpg", "assets/img/dandadan-poster.jpg", "assets/img/jujutsu-poster.jpg",
    "assets/img/dr-stone-poster.jpg", "assets/img/bleach-thousand-poster.jpg", "assets/img/re-zero-poster.jpg",
    "assets/img/solo-leveling-poster.jpg", "assets/img/frieren-poster.jpg", "assets/img/apothecary-diaries-poster.jpg",
    "assets/img/boruto-poster.jpg", "assets/img/dragon-ball-super-poster.jpg", "assets/img/hunter-hunter-poster.jpg",
    "assets/img/kenshin-poster.jpg"
];

const postersTitle = ["One Piece", "Kimetsu No Yaiba", "My Hero Academia", "Dandadan Season", "Jujutsu Kaisen",
    "Dr. Stone", "Bleach: Thousand-Year Blood War", "Re: Zero - Starting Life in Another World", " Solo Leveling",
    "Frieren: Beyond Journey's End", "The Apothecary Diaries", "Boruto: Naruto Next Generations", "Dragon Ball Super",
    "Hunter x Hunter", "Rurouni Kenshin: Kyoto Disturbance"
];

const posterTranslate = ["Subbed", "Subbed | Dubbed", "Subbed | Dubbed", "Subbed | Dubbed", "Subbed",
    "Subbed | Dubbed", "Subbed | Dubbed", "Subbed | Dubbed", "Subbed | Dubbed", "Subbed",
    "Subbed", "Subbed | Dubbed", "Subbed | Dubbed", "Subbed | Dubbed", "Subbed | Dubbed",
];

//adding clicks

//landing posters

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

        document.getElementById("anime-img").addEventListener("click", () => {
            if (src == "assets/img/one-piece-poster.jpg"){
                renderOnePiece();
            }
        });
    });
}

renderImages();

function renderRecommended(){
    posters.forEach((src, index) => {
        const recommendedField = document.getElementById("recommended-field");

        const poster = document.createElement("span");
        poster.setAttribute("id", "anime-poster");

        const image = document.createElement("img");
        image.src = src;
        image.setAttribute("id", "anime-img");
        poster.appendChild(image);

        const animeTitle = document.createElement("h4");
        animeTitle.textContent = postersTitle[index];
        animeTitle.setAttribute("id", "anime-title");
        poster.appendChild(animeTitle);

        const animeTranslate = document.createElement("h6");
        animeTranslate.textContent = posterTranslate[index];
        animeTranslate.setAttribute("id", "anime-translate");
        poster.appendChild(animeTranslate);

        recommendedField.appendChild(poster);
    });
}

//img listeners

function renderOnePiece(){
    document.getElementById("landing-poster").style.display = "none";
    document.getElementById("landing-category").style.display = "none";
    document.getElementById("one-piece-wrapper").style.display = "flex";

    watchOnePiece();

    posters.splice(0, 1);
    postersTitle.splice(0, 1);
    posterTranslate.splice(0, 1);
    renderRecommended();

    renderOnePieceEps();
    function renderOnePieceEps(){
        const epList = document.getElementById("episode-list");
        const epCount = 20;

        for (let i = 1; i <= epCount; i++){
            const epBox = document.createElement("div");
            const boxText = document.createElement("h6");
            epBox.setAttribute("id", "episode-box");
            boxText.textContent = "Ep. " + i;

            epBox.appendChild(boxText)
            epList.appendChild(epBox);
            epBox.addEventListener("click", () => {
                alert("You clicked Episode " + i);
                if(i == 1){
                    location.reload();
                }
            });
        }
    }

    posters.forEach((src, index) => {
        const onePieceRecommended = document.getElementById("one-piece-recommended");

        const poster = document.createElement("span");
        poster.setAttribute("id", "anime-poster");

        const image = document.createElement("img");
        image.src = src;
        image.setAttribute("id", "anime-img");
        poster.appendChild(image);

        const animeTitle = document.createElement("h4");
        animeTitle.textContent = postersTitle[index];
        animeTitle.setAttribute("id", "anime-title");
        poster.appendChild(animeTitle);

        const animeTranslate = document.createElement("h6");
        animeTranslate.textContent = posterTranslate[index];
        animeTranslate.setAttribute("id", "anime-translate");
        poster.appendChild(animeTranslate);

        onePieceRecommended.appendChild(poster);
    });
}

//watch one piece

function watchOnePiece(){
    document.getElementById("watch-one-piece").addEventListener("click", () => {
        document.getElementById("one-piece-info").style.display = "none";
        document.getElementById("one-piece-episodes").style.display = "flex";
        renderOnePieceEps();
        
        function renderOnePieceEps(){
            const epList = document.getElementById("player-episode-list");
            const epCount = 20;
    
            for (let i = 1; i <= epCount; i++){
                const epBox = document.createElement("div");
                const boxText = document.createElement("h6");
                epBox.setAttribute("id", "episode-box");
                boxText.textContent = "Ep. " + i;
                if(i == 1){
                    epBox.style.backgroundColor = "tomato";
                }
                epBox.appendChild(boxText)
                epList.appendChild(epBox);
                epBox.addEventListener("click", () => {
                    alert("You clicked Episode " + i);
                });
            }
        }
    });
}

//search

const searchBtn = document.getElementById("search-btn");
searchBtn.addEventListener("click", () => {
    searchResult();
});
searchBtn.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        searchResult();
    }
});

function searchResult(){
    document.getElementById("landing-poster").style.display = "none";
    document.getElementById("landing-category").style.display = "none";
    document.getElementById("one-piece-wrapper").style.display = "none";
    document.getElementById("search-result").style.display = "flex";

    const searchValue = document.getElementById("search-bar").value;

    const searchRecall = document.getElementById("withsearch-recall");

    const searchPoster = document.getElementById("search-poster");
    const searchAnimeName = document.getElementById("search-anime-name");
    const searchAnimeTrans = document.getElementById("search-anime-trans");

    const onePieceKey = ["one", "piece"]; const kimetsuKey = ["demon", "slayer", "kimetsu", "yaiba"]; const heroAcademiaKey = ["hero", "academia", "boku", "hero"];
    const dandadanKey = ["dandadan"]; const jujutsuKey = ["jujutsu", "kaisen"]; const drStoneKey = ["doctor", "stone"];
    const bleachKey = ["bleach"]; const reZeroKey = ["re", "zero"]; const soloLevelingKey = ["solo", "leveling"]; const frierenKey = ["frieren"];
    const apothecaryKey = ["apothecary", "diaries"]; const borutoKey = ["boruto"]; const dragonBallKey = ["dragon", "ball"];
    const hunterHunterKey = ["hunter"]; const samuraiXKey = ["samurai"];

    switch(true){
        case(onePieceKey.some(word => searchValue.includes(word))):      
            document.getElementById("with-result").style.display = "flex";
            document.getElementById("no-result").style.display = "none";
            searchRecall.textContent = "Search result for: " + searchValue;

            searchPoster.src = posters[0];
            searchAnimeName.textContent = postersTitle[0];
            searchAnimeTrans.textContent = posterTranslate[0];

            document.getElementById("search-poster").style.display = "block";

            document.getElementById("search-info").style.display = "flex";

            posters.splice(0, 1);
            postersTitle.splice(0, 1);
            posterTranslate.splice(0, 1);
            renderRecommended();

            document.getElementById("search-poster").addEventListener("click", () => {
                document.getElementById("search-result").style.display = "none";
                document.getElementById("with-result").style.display = "none";
                document.getElementById("search-info").style.display = "none";
                renderOnePiece();
            });
        break;
        case(kimetsuKey.some(word => searchValue.includes(word))):
            document.getElementById("with-result").style.display = "flex";
            document.getElementById("no-result").style.display = "none";
            searchRecall.textContent = "Search result for: " + searchValue;  

            searchPoster.src = posters[1];
            searchAnimeName.textContent = postersTitle[1];
            searchAnimeTrans.textContent = posterTranslate[1];

            document.getElementById("search-poster").style.display = "block";
            document.getElementById("search-info").style.display = "flex";

            posters.splice(1, 1);
            postersTitle.splice(1, 1);
            posterTranslate.splice(1, 1);
            renderRecommended();
        break;
        case(heroAcademiaKey.some(word => searchValue.includes(word))):
            document.getElementById("with-result").style.display = "flex";
            document.getElementById("no-result").style.display = "none";
            searchRecall.textContent = "Search result for: " + searchValue;  

            searchPoster.src = posters[2];
            searchAnimeName.textContent = postersTitle[2];
            searchAnimeTrans.textContent = posterTranslate[2];

            document.getElementById("search-poster").style.display = "block";
            document.getElementById("search-info").style.display = "flex";

            posters.splice(2, 1);
            postersTitle.splice(2, 1);
            posterTranslate.splice(2, 1);
            renderRecommended();
        break;
        case(dandadanKey.some(word => searchValue.includes(word))):
            document.getElementById("with-result").style.display = "flex";
            document.getElementById("no-result").style.display = "none";
            searchRecall.textContent = "Search result for: " + searchValue;  

            searchPoster.src = posters[3];
            searchAnimeName.textContent = postersTitle[3];
            searchAnimeTrans.textContent = posterTranslate[3];

            document.getElementById("search-poster").style.display = "block";
            document.getElementById("search-info").style.display = "flex";

            posters.splice(3, 1);
            postersTitle.splice(3, 1);
            posterTranslate.splice(3, 1);
            renderRecommended();
        break;
        case(jujutsuKey.some(word => searchValue.includes(word))):
            document.getElementById("with-result").style.display = "flex";
            document.getElementById("no-result").style.display = "none";
            searchRecall.textContent = "Search result for: " + searchValue;  

            searchPoster.src = posters[4];
            searchAnimeName.textContent = postersTitle[4];
            searchAnimeTrans.textContent = posterTranslate[4];

            document.getElementById("search-poster").style.display = "block";
            document.getElementById("search-info").style.display = "flex";

            posters.splice(4, 1);
            postersTitle.splice(4, 1);
            posterTranslate.splice(4, 1);
            renderRecommended();
        break;
        case(drStoneKey.some(word => searchValue.includes(word))):
            document.getElementById("with-result").style.display = "flex";
            document.getElementById("no-result").style.display = "none";
            searchRecall.textContent = "Search result for: " + searchValue;  

            searchPoster.src = posters[5];
            searchAnimeName.textContent = postersTitle[5];
            searchAnimeTrans.textContent = posterTranslate[5];

            document.getElementById("search-poster").style.display = "block";
            document.getElementById("search-info").style.display = "flex";

            posters.splice(5, 1);
            postersTitle.splice(5, 1);
            posterTranslate.splice(5, 1);
            renderRecommended();
        break;
        case(bleachKey.some(word => searchValue.includes(word))):
            document.getElementById("with-result").style.display = "flex";
            document.getElementById("no-result").style.display = "none";
            searchRecall.textContent = "Search result for: " + searchValue;  

            searchPoster.src = posters[6];
            searchAnimeName.textContent = postersTitle[6];
            searchAnimeTrans.textContent = posterTranslate[6];

            document.getElementById("search-poster").style.display = "block";
            document.getElementById("search-info").style.display = "flex";

            posters.splice(6, 1);
            postersTitle.splice(6, 1);
            posterTranslate.splice(6, 1);
            renderRecommended();
        break;
        case(reZeroKey.some(word => searchValue.includes(word))):
            document.getElementById("with-result").style.display = "flex";
            document.getElementById("no-result").style.display = "none";
            searchRecall.textContent = "Search result for: " + searchValue;  

            searchPoster.src = posters[7];
            searchAnimeName.textContent = postersTitle[7];
            searchAnimeTrans.textContent = posterTranslate[7];

            document.getElementById("search-poster").style.display = "block";
            document.getElementById("search-info").style.display = "flex";

            posters.splice(7, 1);
            postersTitle.splice(7, 1);
            posterTranslate.splice(7, 1);
            renderRecommended();
        break;
        case(soloLevelingKey.some(word => searchValue.includes(word))):
            document.getElementById("with-result").style.display = "flex";
            document.getElementById("no-result").style.display = "none";
            searchRecall.textContent = "Search result for: " + searchValue;  

            searchPoster.src = posters[8];
            searchAnimeName.textContent = postersTitle[8];
            searchAnimeTrans.textContent = posterTranslate[8];

            document.getElementById("search-poster").style.display = "block";
            document.getElementById("search-info").style.display = "flex";

            posters.splice(8, 1);
            postersTitle.splice(8, 1);
            posterTranslate.splice(8, 1);
            renderRecommended();
        break;
        case(frierenKey.some(word => searchValue.includes(word))):
            document.getElementById("with-result").style.display = "flex";
            document.getElementById("no-result").style.display = "none";
            searchRecall.textContent = "Search result for: " + searchValue;  

            searchPoster.src = posters[9];
            searchAnimeName.textContent = postersTitle[9];
            searchAnimeTrans.textContent = posterTranslate[9];

            document.getElementById("search-poster").style.display = "block";
            document.getElementById("search-info").style.display = "flex";

            posters.splice(9, 1);
            postersTitle.splice(9, 1);
            posterTranslate.splice(9, 1);
            renderRecommended();
        break;
        case(apothecaryKey.some(word => searchValue.includes(word))):
            document.getElementById("with-result").style.display = "flex";
            document.getElementById("no-result").style.display = "none";
            searchRecall.textContent = "Search result for: " + searchValue;  

            searchPoster.src = posters[10];
            searchAnimeName.textContent = postersTitle[10];
            searchAnimeTrans.textContent = posterTranslate[10];

            document.getElementById("search-poster").style.display = "block";
            document.getElementById("search-info").style.display = "flex";

            posters.splice(10, 1);
            postersTitle.splice(10, 1);
            renderRecommended();
        break;
        case(borutoKey.some(word => searchValue.includes(word))):
            document.getElementById("with-result").style.display = "flex";
            document.getElementById("no-result").style.display = "none";
            searchRecall.textContent = "Search result for: " + searchValue;  

            searchPoster.src = posters[11];
            searchAnimeName.textContent = postersTitle[11];
            searchAnimeTrans.textContent = posterTranslate[11];

            document.getElementById("search-poster").style.display = "block";
            document.getElementById("search-info").style.display = "flex";

            posters.splice(11, 1);
            postersTitle.splice(11, 1);
            posterTranslate.splice(11, 1);
            renderRecommended();
        break;
        case(dragonBallKey.some(word => searchValue.includes(word))):
            document.getElementById("with-result").style.display = "flex";
            document.getElementById("no-result").style.display = "none";
            searchRecall.textContent = "Search result for: " + searchValue;  

            searchPoster.src = posters[12];
            searchAnimeName.textContent = postersTitle[12];
            searchAnimeTrans.textContent = posterTranslate[12];

            document.getElementById("search-poster").style.display = "block";
            document.getElementById("search-info").style.display = "flex";

            posters.splice(12, 1);
            postersTitle.splice(12, 1);
            posterTranslate.splice(12, 1);
            renderRecommended();
        break;
        case(hunterHunterKey.some(word => searchValue.includes(word))):
            document.getElementById("with-result").style.display = "flex";
            document.getElementById("no-result").style.display = "none";
            searchRecall.textContent = "Search result for: " + searchValue;  

            searchPoster.src = posters[13];
            searchAnimeName.textContent = postersTitle[13];
            searchAnimeTrans.textContent = posterTranslate[13];

            document.getElementById("search-poster").style.display = "block";
            document.getElementById("search-info").style.display = "flex";

            posters.splice(13, 1);
            postersTitle.splice(13, 1);
            posterTranslate.splice(13, 1);
            renderRecommended();
        break;
        case(samuraiXKey.some(word => searchValue.includes(word))):
            document.getElementById("with-result").style.display = "flex";
            document.getElementById("no-result").style.display = "none";
            searchRecall.textContent = "Search result for: " + searchValue;  

            searchPoster.src = posters[14];
            searchAnimeName.textContent = postersTitle[14];
            searchAnimeTrans.textContent = posterTranslate[14];

            document.getElementById("search-poster").style.display = "block";
            document.getElementById("search-info").style.display = "flex";

            posters.splice(14, 1);
            postersTitle.splice(14, 1);
            posterTranslate.splice(14, 1);
            renderRecommended();
        break;
        default: 
            document.getElementById("with-result").style.display = "flex";
            document.getElementById("no-result").style.display = "none";
            searchRecall.textContent = "Search result for: " + searchValue; 

            renderRecommended();
        break;
    }
}


