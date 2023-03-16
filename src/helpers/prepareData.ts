/* eslint-disable @typescript-eslint/no-explicit-any */
const months = [
  'Janvier',
  'Février',
  'Mars',
  'Avril',
  'Mai',
  'Juin',
  'Juillet',
  'Août',
  'Septembre',
  'Octobre',
  'Novembre',
  'Décembre',
];

const formatDate = (isoDate: Date) => {
  const date = new Date(isoDate);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day.toString().padStart(2, '0')}/${month
    .toString()
    .padStart(2, '0')}/${year}`;
};

export const prepareData = (rawData: any) => {
  const data = { ...rawData };
  const [year, month] = rawData.month.split('-');

  data.month = months[parseInt(month)];
  data.year = year;

  data.paymentDate = formatDate(rawData.paymentDate);

  data.rent = parseInt(rawData.rent);
  data.charge = parseInt(rawData.charge || 0);

  return data;
};
