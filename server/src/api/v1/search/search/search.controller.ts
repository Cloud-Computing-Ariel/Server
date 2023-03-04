import { Body, Controller, Get, Post } from '@nestjs/common';
import { SearchDTO } from '../dtos/search.dto';
import { SearchService } from './search.service';

@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}
  @Post()
  getSearchResults(@Body() body: SearchDTO) {
    console.log(body);
    // TODO: Return real data using this format. an array of objects
    return [
      {
        ingredient1: '4',
        ingredient2: '12',
        ingredient3: '555',
        ingredient4: '64',
        amount: '2',
        timeInProcess: 'now',
        time: 'maybe now',
      },
      {
        ingredient1: '4',
        ingredient2: '12',
        ingredient3: '555',
        ingredient4: '64',
        amount: '2',
        timeInProcess: 'now',
        time: 'maybe now',
      },
    ];
  }
  @Get('/branches')
  getBranches() {
    // TODO: Return real data here of all branches
    return ['Afula', 'Tel Aviv', 'Haifa'];
  }
}
