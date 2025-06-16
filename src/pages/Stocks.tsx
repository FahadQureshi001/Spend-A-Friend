
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, TrendingDown, Search, Filter } from 'lucide-react';

const mockStocks = [
  { symbol: 'NVIDIA', name: 'NVIDIA Corporation', price: '$451.20', change: '+2.97%', volume: '45.2M', marketCap: '$1.12T', isPositive: true },
  { symbol: 'AAPL', name: 'Apple Inc.', price: '$185.40', change: '+1.75%', volume: '52.8M', marketCap: '$2.85T', isPositive: true },
  { symbol: 'AMD', name: 'Advanced Micro Devices', price: '$142.80', change: '+0.62%', volume: '38.1M', marketCap: '$230B', isPositive: true },
  { symbol: 'TSLA', name: 'Tesla Inc.', price: '$210.50', change: '-1.23%', volume: '67.4M', marketCap: '$670B', isPositive: false },
  { symbol: 'MSFT', name: 'Microsoft Corporation', price: '$378.90', change: '+0.84%', volume: '28.9M', marketCap: '$2.81T', isPositive: true },
  { symbol: 'GOOGL', name: 'Alphabet Inc.', price: '$142.65', change: '-0.45%', volume: '25.3M', marketCap: '$1.79T', isPositive: false },
];

export const Stocks = () => {
  return (
    <div className="container mx-auto px-4 py-8 space-y-8 animate-fade-in">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Stock Market</h1>
          <p className="text-gray-600 mt-1">Discover and trade the latest stocks.</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search stocks..."
              className="bg-white border border-gray-300 rounded-lg pl-10 pr-4 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {mockStocks.map((stock, index) => (
          <Card
            key={stock.symbol}
            className="bg-white border-gray-200 hover:shadow-lg transition-all duration-200 cursor-pointer hover-scale"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-gray-900 text-lg">{stock.symbol}</CardTitle>
                  <p className="text-gray-500 text-sm">{stock.name}</p>
                </div>
                <div className={`flex items-center ${stock.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                  {stock.isPositive ? (
                    <TrendingUp className="h-4 w-4 mr-1" />
                  ) : (
                    <TrendingDown className="h-4 w-4 mr-1" />
                  )}
                  <span className="font-medium">{stock.change}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="text-2xl font-bold text-gray-900">{stock.price}</div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500">Volume</p>
                    <p className="text-gray-900 font-medium">{stock.volume}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Market Cap</p>
                    <p className="text-gray-900 font-medium">{stock.marketCap}</p>
                  </div>
                </div>
                <div className="pt-3 border-t border-gray-200">
                  <div className="flex space-x-2">
                    <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
                      Buy
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50">
                      Sell
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Market Overview */}
      <Card className="bg-white border-gray-200 shadow-sm">
        <CardHeader className="border-b border-gray-100">
          <CardTitle className="text-gray-900 text-xl font-semibold">Market Overview</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">S&P 500</h3>
              <p className="text-2xl font-bold text-green-600">4,756.50</p>
              <p className="text-sm text-green-600">+1.2% (+56.78)</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">NASDAQ</h3>
              <p className="text-2xl font-bold text-green-600">14,893.23</p>
              <p className="text-sm text-green-600">+0.8% (+118.45)</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">DOW JONES</h3>
              <p className="text-2xl font-bold text-red-600">37,863.80</p>
              <p className="text-sm text-red-600">-0.3% (-113.22)</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
