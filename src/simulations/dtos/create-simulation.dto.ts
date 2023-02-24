import { IsNotEmpty } from 'class-validator';

export class CreateSimulation {
	@IsNotEmpty()
	name: string;
}
