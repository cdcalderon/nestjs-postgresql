import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Simulation } from 'src/entity/simulation.entity';
import { SimulationRepository } from 'src/repositories/simulation.repository';
import { FindOneOptions } from 'typeorm';

@Injectable()
export class SimulationsService {
	constructor(
		@InjectRepository(SimulationRepository)
		private simulationRepository: SimulationRepository,
	) {}

	async getSimulationById(id: string): Promise<Simulation> {
		const options: FindOneOptions<Simulation> = {
			where: { id },
		};
		const simulation = await this.simulationRepository.findOne(options);

		if (!simulation) {
			throw new NotFoundException(`Simulation with ID ${id} not found`);
		}

		return simulation;
	}

	getAllSimulations(): Simulation[] {
		return new Array<Simulation>();
	}
}
