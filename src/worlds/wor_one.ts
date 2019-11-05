import { control_ball } from "../components/com_control_ball.js";
import { control_paddle } from "../components/com_control_paddle.js";
import { draw_rect } from "../components/com_draw.js";
import { move } from "../components/com_move.js";
import { Game } from "../game.js";

export function world_one(game: Game) {
    game.World = [];

    game.Add({
        Translation: [game.ViewportWidth / 2, game.ViewportHeight / 2],
        Using: [move(300), control_paddle(), draw_rect(200, 50, "blue")],
    });
    for(let i=0; i< 60; i++)
    game.Add({
        Translation: [game.ViewportWidth / 2, game.ViewportHeight / 2],
        Using: [move(1000), control_ball((Math.random() + 1) * Math.PI), draw_rect(50, 50, "rgb("+ (i+30)+",0,"+ (i+20) +")")],
    });
//     game.Add({
//         Translation: [game.ViewportWidth / 2, game.ViewportHeight / 2],
//         Using: [
//             move(6000),
//             control_ball((Math.random() + 1) * Math.PI),
//             draw_rect(50, 50, "green"),
//         ],
//     });
// }
