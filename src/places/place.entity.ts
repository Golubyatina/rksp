import { type } from "os";
import { City } from "src/cities/city.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
@Entity('places')
export class Place {
  @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    coordinates: string;
    @Column()
    description: string;
    @ManyToOne((type) => City, (city) => city.places, {onDelete: "CASCADE"})
    @JoinTable({
      name:'city_place',
      joinColumn:{name:'place_id'},
      inverseJoinColumn:{name:'city_id'},
    })
    cities:City[];
  }
  