import {Get, Has} from "../components/com_index.js";
import {Entity, Game} from "../game.js";

const QUERY = Has.Transform2D | Has.Move | Has.ControlBall;

export function sys_control_ball(game: Game, delta: number) {
    for (let i = 0; i < game.World.length; i++) {
        if ((game.World[i] & QUERY) == QUERY) {
            update(game, i, delta);
        }
    }
}

function update(game: Game, entity: Entity, delta: number) {
    let transform = game[Get.Transform2D][entity];
    let control = game[Get.ControlBall][entity];
    if (transform.Translation[0] >= game.ViewportWidth) {
        control.direction[0] = -control.direction[0];
        transform.Translation[0] = game.ViewportWidth;
    }
    if (transform.Translation[1] >= game.ViewportHeight) {
        control.direction[1] = -control.direction[1];
        transform.Translation[1] = game.ViewportHeight;
    }
    if (transform.Translation[0] <= 0) {
        control.direction[0] = -control.direction[0];
        transform.Translation[0] = 0;
    }
    if (transform.Translation[1] <= 0) {
        control.direction[1] = -control.direction[1];
        transform.Translation[1] = 0;
    }
    game[Get.Move][entity].direction[0] = game[Get.ControlBall][entity].direction[0];
    game[Get.Move][entity].direction[1] = game[Get.ControlBall][entity].direction[1];
}
