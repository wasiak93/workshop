import {Get, Has} from "../components/com_index.js";
import {Entity, Game} from "../game.js";

const QUERY = Has.Collide | Has.Transform2D | Has.Move | Has.ControlBall;

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
    if (game[Get.Collide][entity].Collisions.length) {
        let collision = game[Get.Collide][entity].Collisions[0];
        if (collision.Hit[0] !== 0) {
            control.direction[0] *= -1;
            transform.Translation[0] += collision.Hit[0];
        }
        if (collision.Hit[1] !== 0) {
            control.direction[1] *= -1;
            transform.Translation[1] += collision.Hit[1];
        }
    }
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
    game[Get.Move][entity].direction[0] = control.direction[0];
    game[Get.Move][entity].direction[1] = control.direction[1];
}
