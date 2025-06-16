
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CustomLineChart } from './LineChart';

const mockInvestmentData = [
  { date: '2024-01-01', amount: 1000 },
  { date: '2024-01-07', amount: 1250 },
  { date: '2024-01-14', amount: 1800 },
  { date: '2024-01-21', amount: 2100 },
  { date: '2024-01-28', amount: 2450 },
  { date: '2024-02-04', amount: 2890 },
  { date: '2024-02-11', amount: 3200 },
];

export const InvestmentChart = () => {
  return (
    <Card className="bg-white border-gray-200 shadow-sm">
      <CardHeader>
        <CardTitle className="text-gray-900">Investment Growth Over Time</CardTitle>
      </CardHeader>
      <CardContent>
        <CustomLineChart 
          data={mockInvestmentData}
          xKey="date"
          yKey="amount"
          color="#10b981"
          title="Investment Amount ($)"
        />
      </CardContent>
    </Card>
  );
};
