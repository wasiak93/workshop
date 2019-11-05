import {Entity, Game} from "../game.js";
import {Rad, Vec2} from "../math/index.js";
import {Get, Has} from "./com_index.js";

export interface ControlBall {
    direction: Vec2;
}

export function control_ball(angle: Rad) {
    return (game: Game, entity: Entity) => {
        game.World[entity] |= Has.ControlBall;
        game[Get.ControlBall][entity] = <ControlBall>{
            direction: [Math.cos(angle), Math.sin(angle)],
        };
    };
}
