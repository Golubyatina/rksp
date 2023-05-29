import { CountriesService } from './countries.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Country } from './country.entity';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { CreateCountryDto } from './dto/country.dto';


@Controller('countries')
@ApiTags('Страны')
export class CountriesController {
  constructor(private readonly countriesService: CountriesService) {}
  @ApiOperation({summary:'Получить список всех стран'})
  @Get()
  findAll() {
    return this.countriesService.findAll();
  }
  @ApiOperation({summary:'Найти страну по айди'})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.countriesService.findOne(+id);
  }
  @ApiOperation({summary:'Обновление страны'})
  @Put(':id')
  update(@Param('id') id: string, @Body() updateCountry: Country) {
    return this.countriesService.update(+id, updateCountry);
  }
  @ApiOperation({summary:'Создание страны'})
  @Post()
  create(@Body() createCountry: CreateCountryDto) {
    return this.countriesService.create(createCountry);
  }
  @ApiOperation({summary:'Удалить страну'})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.countriesService.remove(+id);
  }

}

