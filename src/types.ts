export interface StyleDefinition {
  id: number;
  name: string;
  slug: string;
  category: 't-clean' | 't-neon' | 't-glass' | 't-brutal' | 't-clay' | 't-retro' | 't-medical' | 't-dark';
  group: string;
  prompt: string;
  tags: string[];
}

export type ThemeConfig = {
  container: string;
  card: string;
  button: string;
  visual: string;
  text: string;
  subtext: string;
};
