import {Collide} from "./com_collide";
import {ControlBall} from "./com_control_ball";
import {ControlPaddle} from "./com_control_paddle";
import {Draw} from "./com_draw";
import {Transform2D} from "./com_transform2d";

export const enum Get {
    Collide,
    ControlPaddle,
    ControlBall,
    Draw,
    Transform2D,
}

export interface ComponentData {
    [Get.Collide]: Array<Collide>;
    [Get.ControlPaddle]: Array<ControlPaddle>;
    [Get.ControlBall]: Array<ControlBall>;
    [Get.Draw]: Array<Draw>;
    [Get.Transform2D]: Array<Transform2D>;
}

export const enum Has {
    Collide = 1 << Get.Collide,
    ControlPaddle = 1 << Get.ControlPaddle,
    ControlBall = 1 << Get.ControlBall,
    Draw = 1 << Get.Draw,
    Transform2D = 1 << Get.Transform2D,
}
