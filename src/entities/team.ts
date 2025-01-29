import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany
} from "typeorm";
import { User } from "./user";

@Entity()
export class Team {
    @PrimaryGeneratedColumn()
    id: number = 0;

    @Column("varchar", { length: 32 })
    name: string = "";

    @Column("varchar", { length: 64 })
    description: string = "";

    @Column("timestamp")
    createAt: string = "";

    @OneToMany(() => User, user => user.team)
    users!: User[];
}