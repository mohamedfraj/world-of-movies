var tabSeries = [
    {

        id: 1,
        img: "https://cdn-static.egybest.net/serve/movies/art-0181050090-x175.jpg",
        titre: 'Prison Break 2005',
        genre: 'Sci-Fi',
        rating: 5,
        description: "Michael Scofield s'engage dans une véritable lutte contre la montre : son frère Lincoln est dans le couloir de la mort, en attente de son exécution",
        link: 'https://xena.egybest.me/series/prison-break-2005/?ref=search-p1'
    }, {
        id: 2,
        img: "https://cdn-static.egybest.net/serve/movies/art-2174685487-x300.jpg",
        titre: 'Fantastic Beasts: The Crimes of Grindelwald 2018',
        genre: 'Sci-Fi',
        rating: 4,
        description: "The second installment of the 'Fantastic Beasts' series featuring the adventures of Magizoologist Newt Scamander.",
        link: 'https://xena.egybest.me/movie/fantastic-beasts-the-crimes-of-grindelwald-2018/?ref=search-p1'
    }, {
        id: 3,
        img: "https://cdn-static.egybest.net/serve/movies/art-0167050130-x300.jpg",
        titre: 'I Saw the Devil 2010',
        genre: 'Sci-Fi',
        rating: 3,
        description: "A secret agent exacts revenge on a serial killer through a series of captures and releases.",
        link: 'https://xena.egybest.me/movie/i-saw-the-devil-2010/?ref=search-p2'
    }, {
        id: 4,
        img: "https://cdn-static.egybest.net/serve/movies/art-0202059949-x175.jpg",
        titre: 'Ballers 2015',
        genre: 'Sci-Fi',
        rating: 4,
        description: "A series centered around a group of football players and their families, friends, and handlers.",
        link: 'https://xena.egybest.me/series/ballers-2015/?ref=search-p2'
    }, {
        id: 5,
        img: "https://cdn-static.egybest.net/serve/movies/art-1295353384-x175.jpg",
        titre: 'Baywatch 2017',
        genre: 'Sci-Fi',
        rating: 5,
        description: "Devoted lifeguard Mitch Buchannon butts heads with a brash new recruit, as they uncover a criminal plot that threatens the future of the bay.",
        link: 'https://xena.egybest.me/movie/baywatch-2017/?ref=search-p5'
    }, {
        id: 6,
        img: "https://cdn-static.egybest.net/serve/movies/art-2651379874-x175.jpg",
        titre: 'Chernobyl 2019',
        genre: 'Sci-Fi',
        rating: 4,
        description: "In April 1986, an explosion at the Chernobyl nuclear power plant in the Union of Soviet Socialist Republics becomes one of the world's worst man-made catastrophes.",
        link: 'https://www.imdb.com/title/tt7366338/'
    }, {
        id: 7,
        img: "https://img-opt.cdn.smartvod.com/smartvod/images/videoland/data/images/c/n/5c2a25a7040b4_355x530.jpg",
        titre: 'the blacklist 2013',
        genre: 'action',
        rating: 5,
        description: "A new FBI profiler, Elizabeth Keen, has her entire life uprooted when a mysterious criminal, Raymond Reddington, who has eluded capture for decades, turns himself in and insists on speaking only to her.",
        link: 'https://www.imdb.com/title/tt2741602/'
    }, {
        id: 8,
        img: "https://cdn-static.egybest.net/serve/movies/art-0196493973-x300.jpg",
        titre: 'The Shannara Chronicles 2019',
        genre: 'Sci-Fi',
        rating: 3,
        description: "Series of adventures, war, and evil that occur throughout the history of the Four Lands.",
        link: 'https://xena.egybest.me/series/the-shannara-chronicles/?ref=search-p2'
    }
]


const ReducerSeries = (state = tabSeries, action) => {
    switch (action.type) {
        case "ADD_SERIE":
            return (
                state.concat(action.newseries)
            )
        case "REMOVE_SERIE":
            return (
                state.filter(el => el.id !== action._id)
            )
        case "EDIT_SERIE":
            return (
                state.map(el => el.id === action.serieToEdit.id ? action.serieToEdit : el)
            )

        default:
            return state
    }
}

export default ReducerSeries;