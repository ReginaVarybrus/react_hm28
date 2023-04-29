import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const rickMortySlice = createSlice({
    name: "rickmorty",
    initialState: {
        listOfChar: [],
        infoOfChar: {},
        listOfEpisode: [],
        infoOfEpisode: {},
        selectedChar: {},
    },
    reducers: {
        getCharacter: (state, action) => {
            console.log('hero', state, action);
            state.listOfChar = action.payload;
        },
        getCharacterInfo: (state, action) => {
            state.infoOfChar = action.payload;
        },
        getEpisode: (state, action) => {
            console.log('epi', state, action);
            state.listOfEpisode = action.payload;
        },
        getEpisodeInfo: (state, action) => {
            state.infoOfEpisode = action.payload;
        },
        selectChar: (state, action) => {
            console.log('char', state, action);
            state.selectedChar = action.payload;
        },
        clearSelectedChar: (state) => {
            state.selectedChar = {};
        },
    },
});

export const {
    clearSelectedChar,
    getCharacter,
    getCharacterInfo,
    getEpisodeInfo,
    getEpisode,
    selectChar } = rickMortySlice.actions;

export const getCharacterAsync = (url) => (dispatch) => {
    axios.get(url).then((resp) => {
        const heroes = resp.data;
        const heroesInfo = resp.data;
        dispatch(getCharacter(heroes.results));
        dispatch(getCharacterInfo(heroesInfo.info));
    });
};

export const getEpisodeAsync = (url) => (dispatch) => {
    axios.get(url).then((resp) => {
        const episode = resp.data;
        const episodeInfo = resp.data;
        dispatch(getEpisode(episode.results));
        dispatch(getEpisodeInfo(episodeInfo.info));
    });
};

export const getCharacterByIdAsync = (id) => (dispatch) => {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`).then((resp) => {
        const selectedHero = resp.data;
        dispatch(selectChar(selectedHero));
    });
};

export const selectCharList = (state) => state.rickMorty.listOfChar;

export default rickMortySlice.reducer;



