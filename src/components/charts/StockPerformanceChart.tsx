
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CustomLineChart } from './LineChart';

const mockStockData = [
  { date: '2024-01-01', nvidia: 425, apple: 182, tesla: 215 },
  { date: '2024-01-07', nvidia: 438, apple: 184, tesla: 212 },
  { date: '2024-01-14', nvidia: 445, apple: 186, tesla: 208 },
  { date: '2024-01-21', nvidia: 449, apple: 185, tesla: 210 },
  { date: '2024-01-28', nvidia: 451, apple: 185, tesla: 211 },
];

export const StockPerformanceChart = () => {
  return (
    <Card className="bg-white border-gray-200 shadow-sm">
      <CardHeader>
        <CardTitle className="text-gray-900">Stock Performance Trends</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <CustomLineChart 
            data={mockStockData}
            xKey="date"
            yKey="nvidia"
            color="#3b82f6"
            title="Stock Prices ($)"
          />
        </div>
      </CardContent>
    </Card>
  );
};
