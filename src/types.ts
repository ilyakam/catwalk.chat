type ModelFeature =
  | 'document'
  | 'image'
  | 'microphone'
  | 'search'
  | 'upsell'
  | 'video';

interface Model {
  description: string;
  developer: string;
  features: ModelFeature[];
  image: string;
  name: string;
  release_date: string;
  url: string;
}

export type {
  Model,
  ModelFeature,
};
