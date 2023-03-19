import { Body, Controller, Get, Post } from '@nestjs/common';
import { map } from 'rxjs';
import { SearchDTO } from '../dtos/search.dto';
import { SearchService } from './search.service';

@Controller('/search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}
  @Post()
  getSearchResults(@Body() body: SearchDTO) {
    return this.searchService.getSearchResults(body.date, body.branch).pipe(map((results) => results.data));
  }

  @Get('/branches')
  getBranches() {
    return [
      'Hod Hasharon',
      'Petah Tikvah',
      "Ra'anana",
      'Tel Aviv',
      'Bat Yam',
      'Ramat Gan',
      'Dimona',
      'Eilat',
      "Be'er Sheva",
      'Afula',
      'Haifa',
      'Tveria',
    ];
  }
}
