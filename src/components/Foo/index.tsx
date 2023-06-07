import React, { useEffect, type FC } from 'react';
import { test } from '@/utils';

const Foo: FC<{ title: string }> = () => {
  useEffect(() => {
    test();
  }, []);
  return <div>111</div>;
};

export default Foo;
