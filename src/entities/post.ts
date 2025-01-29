import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne
} from "typeorm";
import { User } from "./user";

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number = 0;

    @Column("varchar", { length: 64 })
    title: string = "";

    @Column("text")
    content: string = "";

    @Column("int")
    userId: number = 0;

    @Column("timestamp")
    createAt: string = "";

    @ManyToOne(() => User, user => user.posts)
    user!: User;
}