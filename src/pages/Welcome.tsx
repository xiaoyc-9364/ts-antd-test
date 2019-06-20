import React from 'react';

enum Color {
  Red = 1,
  Green,
  Blue,
}
interface SearchFunc {
  (source: string, subString: string): string;
}
let mySearch: SearchFunc;
mySearch = (source:string, subString: string) => {
  return source + subString
}
export default (): React.ReactNode => {
  const colorName: string = Color[3];
  const list: any[] = [1, ' akkkk', false];
  const someValue: any = 'this is a string';

  const strLength: number = (someValue as string).length;
  const a: number[] = [1, 2, 3, 4];
  const ro: ReadonlyArray<number> = a;

  return (
    <p style={{ textAlign: 'center' }}>
      Want to add more pages? Please refer to {strLength}
      <a href="https://pro.ant.design/docs/block-cn" target="_blank" rel="noopener noreferrer">
        use block
      </a>
      。{ro.map(i => i)}
      <p>{mySearch('aldkjlf', 'uuu')}</p>
    </p>
  );
};
