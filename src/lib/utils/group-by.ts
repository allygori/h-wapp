const groupBy = <T, K extends keyof any>(list: T[], getKey: (item: T) => K) => {
  return list.reduce(
    (previous, currentItem) => {
      const group = getKey(currentItem);
      if (!previous[group]) previous[group] = [];
      previous[group].push(currentItem);
      return previous;
    },
    {} as Record<K, T[]>,
  );
};

// const groupBy = <T, K extends keyof any>(arr: T[], key: (i: T) => K) => {
//   return arr.reduce(
//     (groups, item) => {
//       (groups[key(item)] ||= []).push(item);
//       return groups;
//     },
//     {} as Record<K, T[]>,
//   );
// };

export default groupBy;
