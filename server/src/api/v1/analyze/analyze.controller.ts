import { HttpService } from '@nestjs/axios';
import { Body, Controller, Post } from '@nestjs/common';
import { map } from 'rxjs';
import { AnalyzeService } from './analyze.service';
import { AnalyzeDTO } from './dtos/analyze.dto';

@Controller('analyze')
export class AnalyzeController {
  constructor(private readonly analyzeService: AnalyzeService, private readonly http: HttpService) {}

  @Post()
  getAnalyzeResults(@Body() body: AnalyzeDTO) {
    const t = this.http
      .get(`http://localhost:3004/?from=${body.fromDate}&to=${body.toDate}`)
      .pipe(map((data) => data.data));
    t.subscribe({
      next: (d) => {
        console.log(d);
      },
    });

    return t;
  }
}
