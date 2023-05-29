import { PlacesService } from './places.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Place } from './place.entity';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { CreatePlaceDto } from './dto/place.dto';


@Controller('places')
@ApiTags('Места')
export class PlacesController {
  constructor(private readonly placesService: PlacesService) {}
  @ApiOperation({summary:'Получить список всех мест'})
  @Get()
  findAll() {
    return this.placesService.findAll();
  }
  @ApiOperation({summary:'Найти место по айди'})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.placesService.findOne(+id);
  }
  @ApiOperation({summary:'Обновление места'})
  @Put(':id')
  update(@Param('id') id: string, @Body() updatePlace: Place) {
    return this.placesService.update(+id, updatePlace);
  }
  @ApiOperation({summary:'Создание места'})
  @Post()
  create(@Body() createPlace: CreatePlaceDto) {
    return this.placesService.create(createPlace);
  }
  @ApiOperation({summary:'Удаление места'})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.placesService.remove(+id);
  }

}

