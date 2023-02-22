import { Body, Controller, Get, Post } from '@nestjs/common';
import { Simulation } from 'src/models/simulation.model';
import { SimulationsService } from './simulations.service';

@Controller('api/simulations')
export class SimulationsController {
  constructor(private simulaitonsService: SimulationsService) {}

  @Get()
  getAllSimulations(): Simulation[] {
    return new Array<Simulation>();
  }

  @Post()
  createSimulation(@Body('name') simulationName): Simulation {
    console.log(simulationName);
    return { id: 'test' } as Simulation;
  }
}
