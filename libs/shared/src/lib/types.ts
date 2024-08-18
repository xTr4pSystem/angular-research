type Paths<T> = T extends object
  ? {
      [K in keyof T]: K extends string ? K | `${K}.${Paths<T[K]>}` : never;
    }[keyof T]
  : never;

type ExampleType = {
  doo: {
    bar: number;
    baz: string;
  };
  hello: {
    dear: boolean;
  };
};

type ExamplePaths = Paths<ExampleType>;

type TypeAt<T, Path extends Paths<T>> = Path extends keyof T
  ? T[Path]
  : Path extends `${infer K}.${infer Rest}`
  ? K extends keyof T
    ? Rest extends Paths<T[K]>
      ? TypeAt<T[K], Rest>
      : never
    : never
  : never;

type XB = TypeAt<ExampleType, 'doo.bar'>;
