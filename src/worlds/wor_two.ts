import {control_ball} from "../components/com_control_ball.js";
import {draw_rect} from "../components/com_draw.js";
import {move} from "../components/com_move.js";
import {Game} from "../game.js";

export function world_two(game: Game) {
    game.World = [];

    game.Add({
        Translation: [game.ViewportWidth / 2, game.ViewportHeight / 2],
        Using: [move(), control_ball(), draw_rect(50, 50, "blue")],
    });
}
