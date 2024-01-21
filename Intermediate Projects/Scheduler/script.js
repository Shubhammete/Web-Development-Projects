const button = document.querySelector(".next")
const quotes = document.querySelector("quote")
const author = document.querySelector(".author")

const content = [
    {
        quote: "“Will my smart fridge tell my mother about my chocolate cake addiction?”",
        person: "Anonmyous"
    },
    {
        quote: "“For me personally, cloud security isn’t a worry. My data is such a mess that no one would find anything anyway”",
        person: "Anonmyous"
    },
    {
        quote: "In the underworld, reality itself has elastic properties and is capable of being stretched into different definitions of the truth.",
        person: "Anonmyous"
    },
    {
        quote: "In the digital era, privacy must be a priority. Is it just me, or is secret blanket surveillance obscenely outrageous?",
        person: "Anonmyous"
    },
    {
        quote: "What happens in Vegas ends up on YouTube.",
        person: "Anonmyous"
    }   
]

button.addEventListener("click", function(){
    let i = Math.floor(Math.random() * content.length )
    quotes.innerText = content[i].quote
    author.innerText = content[i].person
})
