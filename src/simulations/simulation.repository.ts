import { EntityRepository, Repository } from 'typeorm';
import { Simulation } from './simulation.entity';

// @EntityRepository(Simulation)
export class SimulationRepository extends Repository<Simulation> {
	// findById(id: string) {
	// 	return this.findOne({ where: { id } });
	// }
}
