export class HeaderCardsDto {
  allOrders: number;
  openOrders: number;
  avgTreatTime: number;
  openBranchs: number;
}

interface DistributionByArea {
  areas: string[];
}
interface TopBranches {
  branches: string[];
}
interface TopToppings {
  toppings: string[];
}
interface NumberOfOrderByTime {
  orders: number[];
  time: Date[];
}

export class BodyCardsDto {
  byArea: DistributionByArea;
  topBranches: TopBranches;
  topToppings: TopToppings;
  byTime: NumberOfOrderByTime;
}