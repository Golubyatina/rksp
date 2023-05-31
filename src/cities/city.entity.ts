import { Place } from "src/places/place.entity"; 
import { Country } from "src/countries/country.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { type } from "os";
import { ApiProperty } from "@nestjs/swagger";
import { Region } from "src/regions/region.entity";


@Entity('cities')
export class City {
  @PrimaryGeneratedColumn()
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
    id: number;
    @Column()
    name: string;
    @Column()
    coordinates: string;
    @Column()
    population: number;
    @ManyToOne((type) => Country, (country) => country.cities)
    @JoinTable({
      name:'city_country',
      joinColumn: {name:'city_id'},
      inverseJoinColumn:{name:'country_id'},
    })
    country: Country[];
    @OneToMany((type) => Place, (place) => place.cities, {onDelete: "CASCADE"})
    @JoinTable({
      name:'city_place',
      joinColumn:{name:'city_id'},
      inverseJoinColumn:{name:'place_id'},
    })
    places: Place[];
    @ManyToOne((type) => Region, (region) => region.cities)
    @JoinTable({
      name:'city_region',
      joinColumn:{name:'city_id'},
      inverseJoinColumn:{name:'region_id'},
    })
    region: Region[]
  }
  