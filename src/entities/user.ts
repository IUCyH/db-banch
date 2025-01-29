import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne
} from "typeorm";
import { Team } from "./team";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number = 0;

    @Column("varchar", { length: 10 })
    name: string = "";

    @Column("varchar", { length: 32 })
    password: string = "";

    @Column("varchar", { length: 64 })
    email: string = "";

    @Column("int")
    teamId: number = 0;

    @Column("timestamp")
    createAt: string = "";

    @ManyToOne(() => Team, team => team.users)
    team!: Team;
}