import {Collide} from "./com_collide";
import {ControlBall} from "./com_control_ball";
import {ControlBrick} from "./com_control_brick";
import {ControlPaddle} from "./com_control_paddle";
import {Draw} from "./com_draw";
import {Move} from "./com_move";
import {Transform2D} from "./com_transform2d";

export const enum Get {
    Collide,
    ControlPaddle,
    ControlBall,
    ControlBrick,
    Draw,
    Move,
    Transform2D,
}

export interface ComponentData {
    [Get.Collide]: Array<Collide>;
    [Get.ControlPaddle]: Array<ControlPaddle>;
    [Get.ControlBall]: Array<ControlBall>;
    [Get.ControlBrick]: Array<ControlBrick>;
    [Get.Draw]: Array<Draw>;
    [Get.Move]: Array<Move>;
    [Get.Transform2D]: Array<Transform2D>;
}

export const enum Has {
    Collide = 1 << Get.Collide,
    ControlPaddle = 1 << Get.ControlPaddle,
    ControlBall = 1 << Get.ControlBall,
    ControlBrick = 1 << Get.ControlBrick,
    Draw = 1 << Get.Draw,
    Move = 1 << Get.Move,
    Transform2D = 1 << Get.Transform2D,
}
