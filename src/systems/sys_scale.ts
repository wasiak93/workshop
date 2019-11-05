import {Get, Has} from "../components/com_index.js";
import {Entity, Game} from "../game.js";

const QUERY = Has.Collide | Has.Transform2D | Has.Move | Has.Scale;

export function sys_scale(game: Game, delta: number) {
    for (let i = 0; i < game.World.length; i++) {
        if ((game.World[i] & QUERY) == QUERY) {
            update(game, i, delta);
        }
    }
}

function update(game: Game, entity: Entity, delta: number) {
    let transform = game[Get.Transform2D][entity];
    if (game[Get.Collide][entity].Collisions.length) {
        transform.Scale[0] = game[Get.Scale][entity].Zoom;
        transform.Scale[1] = game[Get.Scale][entity].Zoom;
    }
    if (transform.Scale[0] > 1) {
        transform.Scale[0] -= 0.5;
        transform.Scale[1] -= 0.5;
    }
}
