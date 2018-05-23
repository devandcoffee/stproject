import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany
} from "typeorm";
import { Tournament } from "./Tournament";

@Entity("users")
export class User extends BaseEntity {
  @PrimaryGeneratedColumn() id: number;

  @Column("varchar", { length: 255, unique: true })
  email: string;

  @Column("text") password: string;

  @OneToMany(_ => Tournament, tournament => tournament.user)
  tournaments: Tournament[];
}
