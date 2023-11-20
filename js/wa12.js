const quoteBtn = document.querySelector('#js-new-quote').addEventListener('click', generateQuote);
const endpoint = "https://waifu.it/api/:endpoint";
/*
Replace "Your-API-Token" with the token you got from the Kohai Bot and the endpoint.
*/
/* const data = async () => {
    try {
        const data = await get(endpoint, { headers: {
            Authorization: "NzYyOTE3NjE3NzIzNzY4ODk0.MTcwMDE1ODQ4Ng--.465e4704c7",
        } });
        return data;
    } catch (err) {
        throw new Error(err.message);
    }
};
console.log(data); */
async function generateQuote() {
    const url = "https://docs.waifu.it/rest-api/texts/quote/search";
    const data = async () => {

        try {
            const response = await axios.get(url, { headers: {
                Authorization: "NzYyOTE3NjE3NzIzNzY4ODk0.MTcwMDE1ODQ4Ng--.465e4704c7",
              } });
            if (!response.ok) {
                throw Error(response.statusText);
            }
            const json = await response.json();
            generateQuote(json['quote']);
        }
        catch(err) {
            console.log(err);
            alert('Failed to fetch new quote');
        }
    const response = await data();
    console.log(response.data);
    document.getElementById("quotes").innerHTML = response.quote;
}}

document.getElementById("generate")
document.addEventListener("click", generateQuote);

function makeQuote() {
    const quoteTxt = document.querySelector
    ('#js-quote-text');
}

makeQuote();