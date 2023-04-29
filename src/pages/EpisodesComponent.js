import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEpisodeAsync } from "../store/slices/rickAndMorty";

const EpisodesComponent = () => {
    const episodes = useSelector((state) => state.rickmorty.listOfEpisode);
    const episodeInfo = useSelector((state) => state.rickmorty.infoOfEpisode);

    console.log('episode', episodes);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getEpisodeAsync('episode'));
    }, [dispatch]);

    const handlePrev = () => dispatch(getEpisodeAsync(episodeInfo.prev));
    const handleNext = () => dispatch(getEpisodeAsync(episodeInfo.next));

    return <div className="Episode-list">
        {episodes.map((item) => (
            <div key={item.id} className="Episode-Card">
                <p>{item.name}</p>
                <p>{item.air_date}</p>
            </div>

        ))}
        <div className="Pagination">
            <button
                onClick={handlePrev}
                disabled={episodeInfo.prev === null}>
                Prev
            </button>
            <button
                onClick={handleNext}
                disabled={episodeInfo.next === null}>
                Next
            </button>
        </div>
    </div>
}

export default EpisodesComponent;