import {control_ball} from "../components/com_control_ball.js";
import {control_paddle} from "../components/com_control_paddle.js";
import {draw_rect} from "../components/com_draw.js";
import {move} from "../components/com_move.js";
import {Game} from "../game.js";

export function world_one(game: Game) {
    game.World = [];

    game.Add({
        Translation: [game.ViewportWidth / 2, game.ViewportHeight / 2],
        Using: [move(300), control_paddle(), draw_rect(200, 50, "blue")],
    });
    game.Add({
        Translation: [game.ViewportWidth / 2, game.ViewportHeight / 2],
        Using: [move(30), control_ball(), draw_rect(50, 50, "red")],
    });
}
