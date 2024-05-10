import { type ReactElement } from 'react';
import { useLoaderData } from 'react-router-dom';

import { type Model } from '@/types.ts';
import ModelCard from '@/components/model-card';

function Index(): ReactElement {
  const { models } = useLoaderData() as { models: Model[] };

  return (
    <div className='flex flex-wrap justify-center gap-4 bg-white py-4 dark:bg-slate-800'>
      {models.map((model) => (
        <ModelCard key={model.name} model={model} />
      ))}
    </div>
  );
}

export default Index;
