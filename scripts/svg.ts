import { camelCase, upperFirst } from 'lodash';
import { access, readFile, readdir, writeFile } from 'node:fs/promises';
const getFiles = async (isAll?: boolean) => {
  try {
    const files = await readdir('./svgs');
    if (isAll) {
      return files.map((file) => {
        let [fileName1] = file.split('.svg');
        [fileName1] = fileName1.split('_default');
        return upperFirst(camelCase(fileName1));
      });
    }
    for (const file of files) {
      const res = await readFile(`./svgs/${file}`, 'utf-8');
      console.log(res);
      let [fileName1] = file.split('.svg');
      [fileName1] = fileName1.split('_default');
      const fileName = upperFirst(camelCase(fileName1));

      try {
        await access(`./src/component/Icons/components/${fileName}.tsx`);
        // throw new Error('123');
      } catch {
        await writeFile(
          `./src/component/Icons/svg/${fileName}.svg`,
          file.includes('color')
            ? res
                .replace(/width="\S+"/, 'width="1em"')
                .replace(/height="\S+"/, 'height="1em"')
            : res
                .replace(/fill="\S+"/g, 'fill="currentColor"')
                .replace(/width="\S+"/, 'width="1em"')
                .replace(/height="\S+"/, 'height="1em"'),
        );
        await writeFile(
          `./src/component/Icons/components/${fileName}.tsx`,
          `

      import React, {memo, type CSSProperties } from 'react';
      import Icon from '@ant-design/icons';
      import { ReactComponent as ${fileName}Svg } from '../svg/${fileName}.svg';
      export type IProps={
        className?:string;
        style?:CSSProperties;
        spin?:boolean;
      }
      const ${fileName}=(props:IProps)=>{
        return <Icon component={${fileName}Svg} {...props}></Icon>
      }
      export default memo(${fileName}) as typeof ${fileName}
            `,
        );
      }
    }
  } catch (err) {
    console.error(err);
  }
};
console.log(getFiles);
// getFiles();

const generateIcons = async () => {
  await getFiles();
  const fileList = await getFiles(true);
  await writeFile(
    `./src/component/Icons/index.tsx`,
    `${
      fileList
        ?.map((file) => `import ${file} from './components/${file}';`)
        .join('') || ''
    }
      export default {${fileList?.map((file) => `${file}`).join(',')}}`,
  );
  await writeFile(
    `./src/component/Icon/iconType.d.ts`,
    `/**
    * icon 类型，通用图表svg
    */
   export type AllIconType =${fileList?.map((file) => `"${file}"`).join('|')}`,
  );
};

generateIcons();
