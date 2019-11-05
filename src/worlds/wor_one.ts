import {collide} from "../components/com_collide.js";
import {control_ball} from "../components/com_control_ball.js";
import {control_brick} from "../components/com_control_brick.js";
import {control_paddle} from "../components/com_control_paddle.js";
import {draw_rect} from "../components/com_draw.js";
import {move} from "../components/com_move.js";
import {Game} from "../game.js";

export function world_one(game: Game) {
    game.World = [];

    game.Add({
        Translation: [game.ViewportWidth / 2, game.ViewportHeight - 95],
        Using: [move(500), control_paddle(), draw_rect(200, 50, "blue"), collide([200, 50])],
    });
    // for (let i = 0; i < 15; i++)
    game.Add({
        Translation: [game.ViewportWidth / 2, game.ViewportHeight - 200],
        Using: [
            move(600),
            control_ball((Math.random() + 1) * Math.PI),
            draw_rect(20, 20, "orange"),
            collide([20, 20]),
        ],
    });
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 7; j++) {
            game.Add({
                Translation: [j * 110 + 140, i * 50 + 60],
                Using: [draw_rect(100, 40, "red"), collide([100, 40]), control_brick()],
            });
            0;
        }
    }
}
