import {Get, Has} from "../components/com_index.js";
import {Entity, Game} from "../game.js";

const QUERY = Has.Collide | Has.Transform2D | Has.ControlBrick;

export function sys_control_brick(game: Game, delta: number) {
    for (let i = 0; i < game.World.length; i++) {
        if ((game.World[i] & QUERY) == QUERY) {
            update(game, i, delta);
        }
    }
}

function update(game: Game, entity: Entity, delta: number) {
    let control = game[Get.ControlBall][entity];
    if (game[Get.Collide][entity].Collisions.length) {
        let collision = game[Get.Collide][entity].Collisions[0];

        if (collision.Hit[0] !== 0 || collision.Hit[1] !== 0) {
            game.Destroy(entity);
        }
    }
}
