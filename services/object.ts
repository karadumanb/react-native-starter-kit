interface GenericObject<T> {
  [key: string]: T;
}

const ObjectService = {
  flattenPayload: (obj: GenericObject<any>): any => {
    let result: GenericObject<any> = {};

    const flat = (o: GenericObject<any>, key?: string) => {
      Object.keys(o).forEach((k) => {
        if (typeof o[k] === "object") {
          flat(o[k], key ? `${key}.${k}` : k);
        } else {
          result[`${key ? `${key}.${k}` : k}`] = o[k];
        }
      });
    };

    flat(obj);

    return result;
  },
};

export default ObjectService;
