import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SimulationsModule } from './simulations/simulations.module';

@Module({
  imports: [
    SimulationsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'investips',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
})
export class AppModule {}
