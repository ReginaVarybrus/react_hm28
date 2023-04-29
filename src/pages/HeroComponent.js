import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacterAsync, getCharacterByIdAsync, clearSelectedChar } from "../store/slices/rickAndMorty";

const HttpHeroComponent = () => {
    const heroes = useSelector((state) => state.rickmorty.listOfChar);
    const heroesInfo = useSelector((state) => state.rickmorty.infoOfChar);
    const hero = useSelector((state) => state.rickmorty.selectedChar);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCharacterAsync('character'));
    }, [dispatch]);

    const handlePrev = () => dispatch(getCharacterAsync(heroesInfo.prev));
    const handleNext = () => dispatch(getCharacterAsync(heroesInfo.next));
    const handleClear = () => dispatch(clearSelectedChar());

    return <>
        {hero?.name &&
            <div className="Selected-hero">
                <img src={hero.image}></img>
                <p>{hero.name}</p>
                <p>{hero.status}</p>
                <p>{hero.species}</p>
                <button onClick={handleClear}>Close</button>
            </div>}
        <div className="Hero-list">
            {heroes.map((hero) => (
                <div onClick={() => dispatch(getCharacterByIdAsync(hero.id))} key={hero.id} className="Hero-Card">
                    <p>{hero.name}</p>
                    <p>{hero.status}</p>
                    <img src={hero.image}></img>
                </div>

            ))}
            <div className="Pagination">
                <button
                    onClick={handlePrev}
                    disabled={heroesInfo.prev === null}>
                    Prev
                </button>
                <button
                    onClick={handleNext}
                    disabled={heroesInfo.next === null}>
                    Next
                </button>
            </div>
        </div>
    </>
}

export default HttpHeroComponent;

