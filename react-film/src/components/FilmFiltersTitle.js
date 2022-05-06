function FilmFiltersTitle(setFilter) {

    const filterAll = () => {
        setFilter("All");
    }

    const filterFavorite = () => {
        setFilter("Favorite");
    }

    const filterBestRated = () => {
        setFilter("Best Rated");
    }

    const filterLastMonth = () => {
        setFilter("Seen since Last Month");
    }

    const filterUnseen = () => {
        setFilter("Unseen");
    }

    return [filterAll, filterFavorite, filterBestRated, filterLastMonth, filterUnseen];
}

export { FilmFiltersTitle }

