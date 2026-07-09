let currentQuestion = 1;

function setContent(html){
    document.querySelector(".login-box").innerHTML = html;
}

function checkPassword(){

    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    if(password === "Abdullah"){

        message.style.color = "green";
        message.innerHTML = "Access Granted ❤️";

        setTimeout(()=>{
            showQuestionPage(1);
        },1000);

    }else{

        message.style.color = "red";
        message.innerHTML = "Wrong Password ❌";

    }
}

function showQuestionPage(question){

    currentQuestion = question;

    let text = "";
    let image = "images/photo15.jpg";

    if(question === 1){
        text = "Do you want to continue? ❤️";
        image = "images/photo1.jpg";
    }

    if(question === 2){
        text = "Are you really sure? 🥺";
    }

    if(question === 3){
        text = "You won't regret this ❤️";
        image = "images/photo16.jpg";
    }

    let backButton = "";

    if(question > 1){
        backButton = `
            <br><br>
            <button onclick="showQuestionPage(${question-1})">
                ⬅ Back
            </button>
        `;
    }

    setContent(`
        <img src="${image}" style="
            width:260px;
            border-radius:20px;
            margin-bottom:20px;
            box-shadow:0 5px 20px rgba(0,0,0,0.2);
        ">

        <h2>${text}</h2>

        <div style="
            position:relative;
            min-height:220px;
            margin-top:20px;
        ">

            <button onclick="nextQuestion()" style="
                width:180px;
                margin:auto;
                display:block;
            ">
                Yes ❤️
            </button>

            <button
                id="noBtn"
                onmouseover="moveNoButton()"
                onclick="moveNoButton(); return false;"
                style="
                    width:180px;
                    position:absolute;
                    left:50%;
                    top:100px;
                    transform:translateX(-50%);
                ">
                No 😅
            </button>

        </div>

        ${backButton}
    `);
}

function moveNoButton(){

    const btn = document.getElementById("noBtn");

    btn.style.left = Math.random()*70 + "%";
    btn.style.top = Math.random()*150 + 50 + "px";
}

function nextQuestion(){

    currentQuestion++;

    if(currentQuestion <= 3){
        showQuestionPage(currentQuestion);
    }else{
        showCountdown();
    }
}

function showCountdown(){

    let count = 5;

    setContent(`
        <div style="
            display:flex;
            justify-content:center;
            align-items:center;
            height:350px;
        ">
            <h1 id="countNumber"
            style="
                font-size:150px;
                color:#ff4f81;
                animation:pulse 1s infinite;
            ">
                5
            </h1>
        </div>
    `);

    const interval = setInterval(()=>{

        count--;

        if(count > 0){
            document.getElementById("countNumber").innerHTML = count;
        }else{
            clearInterval(interval);
            showBirthdayPage();
        }

    },1000);
}
function showBirthdayPage(){
    const music = document.getElementById("birthdayMusic");

music.play().catch(() => {
    console.log("Music playback blocked.");
});

    confetti({
        particleCount:300,
        spread:150,
        origin:{y:0.6}
    });

    const duration = 5000;
    const end = Date.now() + duration;

    const interval = setInterval(function() {

        confetti({
            particleCount:40,
            angle:60,
            spread:55,
            origin:{x:0}
        });

        confetti({
            particleCount:40,
            angle:120,
            spread:55,
            origin:{x:1}
        });

        if(Date.now() > end){
            clearInterval(interval);
        }

    },500);

    setContent(`
        <h1 style="
            font-size:55px;
            color:#ff4f81;
        ">
            Happy Birthday Amna ❤️
        </h1>

        <br><br>

        <button onclick="showItemsPage()">
            Next ➜
        </button>

        <br><br>

        <button onclick="showQuestionPage(3)">
            ⬅ Back
        </button>
    `);
}
function showItemsPage(){

    setContent(`
        <h2>Choose an item ❤️</h2>

        <div style="
            display:flex;
            justify-content:center;
            gap:60px;
            margin-top:40px;
            flex-wrap:wrap;
        ">

            <div onclick="showMemoriesPage()"
            style="cursor:pointer;text-align:center;">
                <div style="font-size:90px;">📷</div>
                <p>Camera</p>
            </div>

            <div onclick="showLetterPage()"
            style="cursor:pointer;text-align:center;">
                <div style="font-size:90px;">✉️</div>
                <p>Letter</p>
            </div>

        </div>

        <br><br>

        <button onclick="showBirthdayPage()">
            ⬅ Back
        </button>
    `);
}

function showMemoriesPage(){

    document.querySelector(".login-box").style.width = "95%";
    document.querySelector(".login-box").style.maxWidth = "1200px";

    let html = `
        <h1>Memories ❤️</h1>

        <div class="gallery-grid">
    `;

    const photos = [
        1,2,3,4,5,6,11,17,18,19,20
    ];

    photos.forEach(num=>{
        html += `
            <img src="images/photo${num}.jpg">
        `;
    });

    html += `
        </div>

        <br>

        <button onclick="backToItems()">
            ⬅ Back
        </button>
    `;

    setContent(html);
}

