interface BuildingCostIdAndAreaPairListType {
  first: string; // id недвижимости
  second: string; // площадь недвижимости
}

interface OtherNeedsType {
  first: string; // название потребности
  second: string; // площадь потребности
}

interface EquipmentIdAndCountPairListType {
  first: string; // id оборудования
  second: string; // количество оборудования
}

export interface CalculationRequest {
  organizationalAndLegalForm?: string; // LLC (юр лицо) / IE (ИП)
  taxationSystemType?: string; // General (общая), Simplified (упрощенная), Patent (Патент)
  industryId?: string; // область производства
  subindustryId?: string; // подотрасль производства
  regionNames?: Array<string>; // передать все районы без округов
  areaOnRegions?: number; // площадь земельного участка
  buildingCostIdAndAreaPairList?: Array<BuildingCostIdAndAreaPairListType>; // id и площадь объектов недвижимости
  otherCapitalBuildingCostIdAndAreaPairList?: Array<BuildingCostIdAndAreaPairListType>; // id и площадь иных объектов недвижимости
  equipmentIdAndCountPairList?: Array<EquipmentIdAndCountPairListType>; // id и количество оборудования
  staffCount?: number; // число сотрудников
  averageSalary?: number; // зарплата
  otherNeeds?: Array<OtherNeedsType>; // аналогично buildCostIdAndAreaPairList (first: потребность, second: площадь)
}

export interface CalculationResponse {
  id: string; // айди расчетки
  capitalInvestmentsLandCostMinTotalLandCost: number; // минимальные затраты на покупку земли (не используется)
  capitalInvestmentsLandCostMaxTotalLandCost: number; // максимальные затраты на покупку земли (не используется)
  capitalInvestmentsTotalBuildingCost: number; // Строительство зданий
  capitalInvestmentsCapitalTotalBuildingCost: number; // Прочие объекты капитального строительства
  capitalInvestmentsTotalMinCost: number; // минимальные капитальные вложения
  capitalInvestmentsTotalMaxCost: number; // максимальные капитальные вложения
  costsOfOpeningProductionEquipmentPurchasePriceTotalEquipmentCost: number; // приобретение оборудования
  costsOfOpeningProductionHiringStaffTotalStaffCost: number; // найм персонала
  costsOfOpeningProductionPurchasePatentPatentCost: number; // покупка патента
  costsOfOpeningProductionTotalCost: number; // затраты на открытие производства
  allTax: number; // все налоги (не используется)
  totalSalaryPayment: number; // заработная плата
  accountingCost: number; // ведение бух учета
  totalCostMinOfAll: number; // минимальный общий объем инвестиций
  totalCostMaxOfAll: number; // максимальный общий объем инвестиций
}
