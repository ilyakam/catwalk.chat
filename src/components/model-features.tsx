import {
  FilePlus2,
  HandCoins,
  ImagePlus,
  Mic,
  Search,
  Video,
} from 'lucide-react';

import { type ReactElement } from 'react';

import { type ModelFeature } from '@/types.ts';

interface ModelFeaturesProps {
  features: ModelFeature[];
}

const featuresHash: Record<ModelFeature, React.ReactNode> = {
  'document': (
    <span
      aria-label='Document upload'
      key='document'
      title='Document upload'
    >
      <FilePlus2 />
    </span>
  ),
  'image': (
    <span
      aria-label='Image upload'
      key='image'
      title='Image upload'
    >
      <ImagePlus />
    </span>
  ),
  'microphone': (
    <span
      aria-label='Voice typing'
      key='microphone'
      title='Voice typing'
    >
      <Mic />
    </span>
  ),
  'search': (
    <span
      aria-label='Search engine'
      key='search'
      title='Search engine'
    >
      <Search />
    </span>
  ),
  'upsell': (
    <span
      aria-label='Paid upgrade'
      key='upsell'
      title='Paid upgrade'
    >
      <HandCoins />
    </span>
  ),
  'video': (
    <span
      aria-label='Video upload'
      key='video'
      title='Video upload'
    >
      <Video />
    </span>
  ),
};

function ModelFeatures({ features }: ModelFeaturesProps): ReactElement {
  return (
    <div className='flex items-end gap-2 text-slate-600 dark:text-slate-400'>
      {features.map((feature) => (
        featuresHash[feature]
      ))}
    </div>
  );
}

export default ModelFeatures;
