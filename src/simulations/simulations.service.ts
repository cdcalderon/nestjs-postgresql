import { Injectable } from '@nestjs/common';
import { Simulation } from 'src/entity/simulation.entity';

@Injectable()
export class SimulationsService {
	getAllSimulations(): Simulation[] {
		return new Array<Simulation>();
	}
}
