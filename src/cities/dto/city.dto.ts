import { ApiProduces, ApiProperty } from "@nestjs/swagger";
import { Country } from "src/countries/country.entity";

export class CreateCityDto {
    @ApiProperty({example: "Москва", description: 'Название города'})
    name: string;
    @ApiProperty({example: "55.7522, 37.6156", description: 'Координаты города'})
    coordinates: string;
    @ApiProperty({example: '13097539', description: 'Население города'})
    population: number;
    @ApiProperty({example: "[1]", description: 'Айди страны, в которой находится город'})
    country: number[];
    @ApiProperty({example: "[1]", description: 'Айди региона, в котором находится город'})
    region: number[];
}