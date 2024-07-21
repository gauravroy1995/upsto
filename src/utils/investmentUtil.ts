import {ResponseData} from '../types/commonTypes';

export const calculateCurrentValue = (data: ResponseData): number => {
  return data.ltp * data.quantity;
};

export const calculateInvestmentValue = (data: ResponseData): number => {
  return parseFloat(data.avgPrice) * data.quantity;
};

export const extractProfitLoss = (data: ResponseData): string => {
  const currentValue = data.ltp * data.quantity;
  const investmentValue = parseFloat(data.avgPrice) * data.quantity;
  const pnl = (currentValue - investmentValue).toFixed(2);
  return pnl;
};

type extractFooterInvestmentReturn = {
  totalCurrentValue: number;
  totalInvestmentValue: number;
  totalPNL: number;
  totalTodayPNL: number;
};

export const extractFooterInvestmentData = (
  data: ResponseData[],
): extractFooterInvestmentReturn => {
  data.forEach(item => {
    item.currentValue = calculateCurrentValue(item);
    item.investmentValue = calculateInvestmentValue(item);
  });

  // Calculate Total Current Value and Total Investment Value
  const totalCurrentValue = data.reduce(
    (total, item) => total + (item.currentValue || 0),
    0,
  );
  const totalInvestmentValue = data.reduce(
    (total, item) => total + (item.investmentValue || 0),
    0,
  );

  // Calculate Total P&L
  const totalPNL = totalCurrentValue - totalInvestmentValue;

  // Calculate Total Today's P&L
  const totalTodayPNL = data.reduce(
    (total, item) => total + (item.close - item.ltp) * item.quantity,
    0,
  );

  return {
    totalCurrentValue,
    totalInvestmentValue,
    totalPNL,
    totalTodayPNL,
  };
};
