import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

import {
  FilePlus2,
  ImagePlus,
  Mic,
} from 'lucide-react';

import rawModels from './assets/models.json?raw';
import React from 'react';

interface Model {
  description: string;
  developer: string;
  features: string[];
  image: string;
  name: string;
  release_date: string;
  url: string;
}

const models: Model[] = JSON.parse(rawModels);

function App() {
  const getFeatureIcon = (feature: string) => {
    const featuresHash: Record<string, React.ReactNode> = {
      'document': (
        <span key={feature} title='Document upload' aria-label='Document upload'>
          <FilePlus2 />
        </span>
      ),
      'image': (
        <span key={feature} title='Image upload' aria-label='Image upload'>
          <ImagePlus />
        </span>
      ),
      'microphone': (
        <span key={feature} title='Voice typing' aria-label='Voice typing'>
          <Mic />
        </span>
      ),
    };

    return featuresHash[feature];
  };

  return (
    <div className='flex flex-wrap justify-center gap-4'>
      {models.map((model) => (
        <Card
          className='flex h-128 w-96 flex-col justify-between gap-2 shadow-md dark:bg-slate-700'
          key={model.name}
          >
          <a
            className='relative h-52 w-full overflow-hidden bg-slate-50 dark:bg-slate-800'
            href={model.url || '#'}
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              alt={`${model.name} image`}
              className='absolute inset-0 m-auto object-cover'
              src={new URL(`./assets/${model.image}`, import.meta.url).href}
              title={model.name}
            />
          </a>

          <div className='flex px-2 text-xl font-semibold text-slate-800 dark:text-slate-300'>
            <img
              alt={model.developer}
              className='mr-2 size-8'
              src={new URL(`./assets/${model.developer.toLowerCase()}-logo.svg`, import.meta.url).href}
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
              <div className='flex items-end gap-2 text-slate-600 dark:text-slate-400'>
                {model.features.map((feature) => (
                  getFeatureIcon(feature)
                ))}
              </div>
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
      ))}
    </div>
  );
}

export default App;
