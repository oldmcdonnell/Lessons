async function fetchRonSwansonQuote () {
    try {
        //success
        const response = await fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes/1')

        const quotes = await response.json()
        return quotes
    } catch (error){
        console.log('Error ', error)
        //failure
        return []
    }
}

async function getQuotes() {
const quotes = await fetchRonSwansonQuote{}
console.log('QUOTE: ', quotes)

}

getQuotes()

const data = {
    
}