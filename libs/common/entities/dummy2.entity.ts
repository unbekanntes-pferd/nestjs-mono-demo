import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Dummy2 {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  random: string;

  @Column()
  random2: number;
}
