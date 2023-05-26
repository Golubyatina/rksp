import { Place } from "src/places/place.entity"; 
import { Country } from "src/countries/country.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { type } from "os";


@Entity('cities')
export class City {
  @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    coordinates: string;
    @Column()
    population: number;
    @ManyToMany((type) => Country, (country) => country.cities)
    @JoinTable({
      name:'city_country',
      joinColumn: {name:'city_id'},
      inverseJoinColumn:{name:'country_id'},
    })
    country: Country;
    @ManyToMany((type) => Place, (place) => place.cities)
    @JoinTable({
      name:'city_place',
      joinColumn:{name:'city_id'},
      inverseJoinColumn:{name:'place_id'},
    })
    places: Place[];
  }
  