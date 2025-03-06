let btn = document.getElementById("btn")
let deutsch = document.getElementById("idDeutsch")
let english = document.getElementById("idEnglish")
let franz = document.getElementById("idFrench")
let ownRez = document.getElementById("idRez10")
let ownRezText = document.getElementById("idRate")

//Own Rate:
let stern = document.getElementById("idStar")
let stern1 = document.getElementById("idStar1")
let stern2 = document.getElementById("idStar2")
let stern3 = document.getElementById("idStar3")
let stern4 = document.getElementById("idStar4")

function getRandomItem(arr) 
    {
        const randomIndex = Math.floor(Math.random() * arr.length);
        const item = arr[randomIndex];
        return item;
    }

    function changeStars(element) {

        const bewertung = [
        "&nbsp;&starf;&starf;&starf;&starf;&starf;",
        "&nbsp;&starf;&starf;&starf;&starf;&star;",
        "&nbsp;&starf;&starf;&starf;&star;&star;",
        ]
        element.innerHTML = getRandomItem(bewertung)

    }

    function changeS()
    {
        const Stars = document.querySelectorAll("span")
        Stars.forEach(changeStars)
    }

    function info()
    {
        window.open("serverinfo.html")
    }

    function stars(anzahl)
    {
        if(anzahl == 1)
        {
            stern1.innerHTML = "&star;"
            stern2.innerHTML = "&star;"
            stern3.innerHTML = "&star;"
            stern4.innerHTML = "&star;"
        }

        if(anzahl == 2)
        {
            stern1.innerHTML = "&starf;"
            stern2.innerHTML = "&star;"
            stern3.innerHTML = "&star;"
            stern4.innerHTML = "&star;"
        }

        if(anzahl == 3)
        {
            stern1.innerHTML = "&starf;"
            stern2.innerHTML = "&starf;"
            stern3.innerHTML = "&star;"
            stern4.innerHTML = "&star;"
        }

        if(anzahl == 4)
        {
            stern1.innerHTML = "&starf;"
            stern2.innerHTML = "&starf;"
            stern3.innerHTML = "&starf;"
            stern4.innerHTML = "&star;"
        }

        if(anzahl == 5)
        {
            stern1.innerHTML = "&starf;"
            stern2.innerHTML = "&starf;"
            stern3.innerHTML = "&starf;"
            stern4.innerHTML = "&starf;"
        }
    }

    function send()
    {
        const div = document.createElement("div")
        div.style.width = "600px"
        div.style.height = "400px"
        div.style.backgroundColor = "white"
        div.style.zIndex = 1
        div.style.position = "absolute"
        div.style.left = "27%"
        div.style.top = "17%"
        div.style.background = "linear-gradient(to right, #8383ff, rgb(0, 0, 206))"

        const close = document.createElement("div")
        close.innerHTML = "X"
        close.onclick = () => {document.body.removeChild(div)}
        close.classList.add("close")
        div.appendChild(close)

        const min = document.createElement("div")
        min.innerHTML = "-"
        min.onclick = () => {div.style.opacity = 0; 
                            if(deutsch.selected == true) alert("Drücke ENTER, um das Fenster wieder zu öffnen."); 
                            if(english.selected == true) alert("Press ENTER to reopen the window.");
                            if(franz.selected == true) alert("Appuyez sur ENTRÉE pour rouvrir la fenêtre.");
                            document.addEventListener("keydown", function (e) 
                            {
                                if(e.key === "Enter")
                                    div.style.opacity = 1
                            })}
        min.classList.add("min")
        div.appendChild(min)

        
        const text = document.createElement("div")
        text.style.position = "absolute"
        text.style.top = "3%"
        text.style.left = "30%"
        text.style.fontSize = "150%"
        text.style.fontWeight = "bold"
        if(deutsch.selected == true)
            text.innerHTML = "Wähle dein Profilbild: "
        if(english.selected == true)
            text.innerHTML = "Choose your profile picture: "
        if(franz.selected == true)
            text.innerHTML = "Choisissez votre photo de profil: "
        div.appendChild(text)

        const form = document.createElement("form")
        form.id = "fileForm"

        const file = document.createElement("input")
        file.type = "file"
        file.style.position = "absolute"
        file.style.top = "27%"
        file.style.left = "27%"
        file.classList.add("input[type='file']::file-selector-button")
        file.id = "fileInput"
        form.appendChild(file)

        const bild = document.createElement("img")
        bild.src = ""
        bild.style.width = "20%"
        bild.style.height = "auto"
        bild.style.display = "none"
        bild.style.position = "absolute"
        bild.style.left = "40%"
        bild.style.bottom = "20%"
        bild.style.borderRadius = "50%"

        div.appendChild(bild)
        file.addEventListener('change', function(event) {
            const fileInput = event.target;
            const imgPreview = document.getElementById('imgPreview');
        
            if (fileInput.files.length > 0) {
                const file = fileInput.files[0];
        
                const reader = new FileReader();
                reader.onload = function(e) {
                    imgPreview.src = e.target.result;
                    imgPreview.style.display = 'block';
                };
                reader.readAsDataURL(file);
                const weiter = document.createElement("button")
                weiter.style.position = "absolute"
                weiter.style.bottom = 0
                weiter.style.right = 0
                weiter.innerHTML = "Weiter"
                weiter.onclick = () => 
                {
                    document.body.removeChild(div)
                    if(deutsch.selected == true)
                        alert("Vielen Dank für Ihr Feedback!")
                    if(english.selected == true)
                        alert("Thans for your feedback!")
                    if(franz.selected == true)
                        alert("Merci pour votre avis!")
                    let newRez = document.createElement("div")
                    newRez.classList.add("newRez")
                    let img = document.createElement("img")
                    img.src = imgPreview.src
                    ownRez.replaceChild(img, ownRezText)
                    stern.removeAttribute("id")
                    stern1.removeAttribute("id")
                    stern2.removeAttribute("id")
                    stern3.removeAttribute("id")
                    stern4.removeAttribute("id")
                    stern.classList.remove("starsRate")
                    stern1.classList.remove("starsRate")
                    stern2.classList.remove("starsRate")
                    stern3.classList.remove("starsRate")
                    stern4.classList.remove("starsRate")
                    stern.classList.add("newStars")
                    stern1.classList.add("newStars")
                    stern2.classList.add("newStars")
                    stern3.classList.add("newStars")
                    stern4.classList.add("newStars")
                    newRez.innerHTML = ownRez.innerHTML
                    let randomRez = document.createElement("div")
                    randomRez.classList.add("rez")
                    randomRez.id = "idRez11"
                    let randomImg = document.createElement("img")
                    randomImg.src = "User.png"
                    randomImg.id = "img11"
                    randomRez.appendChild(randomImg)
                    let randomStars = document.createElement("span")
                    randomStars.innerHTML = "&nbsp;&starf;&starf;&starf;&starf;&starf;"
                    randomRez.appendChild(randomStars)
                    haupt.appendChild(randomRez)
                    haupt.appendChild(newRez)
                }
                div.appendChild(weiter)

            } else {
                imgPreview.src = '';
                imgPreview.style.display = 'none';
            }
        });
        bild.id = "imgPreview"
        form.appendChild(bild)

        div.appendChild(form)

        div.appendChild(file)
        document.body.appendChild(div)

        let haupt = document.getElementById("rBorder")
        let btn = document.getElementById("idBtn")
        haupt.removeChild(ownRez)
        haupt.removeChild(btn)
    }

    function server()
    {
        window.open("https://discord.gg/3x5rmrQv6u", "_blank")
    }

    function absorbIt(event)
    {
        event.preventDefault()
        if(deutsch.selected == true)
            alert('Coming Soon\nUnser Spiel befindet sich momentan noch in Entwicklung.')
        else if(english.selected == true)
            alert('Coming Soon\nOur game is currently in development.')
        else if (franz.selected == true)
            alert('Coming Soon\nNotre jeu est actuellement en développement.')
    }

    function language()
    {
        let Language = document.getElementById("idLang")
        let bew = document.getElementById("idRate")
        let discord = document.getElementById("idDiscord")

        if(deutsch.selected == true)
        {
            alert("Die Sprache wurde geändert.")
            Language.innerHTML = "Sprache: &nbsp;"
            discord.innerHTML = "Discord Server"
            btn.innerHTML = "Absenden"
            bew.innerHTML = "Bew. "
        }

        if(english.selected == true)
        {
            alert("The language has been changed.")
            Language.innerHTML = "Language: &nbsp;"
            discord.innerHTML = "Discord Server"
            btn.innerHTML = "Send"
            bew.innerHTML = "Rate"
        }

        if(franz.selected == true)
        {
            alert("La langue a été changée.")
            Language.innerHTML = "Langue: &nbsp;"
            discord.innerHTML = "Serveurs Discorde"
            btn.innerHTML = "Envoyer"
            bew.innerHTML = "Évaluer"
        }
    }

    let darkmode = true
    let mode = document.getElementById("idMode")

    mode.addEventListener("click", function(event)
    {
        let btn = document.getElementById("idBtn")
        let absenden = document.getElementById("btn")
        if(darkmode)
        {
            mode.innerHTML = "Lightmode"
            document.body.style.background = "linear-gradient(to right, rgb(65, 65, 200), rgb(0, 0, 100))"
            btn.style.background = "linear-gradient(to right, rgb(0, 0, 100), rgb(0, 0, 100))"
            absenden.style.background = "linear-gradient(to right, rgb(0, 0, 100), rgb(0, 0, 100))"
        }
        else
        {
            mode.innerHTML = "Darkmode"
            document.body.style.background = "linear-gradient(to right, rgb(131, 131, 255), rgb(0, 0, 206))"
            btn.style.background = "linear-gradient(to right, rgb(17, 17, 213), rgb(4, 4, 207))"
            absenden.style.background = "linear-gradient(to right, rgb(17, 17, 213), rgb(4, 4, 207))"
        }
        darkmode = !darkmode
    }
    )

    //Sprachassistent
    let ausgabe = document.getElementById("idSprachAusgabe")
    const recognition = new window.webkitSpeechRecognition()
    recognition.onresult = function(event) {
        let result = event.results[event.resultIndex][0].transcript
        ausgabe.innerHTML = "Aufforderung: " + result
        let website = result.split(" ")
        if(result.includes("öffne")){
            if(result.includes("pornhub")){
                alert("HALT STOP")
                ausgabe.style.color = "red"
            }else
                window.open(`https://www.${website[1]}.com`, "_blank")

            }
        }

        const sprachAss = () => {recognition.start()}

        
