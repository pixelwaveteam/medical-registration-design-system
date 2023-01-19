import { format, toDate } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";

export const convertToTimeZone = (
  value: Date,
  userTimeZone: string = "America/Sao_Paulo",
  formatString: string = "dd/MM/yyyy"
) => {
  const date = toDate(new Date(value));

  const convertTimeZone = utcToZonedTime(date, userTimeZone);

  return format(convertTimeZone, formatString);
};
