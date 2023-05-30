import { City } from "src/cities/city.entity"; 
import { Country } from "src/countries/country.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { type } from "os";
import { ApiProperty } from "@nestjs/swagger";


@Entity('regions')
export class Region {
  @PrimaryGeneratedColumn()
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
    id: number;
    @Column()
    name: string;
    @Column()
    coordinates: string;
    @Column()
    capital:string
    @ManyToMany((type) => Country, (country) => country.regions)
    @JoinTable({
      name:'region_country',
      joinColumn: {name:'country_id'},
      inverseJoinColumn:{name:'region_id'},
    })
    country: Country;
    @ManyToMany((type) => City, (city) => city.region)
    @JoinTable({
      name:'city_region',
      joinColumn:{name:'region_id'},
      inverseJoinColumn:{name:'city_id'},
    })
    cities: City[];
  }
  