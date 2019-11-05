import {Entity, Game} from "../game.js";
import {Get, Has} from "./com_index.js";

export interface Scale {
    Zoom: number;
}

export function scale(Zoom: number) {
    return (game: Game, entity: Entity) => {
        game.World[entity] |= Has.Scale;
        game[Get.Scale][entity] = <Scale>{
            Zoom,
        };
    };
}
