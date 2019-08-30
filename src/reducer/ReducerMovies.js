var moviesInitials = [
    {
        id:1,
        img:"https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/1/11/Avengers_Infinity_war_poster.jpeg/revision/latest/scale-to-width-down/324?cb=20180316141550",
        titre: 'Avengers Infinity War 2018',
        genre: 'Sci-Fi',
        rating: 4,
        description: 'Iron Man, Thor, the Hulk and the rest of the Avengers unite to battle their most powerful enemy yet',
        link: 'https://www.imdb.com/title/tt4154756/'
    },
    {
        id:2,
        img:"https://cdn-static.egybest.net/serve/movies/art-2723904768-x300.jpg",
        titre: 'fast and furious hobbs and shaw 2019',
        genre: 'Sci-Fi',
        rating: 5,
        description: "la Chine s'emballe pour le spin-off de la saga et explose les compteurs",
        link: 'https://xena.egybest.me/movie/fast-and-furious-presents-hobbs-and-shaw-2019/'
    },{
        id:3,
        img:"https://cdn-static.egybest.net/serve/movies/art-0128606920-x300.jpg",
        titre: 'Iron Man & Hulk: Heroes United 2013',
        genre: 'action',
        rating: 3,
        description: "Lorsque Zzzax, un monstre apparemment invincible qui absorbe l'énergie, menace de détruire la planète",
        link: 'https://xena.egybest.me/movie/iron-man-hulk-heroes-united-2013/?ref=similar'
    },{
        id:4,
        img:"https://upload.wikimedia.org/wikipedia/en/b/bd/Spider-Man_Far_From_Home_poster.jpg",
        titre: 'Spider-Man: Far From Home 2019',
        genre: 'Sci-Fi',
        rating: 5,
        description: "L'araignée sympa du quartier décide de rejoindre ses meilleurs amis Ned, MJ, et le reste de la bande pour des vacances en Europe",
        link: 'https://egybest1.com/%d9%81%d9%8a%d9%84%d9%85-spider-man-far-from-home-2019/'
    },{
        id:5,
        img:"https://media.aintitcool.com/media/_versions/2019/dannie_2.0/hush_large.jpg",
        titre: 'Batman: Hush 2019',
        genre: 'Sci-Fi',
        rating: 4,
        description: "An adaptation of the Batman: Hush story line, by Jeph Loeb and Jim Lee.",
        link: 'https://www.imdb.com/title/tt8752440/'
    },{
        id:6,
        img:"https://cdn-static.egybest.net/serve/movies/art-2617867824-x300.jpg",
        titre: 'The Lion King 2019',
        genre: 'Comedy',
        rating: 3,
        description: "After the murder of his father, a young lion prince flees his kingdom only to learn the true meaning of responsibility and bravery.",
        link: 'https://xena.egybest.me/movie/the-lion-king-2019/?ref=home-trends'
    },{
        id:7,
        img:"https://cdn-static.egybest.net/serve/movies/art-2670988320-x300.jpg",
        titre: 'Men in Black: International 2019',
        genre: 'Sci-Fi',
        rating: 4,
        description: "The Men in Black have always protected the Earth from the scum of the universe. In this new adventure, they tackle their biggest threat to date: a mole in the Men in Black organization.",
        link: 'https://xena.egybest.me/movie/men-in-black-international-2019/?ref=home-trends'
    },{
        id:8,
        img:"https://cdn-static.egybest.net/serve/movies/art-2729198680-x300.jpg",
        titre: 'Skin 2019',
        genre: 'action',
        rating: 3,
        description: "A destitute young man, raised by racist skinheads and notorious among white supremacists, turns his back on hatred and violence to transform his life",
        link: 'https://www.imdb.com/title/tt6043142/'
    }
]

const ReducerMovies = (state = moviesInitials, action) => {
    switch (action.type) {
       case "ADD_MOVIES":
       return(
           state.concat(action.newmovies)
       )
       case "REMOVE_MOVIES":
       return(
           state.filter((el,index)=>el.id !== action.id)
       )
    //    case "EDIT_MOVIES":
    //        return(
    //            state.map((el,index)=>el.id===action.id ?action.)
    //        )

        default:
            return state
    }
}

export default ReducerMovies;