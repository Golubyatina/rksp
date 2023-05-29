import { CitiesService } from './cities.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { City } from './city.entity';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateCityDto } from './dto/city.dto';


@Controller('cities')
@ApiTags('Города')
export class CitiesController {
  constructor(private readonly citiesService: CitiesService) {}
  @ApiOperation({summary:'Получить список всех городов'})
  @Get()
  findAll() {
    return this.citiesService.findAll();
  }
  @ApiOperation({summary:'Поиск города по айди'})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.citiesService.findOne(+id);
  }
  @ApiOperation({summary:'Обновление города'})
  @Put(':id')
  update(@Param('id') id: string, @Body() updateCity: City) {
    return this.citiesService.update(+id, updateCity);
  }
  @ApiOperation({summary:'Создание города'})
  @Post()
  create(@Body() createCity: CreateCityDto) {
    return this.citiesService.create(createCity);
  }
  @ApiOperation({summary:'Удаление города'})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.citiesService.remove(+id);
  }

}

