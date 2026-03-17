const endpoint = '../cities.json'

const cities = [];

fetch(endpoint)
.then(blob => blob.json())
.then(data => cities.push(...data));

// console.log(cities)

function findMatches(wordToMatch, cities){
    return cities.filter(place => {

        const regex = new RegExp(wordToMatch, 'gi');
        return place.city.match(regex) || place.state.match(regex) || place.district.match(regex);
    });
}
function displayMatches(){
    // console.log(this.value);
    const matchArray = findMatches(this.value, cities);
    // console.log(matchArray);
    const html = `<li class="header">
                <span>City / State</span>
                <span>Population</span>
                </li>
            ${matchArray.map(place => {
                const regex = new RegExp(this.value, 'gi');
                const cityName = place.city.replace(regex,`<span class="h1">${this.value}</span>`);
                const DistricName = place.district.replace(regex,`<span class="h1">${this.value}</span>`);
                const stateName = place.state.replace(regex,`<span class="h1">${this.value}</span>`);
                const population = Number(place.population).toLocaleString();
                return `<li>
                <span class="name">${cityName}, ${DistricName}, ${stateName}</span>
                <span class="population">${population}</span>
                </li>
                `;
            }).join('')}`;
    suggestions.innerHTML = html;
}
const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');
searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
    