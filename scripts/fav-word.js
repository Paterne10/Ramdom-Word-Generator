let words = JSON.parse(localStorage.getItem("data"))|| []

let mainContainer = document.getElementById("main-container")
let containFavWord = document.querySelector(".container-favorite-word")

let search = words.map((x) => console.log(x))


let favoriteWordsCard = () => {
        if (words.length !== 0 ){
                return(
                       containFavWord.innerHTML = words.map((x) => {
                        console.log(x)
                        for (key in x){
                                if(x.hasOwnProperty(key))
                                        console.log(key)
                                        value = x[key]
        
                        }
                                return (
                                        `
                                        <div>
                                                <div class="fav-word-icone">
                                                <i class="bi bi-file-earmark"></i>
                                                </div>
                                                <div class="fav-word-title">${key}</div>
                                                <div class="fav-word-meaning">${value}</div>
                                        </div>
                                        `
                                )
                        })
                )
        }
        else{
                return(
                        mainContainer.innerHTML = 
                        `
                        <section class="container-fav-word">
                                <h2>There is no words </h2>
                        </section>
                        `)
             }
}

favoriteWordsCard()
