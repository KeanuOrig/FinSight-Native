import { MessageProps, SearchBarProps } from "./global";

export type Stock = {
  id: number;
  symbol: string;
  company_name: string;
  industry: string;
  data?: StockData[]
} | null;
  
export type StockData = {
  id: number;
  date: number;
  open_price: number;
  close_price: number;
  high_price: number;
  low_price: number;
  volume: number;
};

export type StockListProps = {
  stockList: Stock[];
} & MessageProps & SearchBarProps;

export type StockDataProps = {
  stockData: Stock;
  symbol: string | undefined;
};

export type BuyRating = 'Strong Buy' | 'Buy' | 'Hold' | 'Sell' | 'Strong Sell' | 'None';

export type OrganismStockAiContentProps = {
  isLoading: boolean;
  analysis: string;
  buyRating: BuyRating;
}

export type OrganismFiltersSectionProps = {
  generateAnalysis: () => Promise<void>;
  isLoading: boolean;
  analysis: string;
  buyRating: BuyRating;
}