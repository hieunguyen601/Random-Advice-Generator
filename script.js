const advice = document.querySelector('.advice-text');
const idAdvice = document.querySelector('.id-advice');
const fetchButton = document.querySelector('.fetch-button');

fetchButton.addEventListener('click', async() => {
    try {
        const url = "https://api.adviceslip.com/advice";
        const response = await fetch(url);
        const data = await response.json();
        idAdvice.innerHTML = `Advice #${data.slip.id}`;
        advice.innerHTML = `"${data.slip.advice}"`;
    } catch (error) {
        advice.innerHTML = 'Error fetching data';
        console.log(error);
    }
});