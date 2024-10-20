import {addMarkers} from "./marker";
import {generateAds} from "./data.js";
import {POINTS} from "./const.js";
import {mapInit} from "./map.js";

const ads = generateAds(POINTS.khv);
const map = mapInit();
addMarkers(ads, map);
