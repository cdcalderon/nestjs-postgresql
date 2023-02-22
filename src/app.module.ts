import { Module } from '@nestjs/common';
import { SimulationModule } from './simulation/simulation.module';
import { SimulationsController } from './simulations/simulations.controller';
import { SimulationsService } from './simulations/simulations.service';

@Module({
  imports: [SimulationModule],
  controllers: [SimulationsController],
  providers: [SimulationsService],
})
export class AppModule {}
