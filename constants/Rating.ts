export const BUY_RATING = {
    STRONG_BUY: 'Strong Buy' as const,
    BUY: 'Buy' as const,
    HOLD: 'Hold' as const,
    SELL: 'Sell' as const,
    STRONG_SELL: 'Strong Sell' as const,
    NONE: 'None' as const
  };
  
export type BuyRating = typeof BUY_RATING[keyof typeof BUY_RATING];
