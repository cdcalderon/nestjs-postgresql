import { Injectable } from '@nestjs/common';
import { Simulation } from 'src/models/simulation.model';

@Injectable()
export class SimulationsService {
  getAllSimulations(): Simulation[] {
    return new Array<Simulation>();
  }
}
