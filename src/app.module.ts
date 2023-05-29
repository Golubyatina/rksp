import { Module } from '@nestjs/common';
import { CitiesModule } from './cities/cities.module';
import { CountriesModule } from './countries/countries.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlacesModule } from './places/places.module';

@Module({
  imports: [CitiesModule, CountriesModule, PlacesModule, TypeOrmModule.forRoot({
    type: 'postgres', 
    port: 5432,
    username: 'education',
    password: 'password',
    host: 'localhost',
    synchronize: false,
    logging: 'all',
    entities: ['dist/**/*.entity{.ts, .js}'],
    autoLoadEntities: true,
    migrationsTableName: 'migrations',
    migrations: ['dist/src/migrations/*{.ts,.js}'],
  })
],
  controllers: [],
  providers: [],
})
export class AppModule {}
