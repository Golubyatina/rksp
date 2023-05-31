import { type } from "os";
import { City } from "src/cities/city.entity";
import { Region } from "src/regions/region.entity";
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
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
    @OneToMany((type) => City, (city) => city.country)
    @JoinTable({
      name: 'city_country',
      joinColumn:{name:'country_id'},
      inverseJoinColumn:{name:'city_id'}
    })
    cities: City[];
    @OneToMany((type) => Region, (region) => region.country)
    @JoinTable({
      name:'region_country',
      joinColumn: {name:'region_id'},
      inverseJoinColumn:{name:'country_id'},
    })
    regions: Region[];
  }
  