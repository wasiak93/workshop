import {Get, Has} from "../components/com_index.js";
import {Entity, Game} from "../game.js";
import {Vec2} from "../math/index.js";

const QUERY = Has.Move | Has.ControlPaddle;

export function sys_control_paddle(game: Game, delta: number) {
    for (let i = 0; i < game.World.length; i++) {
        if ((game.World[i] & QUERY) == QUERY) {
            update(game, i, delta);
        }
    }
}

function update(game: Game, entity: Entity, delta: number) {
    let direction = <Vec2>[0, 0]; //x=0 y=0
    if (game.InputState["ArrowRight"]) {
        direction[0] = 1; //x=1
    }
    if (game.InputState["ArrowLeft"]) {
        direction[0] -= 1; //x = x-1 = 0 lub -1
    }
    if (game.InputState["ArrowUp"]) {
        direction[1] = -1; //y= -1
    }
    if (game.InputState["ArrowDown"]) {
        direction[1] += 1; // y= y + 1 = 0 lub +1
    }

    game[Get.Move][entity].direction = direction;
}
