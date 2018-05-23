import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne
} from "typeorm";
import { User } from "./User";
import { Min } from "class-validator";

@Entity("tournaments")
export class Tournament extends BaseEntity {
  @PrimaryGeneratedColumn() id: number;

  @Column("varchar", { length: 255 })
  name: string;

  @Column("text") description?: string;
  @Column("timestamp") startDate: string;

  @Column()
  @Min(2)
  amountTeams: number;

  @ManyToOne(_ => User, user => user.tournaments)
  user: User;
}
