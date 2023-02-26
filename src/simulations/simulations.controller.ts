import { Body, Controller, Get, Post } from '@nestjs/common';
import { Simulation } from 'src/entity/simulation.entity';
import { CreateSimulation } from './dtos/create-simulation.dto';
import { SimulationsService } from './simulations.service';

@Controller('api/simulations')
export class SimulationsController {
	constructor(private simulaitonsService: SimulationsService) {}

	@Get()
	getAllSimulations(): Simulation[] {
		return new Array<Simulation>();
	}

	@Post()
	createSimulation(@Body() simulationName: CreateSimulation): Simulation {
		console.log(simulationName);
		return { id: 'test' } as Simulation;
	}
}
