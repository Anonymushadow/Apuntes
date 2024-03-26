import { Scene3D, Project } from "enable3d";
import { PhysicsLoader } from "@enable3d/ammo-physics";

export class PhysicsTest extends Scene3D {
    async init(){}
    
    async create(){}
}

const config = { scenes: [PhysicsTest], antialias: true }

PhysicsLoader("/ammo", ()=>{
    new Project(config);
})