function backToItems(){
    document.querySelector(".login-box").style.width = "400px";
    document.querySelector(".login-box").style.maxWidth = "400px";
    showItemsPage();
}

function showLetterPage(){

    const text = `
Happy Birthday Amna ❤️

May your special day be filled with happiness,
beautiful memories and endless smiles 🌸

Thank you for being such an amazing person.

May all your dreams come true and may your life
always be full of joy, success and love 💖

Enjoy your special day and keep smiling always ✨

Happy Birthday Once Again 🎂❤️

Happy Birthday From Abdullah ❤️
`;

    setContent(`
        <div style="position:relative;">

            <div style="font-size:45px;position:absolute;top:0;left:0;">🌸</div>
            <div style="font-size:45px;position:absolute;top:0;right:0;">🌹</div>
            <div style="font-size:45px;position:absolute;bottom:0;left:0;">🌷</div>
            <div style="font-size:45px;position:absolute;bottom:0;right:0;">🌺</div>

            <h1 style="
                font-family:cursive;
                color:#ff4f81;
            ">
                💌 A Letter For You 💌
            </h1>

            <div id="letterText"
            style="
                font-family:'Brush Script MT',cursive;
                font-size:30px;
                color:#d63384;
                line-height:2;
                text-align:left;
                white-space:pre-line;
                min-height:320px;
                padding:25px;
                background:linear-gradient(
                    135deg,
                    #fff0f6,
                    #ffe6f2
                );
                border-radius:25px;
                border:3px solid #ffb6c1;
                margin-top:20px;
            ">
            </div>

            <br>

            <button onclick="showItemsPage()">
                ⬅ Back
            </button>

            <br><br>

            <button onclick="showMadeByPage()">
                Next ➜
            </button>

        </div>
    `);

    let i = 0;

    const interval = setInterval(()=>{

        document.getElementById("letterText").innerHTML += text.charAt(i);

        i++;

        if(i >= text.length){
            clearInterval(interval);
        }

    },35);
}
function showMadeByPage(){

    setContent(`
        <div style="
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            min-height:400px;
        ">

            <h1 style="
                color:#ff4f81;
                margin-bottom:40px;
            ">
                Thank You ❤️
            </h1>

            <div id="signature" style="
                font-family:'Brush Script MT', cursive;
                font-size:55px;
                color:#d63384;
                border-right:4px solid #d63384;
                white-space:nowrap;
                overflow:hidden;
                width:0;
                animation:
                    typing 4s steps(20,end) forwards,
                    blink 0.8s infinite;
            ">
                Made by Abdullah ❤️
            </div>

            <br><br>

            <p style="
                color:#666;
                font-size:20px;
            ">
                Thank you for visiting this little surprise ✨
            </p>

            <br><br>

            <button onclick="showLetterPage()">
                ⬅ Back
            </button>

            <br><br>

            <button onclick="shareWebsite()">
                📤 Share This Surprise
            </button>

        </div>
    `);
}

function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart";
    heart.innerHTML = "❤️";

    heart.style.left = Math.random()*100 + "vw";
    heart.style.bottom = "-20px";
    heart.style.fontSize = (20 + Math.random()*20) + "px";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },6000);
}

setInterval(createHeart,500);
function createBalloon(){

    const balloon = document.createElement("div");

    const balloons = ["🎈","🎈","🎈"];

    balloon.innerHTML =
        balloons[Math.floor(Math.random()*balloons.length)];

    balloon.style.position = "fixed";
    balloon.style.left = Math.random()*100 + "vw";
    balloon.style.bottom = "-50px";
    balloon.style.fontSize = (30 + Math.random()*20) + "px";
    balloon.style.zIndex = "999";
    balloon.style.pointerEvents = "none";
    balloon.style.animation = "floatBalloon 8s linear forwards";

    document.body.appendChild(balloon);

    setTimeout(()=>{
        balloon.remove();
    },8000);
}

setInterval(createBalloon,1500);
function createPetal(){

    const petal = document.createElement("div");

    petal.innerHTML = "🌹";

    petal.style.position = "fixed";
    petal.style.left = Math.random()*100 + "vw";
    petal.style.top = "-30px";
    petal.style.fontSize = (20 + Math.random()*15) + "px";
    petal.style.pointerEvents = "none";
    petal.style.zIndex = "999";
    petal.style.animation = "fallPetal 8s linear forwards";

    document.body.appendChild(petal);

    setTimeout(()=>{
        petal.remove();
    },8000);
}

setInterval(createPetal,2000);
function shareWebsite(){

    if(navigator.share){

        navigator.share({
            title:"Birthday Surprise ❤️",
            text:"Check out this birthday surprise ❤️",
            url:window.location.href
        });

    }else{

        navigator.clipboard.writeText(window.location.href);

        alert("Link copied to clipboard ❤️");
    }
}