import { useEffect, useState } from 'react';
import { ScrollView, TouchableOpacity, GestureResponderEvent, Alert } from 'react-native';
import { fetchStockList } from '@/api/stocks'
import { Stock } from '@/types';
import CardComponent from '@/components/global/CardComponent';
import { Link } from 'expo-router';
import LoadingScreen from '@/components/global/LoadingScreen';
import Toast from 'react-native-toast-message';

const Home: React.FC = () => {

  const [stockList, setStockList] = useState<Stock[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  useEffect(() => {
    const loadStocks = async () => {
      try {
        setIsLoading(true);
        const data = await fetchStockList(); 
        setStockList(data); 
      } catch (error) {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: 'Failed to fetch stock data. Please try again later.',
        });
        console.error('Error fetching stocks:', error);
      } finally {
        setIsLoading(false); 
      }
    };

    loadStocks();
  }, []);
  
  if (isLoading) {
    return <LoadingScreen/>
  }

  return (
    <ScrollView className='px-6 mt-6'>
      {stockList.map(function(stock: Stock, index) {
        if (stock) {
          return (
            <TouchableOpacity key={stock.id}>   
              <Link
                href={{
                  pathname: "/details/[symbol]",
                  params: { symbol: stock.symbol || "" },
                }}
              >
                <CardComponent 
                  title={stock.symbol}
                  firstDesc={stock.company_name}
                  secondDesc={stock.industry}
                />
              </Link>
            </TouchableOpacity>
          )
        }
      })}
    </ScrollView>
  );
}

export default Home;