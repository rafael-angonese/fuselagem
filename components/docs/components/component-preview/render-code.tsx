import { Code } from '@/components/mdx-components';
import { ComponentName, example } from '@/components/registry/example';
import fs from "fs";
import React from 'react';

export interface RenderCodeProps {
    name: ComponentName
}

export default async function RenderCode({ name }) {

  const files = example[name]?.files

    const filePath = files[0].file

    let content;

    try {
      content = fs.readFileSync(filePath, 'utf8');
    } catch (err) {
      console.error('deu erro')
      console.log(err)
    }

    return (
        <>
         <Code className="jsx">
            {content}
          </Code>
        </>
    )
}
