const donateButtons = document.querySelectorAll('.donate-btn');
const congratsCard = document.getElementById('congrates');
const historySection = document.getElementById('History');
let totalDonationAmount = 5500; 
const navbarDonationAmount = document.querySelector('.navbar-end h1');
function updateTotalDonation(amount) {
    totalDonationAmount += amount;
    navbarDonationAmount.textContent = `${totalDonationAmount} BDT`;
}


function addToHistory(title, amount) {
    const historyItem = document.createElement('div');
    historyItem.classList.add('border', 'p-4', 'm-2', 'shadow-md', 'rounded-lg');
    historyItem.innerHTML = `
        <h3 class="text-lg font-bold">${title}</h3>
        <p class="text-base">Donated: ${amount} BDT</p>
    `;
    historySection.appendChild(historyItem);
}


function handleDonation(event) {
    const card = event.target.closest('.card-body');
    const donationInput = card.querySelector('input[type="number"]');
    const donationTitle = card.querySelector('.card-title').textContent;
    const donationAmount = parseFloat(donationInput.value);
    if (!isNaN(donationAmount) && donationAmount > 0) {  
        updateTotalDonation(donationAmount);      
        addToHistory(donationTitle, donationAmount);
        congratsCard.classList.remove('hidden');      
        donationInput.value = '';        
        const donationButton = card.querySelector('button');
        donationButton.innerHTML = `<img src="assets/coin.png" alt=""> ${donationAmount} BDT`;
    } else {
        alert('Please enter a valid donation amount.');
    }
}


donateButtons.forEach(button => {
    button.addEventListener('click', handleDonation);
});


document.querySelector('.btn').addEventListener('click', () => {
    congratsCard.classList.add('hidden');
});


const tabButton = document.getElementById('tab');
const historyTabButton = document.getElementById('tab1');

tabButton.addEventListener('click', () => {
    historySection.classList.add('hidden');
    document.querySelectorAll('#donation1').forEach(section => {
        section.classList.remove('hidden');
    });
});

historyTabButton.addEventListener('click', () => {
    document.querySelectorAll('#donation1').forEach(section => {
        section.classList.add('hidden');
    });
    historySection.classList.remove('hidden');
});
