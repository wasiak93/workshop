import {Collide} from "../components/com_collide.js";
import {Get, Has} from "../components/com_index.js";
import {Transform2D} from "../components/com_transform2d.js";
import {Game} from "../game.js";
import {Vec2} from "../math/index.js";
import {negate} from "../math/vec2.js";

const QUERY = Has.Transform2D | Has.Collide;

export function sys_collide(game: Game, delta: number) {
    // Collect all colliders.
    let all_colliders: Collide[] = [];
    for (let i = 0; i < game.World.length; i++) {
        if ((game.World[i] & QUERY) === QUERY) {
            let transform = game[Get.Transform2D][i];
            let collider = game[Get.Collide][i];

            // Prepare the collider for this tick.
            collider.Collisions = [];
            compute_aabb(transform, collider);
            all_colliders.push(collider);
        }
    }

    for (let i = 0; i < all_colliders.length; i++) {
        check_collisions(all_colliders[i], all_colliders);
    }
}

function compute_aabb(transform: Transform2D, collide: Collide) {
    collide.Center[0] = transform.Translation[0];
    collide.Center[1] = transform.Translation[1];
    collide.Min[0] = collide.Center[0] - collide.Size[0] / 2;
    collide.Min[1] = collide.Center[1] - collide.Size[1] / 2;
    collide.Max[0] = collide.Center[0] + collide.Size[0] / 2;
    collide.Max[1] = collide.Center[1] + collide.Size[1] / 2;
}

function check_collisions(collider: Collide, colliders: Collide[]) {
    for (let i = 0; i < colliders.length; i++) {
        if (collider.EntityId === colliders[i].EntityId) {
            return;
        }
        if (intersect_aabb(collider, colliders[i])) {
            let penetrate = penetrate_aabb(collider, colliders[i]);
            collider.Collisions.push({
                Other: colliders[i],
                Hit: penetrate,
            });
            colliders[i].Collisions.push({
                Other: collider,
                Hit: negate([0, 0], penetrate),
            });
        }
    }
}

function penetrate_aabb(a: Collide, b: Collide) {
    let distance_x = a.Center[0] - b.Center[0];
    let penetration_x = a.Size[0] / 2 + b.Size[0] / 2 - Math.abs(distance_x);

    let distance_y = a.Center[1] - b.Center[1];
    let penetration_y = a.Size[1] / 2 + b.Size[1] / 2 - Math.abs(distance_y);

    if (penetration_x < penetration_y) {
        return <Vec2>[penetration_x * Math.sign(distance_x), 0];
    } else {
        return <Vec2>[0, penetration_y * Math.sign(distance_y)];
    }
}

function intersect_aabb(a: Collide, b: Collide) {
    return a.Min[0] < b.Max[0] && a.Max[0] > b.Min[0] && a.Min[1] < b.Max[1] && a.Max[1] > b.Min[1];
}
