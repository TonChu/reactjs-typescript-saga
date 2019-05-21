
export const normalizeData = (data = [], keyName = 'id', saveList = false) => {
  if (!data) return {};
  const entities = {} as any;
  const list = [];
  for (let i = 0; i < data.length; i++) {
    const obj = data[i] as any | {};
    if (obj && !obj.hasOwnProperty(keyName)) {
      console.error(`Can not normalize object with keyName=${keyName}`, obj);
    } else {
      const key = obj[keyName];
      entities[key] = obj;
      if (saveList) list.push(key);
    }
  }
  if (saveList) return { entities, list };
  return entities;
};
