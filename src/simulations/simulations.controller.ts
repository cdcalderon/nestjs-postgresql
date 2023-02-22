import { Controller } from '@nestjs/common';
import { SimulationsService } from './simulations.service';

@Controller('simulations')
export class SimulationsController {
  constructor(private simulaitonsService: SimulationsService) {}
}
