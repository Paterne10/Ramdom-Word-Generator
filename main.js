data = [
    {
       id: "f",
       language: "French",
       words: [
        { "Candeur": "innocence" },
        { "Compartimenter": "Répartir en part égale." },
        { "Accalmie": "Période de calme." }
       ]
    },
    {
       id: "e",
       language: "English",
       words: [
        { "Remain": "To continue to exist or stay in the same place or condition" },
        { "Out of the blue": "Something happening suddenly and unexpectedly, without warning." },
        { "Lost Your Mind": "Typically a humorous or joking way to say someone is acting silly or not thinking clearly." }
       ]
    },
    {
       id: "s",
       language: "Spanish",
       words: [
        { "Mucho Gusto": "Es un placer conocerte." },
        { "Gracias": " Expresión de gratitud hacia alguien." },
        { "Por favor": "Forma educada de pedir algo." }
       ]
    }
];
console.log(data)

let languageId = []

let frenchButton = document.getElementById("French")
let spanish = document.getElementById("spanish")
let englishButton = document.getElementById("English")

let languageOptions = document.querySelector(".language-options")

let wordGenerate = document.querySelector(".word-generate")
let meaning = document.querySelector(".meaning")
let favorite = document.querySelector(".favorite")




let generateLanguageItem = () => {
    return(
        languageOptions.innerHTML = data.map((x) => {
            let {id, language} = x
            return `
            <button onClick="expressionGenerate(${id})" id=${id}>
                ${language}
            </button>
            `
        }).join("")
    )
}

generateLanguageItem()

let checkElement = (id) => {
    let search = languageId.find((x)=> x.id === id )
    console.log(search)

}

let expressionGenerate = (id) =>{
    let selecItem = id

    let words = []
    let search = data.find((x) => x.id === selecItem.id)

    for(i = 0; i < search.words.length; i++ ){
        words.push(search.words[i])
    };

    let word = search.words[Math.floor(Math.random()*search.words.length)]

    for(key in word){
        if(word.hasOwnProperty(key)){
            value = word[key]
        }
    };

    let containerWordGenerate = document.getElementById("container-word-generate")  
    containerWordGenerate.classList.add("test")
    wordGenerate.textContent = key
    meaning.textContent = value
    favorite.innerHTML = `
        <button class="favorite-word">Register the word</button>
    `


}