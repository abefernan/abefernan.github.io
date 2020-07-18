export { applyRandomTheme };

function applyRandomTheme(): void {
  const randomTheme = themes[Math.floor(Math.random() * themes.length)];

  for (const [colorProperty, colorValue] of Object.entries(randomTheme)) {
    document.documentElement.style.setProperty(colorProperty, colorValue);
  }
}

const themes: readonly Theme[] = [
  {
    '--color-bg-1': '#fff',
    '--color-bg-2': '#000',
    '--color-title-1': '#000',
    '--color-title-2': '#fff',
    '--color-text': '#000',
  },
  {
    '--color-bg-1': '#4f8a8b',
    '--color-bg-2': '#ea907a',
    '--color-title-1': '#ffcb74',
    '--color-title-2': '#f4f6ff',
    '--color-text': '#f4f6ff',
  },
  {
    '--color-bg-1': '#efefef',
    '--color-bg-2': '#8faf9f',
    '--color-title-1': '#dca3a3',
    '--color-title-2': '#f0dfaf',
    '--color-text': '#3f3f3f',
  },
  {
    '--color-bg-1': '#3498db',
    '--color-bg-2': '#2980b9',
    '--color-title-1': '#f1c40f',
    '--color-title-2': '#fff',
    '--color-text': '#ecf0f1',
  },
  {
    '--color-bg-1': '#fff',
    '--color-bg-2': '#c0392b',
    '--color-title-1': '#34495e',
    '--color-title-2': '#fff',
    '--color-text': '#2c3e50',
  },
];

interface Theme {
  readonly [key: string]: string;
}
