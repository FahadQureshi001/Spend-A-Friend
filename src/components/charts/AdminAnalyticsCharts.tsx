
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CustomLineChart } from './LineChart';

const mockUserGrowthData = [
  { date: '2024-01-01', users: 850, signups: 45 },
  { date: '2024-01-07', users: 912, signups: 62 },
  { date: '2024-01-14', users: 985, signups: 73 },
  { date: '2024-01-21', users: 1067, signups: 82 },
  { date: '2024-01-28', users: 1156, signups: 89 },
  { date: '2024-02-04', users: 1248, signups: 92 },
];

const mockRevenueData = [
  { date: '2024-01-01', mrr: 12500, arr: 150000 },
  { date: '2024-01-07', mrr: 13200, arr: 158400 },
  { date: '2024-01-14', mrr: 13800, arr: 165600 },
  { date: '2024-01-21', mrr: 14500, arr: 174000 },
  { date: '2024-01-28', mrr: 15200, arr: 182400 },
  { date: '2024-02-04', mrr: 15900, arr: 190800 },
];

const mockTransactionData = [
  { date: '2024-01-01', volume: 245000, count: 1240 },
  { date: '2024-01-07', volume: 267000, count: 1356 },
  { date: '2024-01-14', volume: 289000, count: 1478 },
  { date: '2024-01-21', volume: 312000, count: 1592 },
  { date: '2024-01-28', volume: 334000, count: 1708 },
  { date: '2024-02-04', volume: 356000, count: 1847 },
];

export const AdminAnalyticsCharts = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-white border-gray-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-gray-900">User Growth</CardTitle>
          </CardHeader>
          <CardContent>
            <CustomLineChart 
              data={mockUserGrowthData}
              xKey="date"
              yKey="users"
              color="#3b82f6"
              title="Total Users"
            />
          </CardContent>
        </Card>

        <Card className="bg-white border-gray-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-gray-900">Daily Signups</CardTitle>
          </CardHeader>
          <CardContent>
            <CustomLineChart 
              data={mockUserGrowthData}
              xKey="date"
              yKey="signups"
              color="#10b981"
              title="New Signups"
            />
          </CardContent>
        </Card>

        <Card className="bg-white border-gray-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-gray-900">Monthly Recurring Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <CustomLineChart 
              data={mockRevenueData}
              xKey="date"
              yKey="mrr"
              color="#f59e0b"
              title="MRR ($)"
            />
          </CardContent>
        </Card>

        <Card className="bg-white border-gray-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-gray-900">Investment Volume</CardTitle>
          </CardHeader>
          <CardContent>
            <CustomLineChart 
              data={mockTransactionData}
              xKey="date"
              yKey="volume"
              color="#8b5cf6"
              title="Volume ($)"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
