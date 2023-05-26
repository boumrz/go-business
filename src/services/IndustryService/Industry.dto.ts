export interface SubindustryDto {
  id: string;
  name: string;
  averageEmployeeCount2020: number;
  averageEmployeeCount2021: number;
  averageSalary2020: number;
  averageSalary2021: number;
  taxToMoscowBudget2021: number;
  taxToMoscowBudget2022: number;
  incomeTax2021: number;
  incomeTax2022: number;
  propertyTax2021: number;
  propertyTax2022: number;
  landTax2021: number;
  landTax2022: number;
  personalIncomeTax2021: number;
  personalIncomeTax2022: number;
  transportTax2021: number;
  transportTax2022: number;
  otherTax2021: number;
  otherTax2022: number;
}

export interface IndustryDto {
  name: string;
  subindustry: Array<SubindustryDto>;
}

export interface IndustryRequest {
  name?: string; // название отрасли
}
