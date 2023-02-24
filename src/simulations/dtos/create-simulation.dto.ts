/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';

/* eslint-disable prettier/prettier */
export class CreateSimulation {
  @IsNotEmpty()
  name: string;
}
