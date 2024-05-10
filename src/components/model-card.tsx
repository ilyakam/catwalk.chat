import { type ReactElement } from 'react';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { type Model } from '@/types.ts';
import ModelFeatures from '@/components/model-features';

interface ModelCardProps {
  model: Model;
}

function ModelCard({ model }: ModelCardProps): ReactElement {
  return (
    <Card className='flex h-128 w-96 flex-col justify-between gap-2 shadow-md dark:border-slate-300 dark:bg-slate-700'>
      <a
        className='relative h-52 w-full overflow-hidden rounded-t-md bg-slate-50 dark:bg-slate-600'
        href={model.url || '#'}
        rel="noopener noreferrer"
        target="_blank"
      >
        <img
          alt={`${model.name} image`}
          className='absolute inset-0 m-auto object-cover'
          src={new URL(`../assets/${model.image}`, import.meta.url).href}
          title={model.name}
        />
      </a>

      <div className='flex px-2 text-xl font-semibold text-slate-800 dark:text-slate-300'>
        <img
          alt={model.developer}
          className='mr-2 size-8'
          src={new URL(`../assets/${model.developer.toLowerCase()}-logo.svg`, import.meta.url).href}
          title={model.developer}
        />
        { model.developer } { model.name }
      </div>

      <div className='flex-1 overflow-y-auto px-2 dark:text-slate-300'>
        {model.description.split('\n\n').map((description, i) => (
          <p className='pt-2' key={i + ''}>{ description }</p>
        ))}
      </div>

      <div className='flex-none'>
        <div className='mx-2 mb-2 flex justify-between'>
          <ModelFeatures features={model.features} />

          <div className='flex'>
            <Button
              asChild
              className='rounded-lg bg-cyan-800 px-4 py-2 text-white'
            >
              <a
                href={model.url || '#'}
                rel="noopener noreferrer"
                target="_blank"
              >
                Go!
              </a>
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default ModelCard;
