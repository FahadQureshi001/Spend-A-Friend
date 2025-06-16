
import React from 'react';
import { useParams } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, TrendingDown, ArrowLeft } from 'lucide-react';

export const StockDetails = () => {
  const { symbol } = useParams();

  // Mock data for the stock
  const stockData = {
    symbol: symbol || 'NVIDIA',
    name: 'NVIDIA Corporation',
    price: '$451.20',
    change: '+2.97%',
    changeValue: '+$13.04',
    isPositive: true,
    volume: '45.2M',
    marketCap: '$1.12T',
    pe: '65.2',
    eps: '$6.92',
    high52w: '$502.66',
    low52w: '$108.13',
  };

  return (
    <Layout>
      <div className="space-y-6 animate-fade-in">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="text-gray-300 hover:text-white">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Stocks
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Stock Info */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl text-white">{stockData.symbol}</CardTitle>
                    <p className="text-gray-400">{stockData.name}</p>
                  </div>
                  <div className={`text-right ${stockData.isPositive ? 'text-green-400' : 'text-red-400'}`}>
                    <div className="flex items-center">
                      {stockData.isPositive ? (
                        <TrendingUp className="h-5 w-5 mr-2" />
                      ) : (
                        <TrendingDown className="h-5 w-5 mr-2" />
                      )}
                      <span className="text-lg font-medium">{stockData.change}</span>
                    </div>
                    <p className="text-sm">{stockData.changeValue}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-white mb-6">{stockData.price}</div>
                
                {/* Chart Placeholder */}
                <div className="bg-gray-700 rounded-lg p-8 text-center">
                  <div className="text-gray-400 mb-4">
                    <TrendingUp className="h-12 w-12 mx-auto mb-2" />
                    <p>Historical Chart</p>
                    <p className="text-sm">Chart visualization would go here</p>
                  </div>
                  <div className="flex justify-center space-x-4 mt-4">
                    <Button variant="outline" size="sm" className="border-gray-600 text-gray-300">1D</Button>
                    <Button variant="outline" size="sm" className="border-gray-600 text-gray-300">1W</Button>
                    <Button size="sm" className="bg-blue-600">1M</Button>
                    <Button variant="outline" size="sm" className="border-gray-600 text-gray-300">3M</Button>
                    <Button variant="outline" size="sm" className="border-gray-600 text-gray-300">1Y</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Performance Metrics */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Performance Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-gray-700 p-4 rounded-lg">
                    <p className="text-gray-400 text-sm">Volume</p>
                    <p className="text-white font-bold text-lg">{stockData.volume}</p>
                  </div>
                  <div className="bg-gray-700 p-4 rounded-lg">
                    <p className="text-gray-400 text-sm">Market Cap</p>
                    <p className="text-white font-bold text-lg">{stockData.marketCap}</p>
                  </div>
                  <div className="bg-gray-700 p-4 rounded-lg">
                    <p className="text-gray-400 text-sm">P/E Ratio</p>
                    <p className="text-white font-bold text-lg">{stockData.pe}</p>
                  </div>
                  <div className="bg-gray-700 p-4 rounded-lg">
                    <p className="text-gray-400 text-sm">EPS</p>
                    <p className="text-white font-bold text-lg">{stockData.eps}</p>
                  </div>
                  <div className="bg-gray-700 p-4 rounded-lg">
                    <p className="text-gray-400 text-sm">52W High</p>
                    <p className="text-white font-bold text-lg">{stockData.high52w}</p>
                  </div>
                  <div className="bg-gray-700 p-4 rounded-lg">
                    <p className="text-gray-400 text-sm">52W Low</p>
                    <p className="text-white font-bold text-lg">{stockData.low52w}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Trading Actions */}
          <div className="space-y-6">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Trade {stockData.symbol}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                  Buy {stockData.symbol}
                </Button>
                <Button variant="outline" className="w-full border-red-600 text-red-400 hover:bg-red-600 hover:text-white">
                  Sell {stockData.symbol}
                </Button>
                <Button variant="outline" className="w-full border-gray-600 text-gray-300 hover:bg-gray-700">
                  Add to Watchlist
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Your Position</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Shares Owned</span>
                    <span className="text-white font-medium">25</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Average Cost</span>
                    <span className="text-white font-medium">$438.20</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Total Value</span>
                    <span className="text-white font-bold">$11,280.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Unrealized P&L</span>
                    <span className="text-green-400 font-medium">+$325.00 (+2.97%)</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};
