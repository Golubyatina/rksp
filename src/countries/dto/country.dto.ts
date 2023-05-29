import { ApiProduces, ApiProperty } from "@nestjs/swagger";
import { Country } from "src/countries/country.entity";

export class CreateCountryDto {
    @ApiProperty({example: "Россия", description: 'Название страны'})
    name: string;
    @ApiProperty({example: "Москва", description: 'Столица страны'})
    capital: string;
    @ApiProperty({example: '146980061', description: 'Население страны'})
    population: number;
    @ApiProperty({example: "[1, 2]", description: 'Айди городов, находящихся в стране'})
    cities: number[];
}