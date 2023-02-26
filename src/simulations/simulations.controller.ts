import { Body, Controller, Get, Post } from '@nestjs/common';
import { Param } from '@nestjs/common/decorators/http/route-params.decorator';
import { CreateSimulation } from './dtos/create-simulation.dto';
import { Simulation } from './simulation.entity';
import { SimulationsService } from './simulations.service';

@Controller('api/simulations')
export class SimulationsController {
	constructor(private simulaitonsService: SimulationsService) {}

	// @Get()
	// getAllSimulations(): Simulation[] {
	// 	return new Array<Simulation>();
	// }

	@Get('/:id')
	getSimulationById(@Param('id') id: string): Promise<Simulation> {
		return this.simulaitonsService.getSimulationById(id);
	}

	// @Post()
	// createSimulation(@Body() simulationName: CreateSimulation): Simulation {
	// 	console.log(simulationName);
	// 	return { id: 'test' } as Simulation;
	// }
}
