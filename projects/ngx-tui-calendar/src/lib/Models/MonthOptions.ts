export interface MonthOptions {
  daynames?: string[];
  startDayOfWeek?: number;
  narrowWeekend?: boolean;
  visibleWeeksCount?: number;
  isAlways6Week?: boolean;
  workWeek?: boolean;
  visibleScheduleCount?: number;
  moreLayerSize?: { width?: object, height?: object };
  grid?: {
    header?: { height?: number },
    footer?: { height?: number }
  };
}
