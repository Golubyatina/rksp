import { ApiProduces, ApiProperty } from "@nestjs/swagger";

export class CreateRegionDto {
    @ApiProperty({example: "Московская область", description: 'Название области'})
    name: string;
    @ApiProperty({example: "55.7522, 37.6156", description: 'Координаты области'})
    coordinates: string;
    @ApiProperty({example: '1', description: 'Айди столицы области'})
    capital: number;
    @ApiProperty({example: "1", description: 'Айди страны, в которой находится область'})
    country: number;
    @ApiProperty({example: "[1, 2]", description: 'Айди городов, находящихся в области'})
    cities: number[];
}