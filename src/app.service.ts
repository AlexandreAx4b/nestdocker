import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `AX4b - Equipe A -  Alexandre - João - Gustavo - Gustavo Balmira - Alisson - Ananias`;
  }
}
