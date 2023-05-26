export interface RegionDto {
  id: string;
  name: string;
  rent: number;
}

export interface DistrictDto {
  id: string;
  district: string;
  regions: Array<RegionDto>;
  averageCost: number;
}
