import { ApiProduces, ApiProperty } from "@nestjs/swagger";
import { Country } from "src/countries/country.entity";

export class CreatePlaceDto {
    @ApiProperty({example: "Парк Горького", description: 'Название места'})
    name: string;
    @ApiProperty({example: "55.7522, 37.6156", description: 'Координаты места'})
    coordinates: string;
    @ApiProperty({example: 'Парк', description: 'Описание места'})
    description: string;
    @ApiProperty({example: "[1,2]", description: 'Айди городов, в которых находится место'})
    cities: number[];
}