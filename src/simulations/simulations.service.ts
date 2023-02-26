import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SimulationRepository } from 'src/simulations/simulation.repository';
import { FindOneOptions, getRepository, Repository } from 'typeorm';
import { Simulation } from './simulation.entity';

@Injectable()
export class SimulationsService {
	constructor(
		@InjectRepository(Simulation)
		private simulationRepository: Repository<Simulation>,
	) {}

	async getSimulationById(id: string): Promise<Simulation> {
		// const options: FindOneOptions<Simulation> = {
		// 	where: { id: id },
		// };
		const simulation = await this.simulationRepository.findOne({
			where: { id },
		});

		if (!simulation) {
			throw new NotFoundException(`Simulation with ID ${id} not found`);
		}

		return simulation;
	}

	getAllSimulations(): Simulation[] {
		return new Array<Simulation>();
	}
}
