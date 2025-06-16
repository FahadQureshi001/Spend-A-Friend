
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown } from 'lucide-react';

const mockTotalHoldings = {
  totalValue: '$15,045.36',
  totalGain: '+$567.41',
  percentageGain: '+2.3%',
  isPositive: true
};

const mockStockBreakdown = [
  { symbol: 'NVIDIA', name: 'NVIDIA Corporation', shares: 25, avgPrice: '$425.20', currentPrice: '$451.20', value: '$11,280.00', gain: '+$650.00', percentGain: '+6.1%', isPositive: true },
  { symbol: 'AAPL', name: 'Apple Inc.', shares: 50, avgPrice: '$180.40', currentPrice: '$185.40', value: '$9,270.00', gain: '+$250.00', percentGain: '+2.8%', isPositive: true },
  { symbol: 'AMD', name: 'Advanced Micro Devices', shares: 75, avgPrice: '$140.80', currentPrice: '$142.80', value: '$10,710.00', gain: '+$150.00', percentGain: '+1.4%', isPositive: true },
  { symbol: 'TSLA', name: 'Tesla Inc.', shares: 30, avgPrice: '$215.50', currentPrice: '$210.50', value: '$6,315.00', gain: '-$150.00', percentGain: '-2.3%', isPositive: false },
];

export const InvestmentTabs = () => {
  return (
    <Card className="shadow-sm border-gray-200">
      <CardHeader className="border-b border-gray-100">
        <CardTitle className="text-xl font-semibold text-gray-900">Investment Portfolio</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <Tabs defaultValue="total" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="total">Total Holdings</TabsTrigger>
            <TabsTrigger value="breakdown">Stock Breakdown</TabsTrigger>
          </TabsList>
          
          <TabsContent value="total" className="space-y-6">
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
              <h3 className="text-lg font-medium text-blue-700 mb-2">Total Portfolio Value</h3>
              <div className="text-4xl font-bold text-blue-900 mb-2">{mockTotalHoldings.totalValue}</div>
              <div className={`text-lg font-medium flex items-center justify-center ${mockTotalHoldings.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                {mockTotalHoldings.isPositive ? (
                  <TrendingUp className="h-5 w-5 mr-1" />
                ) : (
                  <TrendingDown className="h-5 w-5 mr-1" />
                )}
                {mockTotalHoldings.totalGain} ({mockTotalHoldings.percentageGain})
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {mockStockBreakdown.map((stock) => (
                <div key={stock.symbol} className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-gray-900">{stock.symbol}</h4>
                    <Badge variant={stock.isPositive ? 'default' : 'secondary'} 
                           className={stock.isPositive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}>
                      {stock.percentGain}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{stock.name}</p>
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Value:</span>
                      <span className="font-medium">{stock.value}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Gain/Loss:</span>
                      <span className={`font-medium ${stock.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                        {stock.gain}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="breakdown" className="space-y-4">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left py-3 px-4 text-gray-700 font-medium text-sm">Stock</th>
                    <th className="text-left py-3 px-4 text-gray-700 font-medium text-sm">Shares</th>
                    <th className="text-left py-3 px-4 text-gray-700 font-medium text-sm">Avg Price</th>
                    <th className="text-left py-3 px-4 text-gray-700 font-medium text-sm">Current Price</th>
                    <th className="text-left py-3 px-4 text-gray-700 font-medium text-sm">Total Value</th>
                    <th className="text-left py-3 px-4 text-gray-700 font-medium text-sm">Gain/Loss</th>
                  </tr>
                </thead>
                <tbody>
                  {mockStockBreakdown.map((stock) => (
                    <tr key={stock.symbol} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4">
                        <div>
                          <div className="font-medium text-gray-900">{stock.symbol}</div>
                          <div className="text-sm text-gray-600">{stock.name}</div>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-gray-900">{stock.shares}</td>
                      <td className="py-3 px-4 text-gray-900">{stock.avgPrice}</td>
                      <td className="py-3 px-4 text-gray-900">{stock.currentPrice}</td>
                      <td className="py-3 px-4 text-gray-900 font-medium">{stock.value}</td>
                      <td className="py-3 px-4">
                        <div className={`font-medium ${stock.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                          <div>{stock.gain}</div>
                          <div className="text-sm">{stock.percentGain}</div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};
