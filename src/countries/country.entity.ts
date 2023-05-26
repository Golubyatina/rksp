import { type } from "os";
import { City } from "src/cities/city.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { JoinAttribute } from "typeorm/query-builder/JoinAttribute";

@Entity('countries')
export class Country {
  @PrimaryGeneratedColumn()
    id: number;
    @Column({unique:true})
    name: string;
    @Column()
    capital: string;
    @Column()
    population: number;
    @ManyToMany((type) => City, (city) => city.country)
    @JoinTable({
      name: 'city_country',
      joinColumn:{name:'country_id'},
      inverseJoinColumn:{name:'city_id'}
    })
    cities: City[];
  }
  