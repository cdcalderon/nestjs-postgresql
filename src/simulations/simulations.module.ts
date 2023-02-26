import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SimulationRepository } from 'src/simulations/simulation.repository';
import { Simulation } from './simulation.entity';
import { SimulationsController } from './simulations.controller';
import { SimulationsService } from './simulations.service';

@Module({
	imports: [TypeOrmModule.forFeature([Simulation, SimulationRepository])],
	controllers: [SimulationsController],
	providers: [SimulationsService],
})
export class SimulationsModule {}
