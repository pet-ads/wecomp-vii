import type { AvailabilityStatus } from "../../../../commons/toolkit/tags/types";
import type { TypeEventName } from "../../types";

export interface PaginationProps {
  current: number;
  total: number;
  onNext: () => void;
  onPrev: () => void;
}
export interface CardFooterProps {
  vacancies: string | number;
  link: string;
  labelButton: string;
  status: AvailabilityStatus;
  handleChangeCardText: () => void;
  typeEvent: TypeEventName;
  pagination?: PaginationProps;
}
