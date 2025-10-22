class CatService {
    constructor() {}

    async request(){
        try {
            const response = await fetch('https://catfact.ninja/fact')

            if (!response.ok) {
                throw new Error(`Помилка: ${response.status}`); 
            }

            const data = await response.json()
            return data

        } catch (error) {
            console.log(`Помилка при запиті:`, error);
            return null;
        }
    }
}

class CatView {
    constructor(catContainer) {
        this.catContainer = catContainer
    }
    render(data) {
        if (!data) {
            this.catContainer.textContent = `Немає даних для відображення.`
            return
        }
        this.catContainer.innerHTML = `<p>${data.fact}</p>`
    }
}

const container = document.querySelector('.hero__content');
const catView = new CatView(container);
const catServise = new CatService()

async function showCatFact() {
    const resp = await catServise.request();
    catView.render(resp);
}

showCatFact()

const btn = document.querySelector('.hero__btn')
btn.addEventListener('click', showCatFact)