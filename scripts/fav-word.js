let words = localStorage.getItem("data") || []
console.log(words)
console.log(words.length)
let mainContainer = document.getElementById("main-container")

let favoriteWordsCard = () => {
        if (words.length !== 0 ){
                return(
                        mainContainer.innerHTML = words.map((x) => {
                                return (console.log(x))
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
