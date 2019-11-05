import {Entity, Game} from "../game.js";
import {Vec2} from "../math/index.js";
import {Get, Has} from "./com_index.js";

export interface Move {
    direction: Vec2;
    speed: number;
}

export function move(speed: number) {
    return (game: Game, entity: Entity) => {
        game.World[entity] |= Has.Move;
        game[Get.Move][entity] = <Move>{
            direction: <Vec2>[0, 0],
            speed,
        };
    };
}
