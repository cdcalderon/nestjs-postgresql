import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SimulationRepository } from 'src/repositories/simulation.repository';
import { SimulationsController } from './simulations.controller';
import { SimulationsService } from './simulations.service';

@Module({
	imports: [TypeOrmModule.forFeature([SimulationRepository])],
	controllers: [SimulationsController],
	providers: [SimulationsService],
})
export class SimulationsModule {}
