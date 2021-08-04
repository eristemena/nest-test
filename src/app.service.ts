import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! Apa kabar dunia di luar sana?!!!!';
  }
}
