import "./styles/main.scss";
import {Player} from "./components/Player";
import {Registration} from "./components/registration/registration";
import { Header } from "./components/header/header";
import { HowToPlay } from "./components/how_to_play/how_to_play";
import { Game } from  "./components/game/game";


const typesCards = {
    animals: "animals",
    web_design: "web-design"
}
const difficulty = {
    level_two: 8,
    level_four: 4
}

const ROOT = document.querySelector(".root");
const HEADER = new Header();
const HOWTOPlAY = new HowToPlay();
const GAME = new Game(difficulty.level_two, typesCards.animals);

ROOT.appendChild(HEADER.header);
ROOT.appendChild(GAME.game);

