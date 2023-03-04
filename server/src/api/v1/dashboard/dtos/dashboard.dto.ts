export class HeaderCardsDto {
  totalOpenOrders: number;
  totalOrders: number;
  openStores: number;
  avgTimeSpent: number;
}

export class BodyCardsDto {
  topToppingsOrdered: BodyCardData;
  topBranchesLowestWaitTime: BodyCardData;
  DistriByArea: BodyCardData;
  numberOfOrders: BodyCardData;
}

interface BodyCardData {
  data: number[];
  categories: string[];
}
