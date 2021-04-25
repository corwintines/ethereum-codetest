const getDatesBetween = (startDate, endDate) => {
  const dates = [];

  // Strip hours minutes seconds etc.
  let currentDate = new Date(
      startDate.getUTCFullYear(),
      startDate.getUTCMonth(),
      startDate.getUTCDate()
  );

  while (currentDate <= endDate) {
      dates.push(currentDate);

      currentDate = new Date(
          currentDate.getUTCFullYear(),
          currentDate.getUTCMonth(),
          currentDate.getUTCDate() + 1, // Will increase month if over range
      );
  }

  dates.push(currentDate)

  return dates;
};

export default getDatesBetween