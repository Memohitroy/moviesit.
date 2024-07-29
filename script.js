const movies = [
    {
        name: "mr. & mrs. mahi",
        embed: "https://www.youtube.com/embed/vB7OiVfmEDM?si=d_Wl2Bx9-zR-Eer9",
        download: "https://hubcloud.lol/drive/1jmvzms8fub8jz9",
        image: "mr.$mrs.mahi.jpg"
    },
    {
        name: "naa saami ranga",
        embed: "https://www.youtube.com/embed/9UGStW2RSYE?si=2_kHwQUpCw6vI2OV",
        download: "https://hubcloud.lol/drive/1qhml4zdnfwr5qq",
        image: "naa sammi ranga.jpg"
    },
    {
        name: "maidaan",
        embed: "https://www.youtube.com/embed/pKaTkIx3VYY?si=iWon3oLeX6WiVcI0",
        download: "https://hubcloud.lol/drive/5azemz6zrnearoa",
        image: "maidaan.jpg"
    },
    {
        name: "antony",
        embed: "https://www.youtube.com/embed/v8GXOKK0P-o?si=GQLecl-VA3kw1tuy",
        download: "https://hubcloud.lol/drive/yzskzgkztysyisg",
        image: "antony.jpg"
    },
    {
        name: "chandu champion",
        embed: "https://www.youtube.com/embed/IHQQK_Wn5DM?si=15CH9exTYM2igiBa",
        download: "https://hubcloud.lol/drive/vcuvdakr5t5uukz",
        image: "chandu champion.jpg"
    },
    {
        name: "the family star",
        embed: "https://www.youtube.com/embed/jWVbxd80oyc?si=cvVqH_u2F2Djfxov",
        download: "https://hubcloud.lol/drive/h1zoevxuz08z4o5",
        image: "family star.jpg"
    },
    {
        name: "sarfira",
        embed: "https://www.youtube.com/embed/8Iy2geJD8HY?si=IsBHuonCMTR3QTay",
        download: "https://hubcloud.lol/drive/fy2gl3grsstp22a",
        image: "sarfira.jpg"
    },
    {
        name: "savi",
        embed: "https://www.youtube.com/embed/rfXW2Sk67WE?si=eGbsAUu2tFpSvYcN",
        download: "https://hubcloud.lol/drive/7xg9xjj5bcsibxx",
        image: "savi.jpg"
    },
    {
        name: "the garfield movie",
        embed: "https://www.youtube.com/embed/S3XjsSvwSuU?si=Tey8_s9Ke8_4U3sX",
        download: "https://hubcloud.lol/drive/iycop05xvv5mcqp",
        image: "garfield.jpg"
    },
    // Add more movie objects as needed
];

document.addEventListener('DOMContentLoaded', () => {
    const moviesContainer = document.getElementById('movies-container');
    const searchInput = document.getElementById('search');
    const noMatch = document.getElementById('no-match');

    const displayMovies = (moviesToShow) => {
        moviesContainer.innerHTML = '';
        if (moviesToShow.length === 0) {
            noMatch.style.display = 'block';
        } else {
            noMatch.style.display = 'none';
            moviesToShow.forEach(movie => {
                const movieCard = document.createElement('div');
                movieCard.classList.add('movie-card');

                movieCard.innerHTML = `
                    <img src="${movie.image}" alt="${movie.name}">
                    <div class="movie-info">
                        <h2>${movie.name}</h2>
                    </div>
                    <iframe src="${movie.embed}" allowfullscreen></iframe>
                    <div class="links">
                        <a href="${movie.download}" download>Download this Movie</a>
                    </div>
                `;
                moviesContainer.appendChild(movieCard);
            });
        }
    };

    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredMovies = movies.filter(movie => movie.name.toLowerCase().includes(searchTerm));
        displayMovies(filteredMovies);
    });

    displayMovies(movies);
});



