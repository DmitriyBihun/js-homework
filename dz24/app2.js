class DogAPI {
    constructor() {
    }
    async getRandDog() {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');

        if (!response.ok) {
            throw new Error(`Помилка: ${response.status}`);
        }
        const data = await response.json();
        return data
    }
    getBreedFromUrl(url) {
        const parts = url.split('/');
        return parts[4]
    }
}

class Layout {
    showMainDog(imgUrl, breed) {
        const imgEl = document.querySelector('.main-dog__img img');
        const breedEl = document.querySelector('.main-dog__breed');

        imgEl.src = imgUrl;
        imgEl.alt = breed;
        breedEl.innerText = breed;
    }

    appendDogItem(imgUrl) {
        const container = document.querySelector('.dog__items')

        const item = document.createElement('div');
        item.classList.add('dog__item', 'item-dog');

        const img = document.createElement('img');
        img.src = imgUrl;
        img.alt = 'Dog';

        item.append(img);
        container.append(item)
    }
}

async function initRandDog() {
    const api = new DogAPI();
    const layout = new Layout();
    try {
        // Отримую рандомну собаку
        const data = await api.getRandDog();

        // Витягую породу
        const breed = api.getBreedFromUrl(data.message);

        layout.showMainDog(data.message, breed)
    } catch (err) {
        console.error('Не вдалося загрузити собаку:', err);
    }
}

async function showRandDogs(count = 5) {
    const api = new DogAPI();
    const layout = new Layout();

    for (let i = 0; i < count; i++) {
        try {
            const data = await api.getRandDog();
            layout.appendDogItem(data.message)
        } catch (error) {
            console.error('Не вдалося загрузити собаку:', error);
        }
    }
}

initRandDog()
showRandDogs(4)