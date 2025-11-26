[![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)](https://stenciljs.com)

# Manta UI

A modern web component library with design tokens and dark mode support, built with Stencil.

## Features

- 🎨 **Design Tokens** - Consistent CSS custom properties for colors, spacing, typography, and more
- 🌙 **Dark Mode** - Automatic support via `prefers-color-scheme` + manual toggle
- 🧩 **Web Components** - Framework-agnostic components that work anywhere
- 📦 **Tree-shakeable** - Import only the components you need
- ♿ **Accessible** - Built with accessibility in mind

## Installation

```bash
npm install manta-ui
```

## Usage

### 1. Import the Styles

Import the global CSS that includes design tokens:

```js
// In your JavaScript/TypeScript entry file
import 'manta-ui/css';
```

Or in HTML:

```html
<link rel="stylesheet" href="node_modules/manta-ui/dist/manta-ui/manta-ui.css" />
```

### 2. Load Components

**Lazy Loading (Recommended):**

```html
<script type="module" src="https://unpkg.com/manta-ui"></script>
```

Or in your app:

```js
import 'manta-ui';
```

**Standalone Components:**

```js
import 'manta-ui/dist/components/manta-button.js';
```

### 3. Use Components

```html
<manta-button>Click Me</manta-button>
<manta-button variant="secondary">Secondary</manta-button>
<manta-button variant="danger" size="large">Delete</manta-button>
```

## Design Tokens

Manta UI uses CSS custom properties (variables) for consistent styling. All tokens are prefixed with `--manta-`.

### Colors

```css
/* Primary Colors */
--manta-color-primary-500: #2196f3;

/* Semantic Colors */
--manta-color-success: #4caf50;
--manta-color-warning: #ff9800;
--manta-color-error: #f44336;
--manta-color-info: #2196f3;

/* Surface Colors */
--manta-color-background: #ffffff;
--manta-color-surface: #ffffff;

/* Text Colors */
--manta-color-text-primary: rgba(0, 0, 0, 0.87);
--manta-color-text-secondary: rgba(0, 0, 0, 0.6);
```

### Spacing

```css
--manta-spacing-xs: 0.25rem;  /* 4px */
--manta-spacing-sm: 0.5rem;   /* 8px */
--manta-spacing-md: 1rem;     /* 16px */
--manta-spacing-lg: 1.5rem;   /* 24px */
--manta-spacing-xl: 2rem;     /* 32px */
```

### Typography

```css
--manta-font-family-base: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, ...;
--manta-font-size-sm: 0.875rem;
--manta-font-size-md: 1rem;
--manta-font-size-lg: 1.125rem;
```

### Border Radius

```css
--manta-radius-sm: 0.125rem;
--manta-radius-md: 0.25rem;
--manta-radius-lg: 0.5rem;
--manta-radius-full: 9999px;
```

### Shadows

```css
--manta-shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--manta-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), ...;
--manta-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), ...;
```

## Dark Mode

Dark mode is supported in two ways:

### 1. Automatic (System Preference)

The design tokens automatically adapt based on `prefers-color-scheme`:

```css
@media (prefers-color-scheme: dark) {
  /* Dark mode styles applied automatically */
}
```

### 2. Manual Toggle

Use the `data-theme` attribute to enable dark mode:

```html
<html data-theme="dark">
<!-- or for light mode override -->
<html data-theme="light">
```

Toggle with JavaScript:

```js
const html = document.documentElement;
const currentTheme = html.getAttribute('data-theme');
html.setAttribute('data-theme', currentTheme === 'dark' ? 'light' : 'dark');
```

## Components

### manta-button

A customizable button component.

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `text` | `string` | - | Button text (or use slot) |
| `variant` | `'primary' \| 'secondary' \| 'ghost' \| 'danger'` | `'primary'` | Visual style |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Button size |
| `disabled` | `boolean` | `false` | Disabled state |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | Button type |

**Examples:**

```html
<manta-button>Primary</manta-button>
<manta-button variant="secondary">Secondary</manta-button>
<manta-button variant="ghost">Ghost</manta-button>
<manta-button variant="danger">Danger</manta-button>
<manta-button size="small">Small</manta-button>
<manta-button size="large">Large</manta-button>
<manta-button disabled>Disabled</manta-button>
```

## Development

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Run Storybook
npm run storybook
```

## License

MIT