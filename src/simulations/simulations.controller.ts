import { Controller, Get } from '@nestjs/common';
import { Simulation } from 'src/models/simulation.model';
import { SimulationsService } from './simulations.service';

@Controller('simulations')
export class SimulationsController {
  constructor(private simulaitonsService: SimulationsService) {}

  @Get()
  getAllSimulations(): Simulation[] {
    return new Array<Simulation>();
  }
}
