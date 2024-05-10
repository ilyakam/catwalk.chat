# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.4.0] - 2024-05-10

### Added

- Header saying "catwalk.chat" with a faint gradient
- Footer with a copyright notice that remains dark and extends to the bottom
- React Router that loads the models asynchronously
- Root layout
- Nested index route
- New components for `<ModelCard>`, `<ModelFeatures>`, `<Index>`, and `<Root>`
- Separate type annotations for `Model` and a finite set of `ModelFeature`-s
- Font family definition called `times` for Times-based serif typefaces
- Bright border around the model cards in dark mode

### Changed

- Reorder the models

### Fixed

- Protruding model images past the cards' borders
- Ensure dark mode toggles with the browser theme
- Prevent overscrolling to maintain a neat background

### Removed

- Catch-all `<App>` component

## [0.3.0] - 2024-05-06

### Added

- Models from Microsoft, OpenAI, Perplexity, Mistral, Reka, Databricks, Apple, AWS, and NVIDIA
- Feature icons for "video," "upsell," and "search"

### Changed

- Lighten the image background color in dark mode

## [0.2.0] - 2024-05-06

### Added

- Meta Llama 3 and Anthropic Claude 3 models using `models.json`
- Clickable model image and "Go!" button
- Tooltips for the feature icons
- TypeScript annotation for the `model` objects
- Website `<title>` to `index.html`
- `"description"` and `"homepage"` to `package.json`
- Sparkles emoji (✨) favicon

### Changed

- Remove horizontal padding from the model image

## [0.1.1] - 2024-05-01

### Fixed

- Update the `vite-static-workflow` to use pnpm instead of npm

## [0.1.0] - 2024-05-01

### Added

- Scaffolding using Vite, React, TypeScript, shadcn/ui, and lint tools
