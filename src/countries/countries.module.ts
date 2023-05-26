import { Module } from '@nestjs/common';
import { Country } from './country.entity';
import { CountriesController } from './countries.controller';
import { CountriesService } from './countries.service';
import { DatasourceModule } from 'src/datasource/datasource.module';

@Module({
  controllers: [CountriesController],
  providers: [CountriesService],
  imports: [DatasourceModule]
})
export class CountriesModule {}
