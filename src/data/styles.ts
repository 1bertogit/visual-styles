import { StyleDefinition } from '../types';

export const styles: StyleDefinition[] = [
  // FASE 1: ESSENTIAL TECH
  { 
    id: 1, 
    name: "Clean / Flat 2.0",
    slug: "clean-flat-20",
    category: "t-clean", 
    group: "Essential Tech", 
    prompt: "Use a Clean Flat 2.0 style with plenty of white space, light grey backgrounds, and a clear visual hierarchy. Use sans-serif typography (like Inter or Roboto) with 2–3 weights max. Buttons should have solid fills, slightly rounded corners, and subtle hover states. Avoid heavy shadows, textures, gradients, and decorative elements. Focus on clarity, readability, and simple iconography.",
    tags: ["minimal","clean"]
  },
  { 
    id: 2, 
    name: "Bento Grids",
    slug: "bento-grids",
    category: "t-clean", 
    group: "Essential Tech", 
    prompt: "Use a modern Bento Grid layout with multiple cards of different sizes arranged in a balanced but slightly asymmetric grid. Each card should highlight one feature or benefit with a short title, small description, and simple icon or screenshot. Use rounded corners, soft shadows, and consistent spacing between cards. Keep the background clean and let the cards carry most of the color and emphasis.",
    tags: ["minimal","clean"]
  },
  { 
    id: 3, 
    name: "Dark Mode Futurist",
    slug: "dark-mode-futurist",
    category: "t-neon", 
    group: "Essential Tech", 
    prompt: "Use a futuristic dark mode UI with a near-black background (#050509 to #111827) and high-contrast neon accent colors (cyan, magenta, purple, electric green). Typography should be sharp and modern, using a clean sans-serif. Use glowing outlines, subtle gradients, and light bloom around key elements. Focus on a “high-tech console” feel with minimal noise and strong contrast between active and inactive states.",
    tags: ["glow","dark","neon"]
  },
  { 
    id: 4, 
    name: "Glassmorphism",
    slug: "glassmorphism",
    category: "t-glass", 
    group: "Essential Tech", 
    prompt: "Use a Glassmorphism style with translucent frosted-glass cards over a soft gradient or blurred background. Apply strong background blur, subtle inner glow, and light border strokes (1–2px) with semi-transparent white. Use soft shadows to create depth between layers. Keep typography clean and minimal. Accent colors should be used sparingly for buttons and key highlights while the glass surfaces feel airy and floating.",
    tags: ["blur","transparent","gradient"]
  },
  { 
    id: 5, 
    name: "Isometric 3D",
    slug: "isometric-3d",
    category: "t-clean", 
    group: "Essential Tech", 
    prompt: "Use an isometric 3D illustration style with elements viewed at a 3/4 angle. Build simple geometric objects (blocks, screens, servers, buildings) with clear edges and solid colors. Add subtle shadows to show depth and layering. Use a limited color palette with 2–3 main colors and a few accent tones. The overall feel should be clean, technical, and explanatory, ideal for visualizing workflows or infrastructure.",
    tags: ["minimal","clean","3d"]
  },
  { 
    id: 6, 
    name: "Abstract 3D Hero",
    slug: "abstract-3d-hero",
    category: "t-clean", 
    group: "Essential Tech", 
    prompt: "Use an abstract 3D hero style with floating shapes, soft reflections, and smooth materials. Create spheres, blobs, rings, and ribbons with glossy or matte surfaces. Place them around or behind the main headline to frame the content without distracting from the text. Use gradients and lighting to create depth and a premium “startup” feel. Avoid literal metaphors; focus on aesthetic, futuristic abstraction.",
    tags: ["minimal","clean","3d"]
  },
  { 
    id: 7, 
    name: "Neobrutalism",
    slug: "neobrutalism",
    category: "t-brutal", 
    group: "Essential Tech", 
    prompt: "Use a Neo-Brutalism style with bold flat colors, very high contrast, thick black borders (3–4px), and hard drop shadows. Embrace an intentionally “raw” and slightly awkward layout with big typography, simple blocks, and visible grid breaks. Buttons should be highly visible, with thick outlines and strong color fills. Avoid gradients, soft shadows, and subtlety; the design should feel loud, direct, and unmistakable.",
    tags: ["bold","contrast","raw"]
  },
  { 
    id: 8, 
    name: "Aurora UI",
    slug: "aurora-ui",
    category: "t-glass", 
    group: "Essential Tech", 
    prompt: "Use an Aurora-style UI with soft mesh gradients in the background, blending 2–3 complementary colors in a smooth, organic way. The gradients should feel like glowing clouds or northern lights. Place clean, minimal cards and text on top with high contrast for readability. Avoid noisy textures or busy patterns. Let the gradients create atmosphere while the UI elements remain simple, sharp, and modern.",
    tags: ["blur","transparent","gradient"]
  },
  { 
    id: 11, 
    name: "Technical Wireframe",
    slug: "technical-wireframe",
    category: "t-medical", 
    group: "Essential Tech", 
    prompt: "Use a technical wireframe aesthetic with visible grids, fine lines, and labeled sections. Backgrounds can use subtle grid or dot patterns. Use monospaced typography for labels and code-like elements. Include outlines around components, measurement lines, or annotation arrows to emphasize structure and precision. Colors should be mostly neutral (white, grey, dark blue) with 1–2 accent colors for key data or actions. The overall feel should resemble a technical drawing or engineering schematic.",
    tags: ["professional","precise","tech"]
  },

  // FASE 2: TACTILE & CORPORATE
  { 
    id: 9, 
    name: "Neumorphism",
    slug: "neumorphism",
    category: "t-clean", 
    group: "Tactile & Corp", 
    prompt: "Use a Neumorphism (Soft UI) style with a single-color background and UI elements that look extruded from the same surface. Create soft outer and inner shadows to simulate raised and pressed states for buttons, toggles, and cards. Corners should be rounded and transitions very smooth. Use low-contrast tones of the same base color. Avoid hard edges, strong outlines, or busy textures; focus on a tactile, soft, plastic feel.",
    tags: ["minimal","clean"]
  },
  { 
    id: 10, 
    name: "Corporate Memphis",
    slug: "corporate-memphis",
    category: "t-clean", 
    group: "Tactile & Corp", 
    prompt: "Use a Corporate Memphis illustration style with flat vector characters in simplified shapes and exaggerated proportions (long limbs, small heads). Use a limited palette of bright but slightly muted colors and skin tones that are abstract (blue, purple, yellow). Keep strokes minimal or absent. Scenes should depict friendly, collaborative work or everyday life in an office or digital context. Avoid realism and detailed textures; aim for playful, approachable, and corporate-friendly.",
    tags: ["minimal","clean"]
  },
  { 
    id: 12, 
    name: "Claymorphism",
    slug: "claymorphism",
    category: "t-clay", 
    group: "Tactile & Corp", 
    prompt: "Use a Claymorphism style with soft 3D shapes that look like sculpted clay. Elements should have smooth, rounded edges, strong but diffused shadows, and gentle gradients. Buttons and cards should feel chunky and tactile, almost squeezable. Avoid sharp corners or harsh lines; everything should feel playful and soft.",
    tags: ["3d","soft","rounded"]
  },
  { 
    id: 13, 
    name: "Hand-Drawn / Doodle",
    slug: "hand-drawn-doodle",
    category: "t-clean", 
    group: "Tactile & Corp", 
    prompt: "Use a hand-drawn doodle style with sketchy lines, imperfect shapes, and a casual whiteboard feel. Simulate pen or marker strokes with varied line thickness and slightly shaky contours. Use simple color fills and hatching or crosshatching for shading. Icons, arrows, and frames should look annotated by hand. The overall look should feel informal, playful, and exploratory, like a brainstorm on paper rather than a polished corporate illustration.",
    tags: ["minimal","clean"]
  },
  { 
    id: 32, 
    name: "Micro-Animations",
    slug: "micro-animations",
    category: "t-clean", 
    group: "Tactile & Corp", 
    prompt: "Use a micro-animations-focused style where every element suggests subtle motion or feedback. Design buttons, toggles, and cards with clear hover, press, and transition states through layered shadows, states, and arrows. Use small icons and hints that imply motion paths or easing curves. The interface should feel responsive and lively even when viewed as static.",
    tags: ["minimal","clean","animated"]
  },
  { 
    id: 37, 
    name: "Hyper-Real 3D",
    slug: "hyper-real-3d",
    category: "t-clean", 
    group: "Tactile & Corp", 
    prompt: "Use a hyper-real 3D style with highly detailed, physically accurate lighting, reflections, and materials. Objects should have visible textures, realistic shadows, and believable depth. Place the 3D elements prominently in the hero or interface, with minimal flat UI around them. The overall feel should be cinematic and product-visualization-grade.",
    tags: ["minimal","clean","3d"]
  },

  // FASE 3: ARTISTIC & RETRO
  { 
    id: 15, 
    name: "Scrapbook / Collage",
    slug: "scrapbook-collage",
    category: "t-brutal", 
    group: "Artistic & Retro", 
    prompt: "Use a scrapbook collage style with overlapping photos, torn paper edges, tape, stickers, and handwritten notes. Mix different textures like kraft paper, grid paper, and printed patterns. Allow elements to tilt and overlap in an organic, imperfect way. The overall layout should feel handmade, layered, and personal.",
    tags: ["bold","contrast","raw"]
  },
  { 
    id: 16, 
    name: "Maximalism",
    slug: "maximalism",
    category: "t-brutal", 
    group: "Artistic & Retro", 
    prompt: "Use a maximalist style packed with dense visual information, saturated colors, and layered patterns. Combine multiple typefaces, decorative borders, and rich textures. Let elements overlap and compete for attention while still maintaining a loose hierarchy. Avoid minimalism and white space; the screen should feel full and exuberant.",
    tags: ["bold","contrast","raw"]
  },
  { 
    id: 18, 
    name: "Liquid Metal",
    slug: "liquid-metal",
    category: "t-dark", 
    group: "Artistic & Retro", 
    prompt: "Use a liquid metal style with chrome-like surfaces, reflective highlights, and smooth, flowing shapes. Buttons and key elements should look like molten metal frozen mid-motion. Use dark backgrounds to enhance reflections and specular highlights. Avoid flat colors; surfaces should feel glossy, slick, and highly polished.",
    tags: ["dark","elegant"]
  },
  { 
    id: 20, 
    name: "Risograph Style",
    slug: "risograph-style",
    category: "t-brutal", 
    group: "Artistic & Retro", 
    prompt: "Use a risograph print style with a limited color palette of bold, slightly fluorescent inks. Simulate misaligned layers, halftone textures, and visible print imperfections. Overlapping colors should create new hues through blending. The overall look should feel grainy, tactile, and slightly off-register, like a printed zine or poster.",
    tags: ["bold","contrast","raw"]
  },
  { 
    id: 21, 
    name: "Xerography / Punk Zine",
    slug: "xerography-punk-zine",
    category: "t-brutal", 
    group: "Artistic & Retro", 
    prompt: "Use a xerox punk zine style with high-contrast black-and-white imagery, rough photocopy textures, and visible noise. Incorporate cut-and-paste typography, ransom-note letters, and rough-edged shapes. Layouts should feel aggressive, unrefined, and collage-like. Avoid clean lines and smooth gradients; embrace dirt, grit, and duplication artifacts.",
    tags: ["bold","contrast","raw"]
  },
  { 
    id: 39, 
    name: "Y2K / Acid Graphics",
    slug: "y2k-acid-graphics",
    category: "t-neon", 
    group: "Artistic & Retro", 
    prompt: "Use a Y2K acid graphics style with chrome-like text, spiky or bubbly typography, and surreal digital motifs. Utilize glossy gradients, lens flares, and strange 3D shapes. Colors should be loud: neons, metallics, and high contrast. The design should feel chaotic, futuristic, and very early-2000s internet.",
    tags: ["glow","dark","neon"]
  },
  { 
    id: 40, 
    name: "Vaporwave",
    slug: "vaporwave",
    category: "t-glass", 
    group: "Artistic & Retro", 
    prompt: "Use a vaporwave style with pastel gradients, retro computer UI elements, and nostalgic motifs like columns, statues, or sunsets. Incorporate glitch effects, pixel fonts, and Japanese or Greek text fragments. Use purples, pinks, cyans, and faded tones. The interface should feel like a dreamy, nostalgic remix of early digital culture.",
    tags: ["blur","transparent","gradient"]
  },

  // FASE 4: CLASSIC & TYPOGRAPHY
  { 
    id: 14, 
    name: "Bold Minimalism",
    slug: "bold-minimalism",
    category: "t-clean", 
    group: "Classic & Typography", 
    prompt: "Use a bold minimalist style with heavy black sans-serif typography (font-weight: 900) on a white background, using massive negative space. Focus on strict typographic hierarchy and absolute clarity.",
    tags: ["minimal","clean","elegant"]
  },
  { 
    id: 17, 
    name: "Kinetic Typography",
    slug: "kinetic-typography",
    category: "t-brutal", 
    group: "Classic & Typography", 
    prompt: "Use a kinetic typography style where text is the main visual element and feels in motion. Design with big, bold type that suggests animation through angled baselines, staggered positioning, and dynamic scaling. Use limited imagery and let words themselves form shapes, paths, or waves. High contrast and strong rhythm are more important than decorative detail.",
    tags: ["bold","contrast","raw","animated","elegant"]
  },
  { 
    id: 22, 
    name: "Editorial Luxury",
    slug: "editorial-luxury",
    category: "t-clean", 
    group: "Classic & Typography", 
    prompt: "Use an editorial luxury style with magazine-like layouts, elegant serif typography, and generous white space. Use large, dramatic images and carefully placed text blocks. Employ a restrained color palette (black, white, gold, deep neutrals) and thin dividing lines. The interface should feel like a high-end fashion or art publication.",
    tags: ["minimal","clean","luxury","elegant"]
  },
  { 
    id: 24, 
    name: "Monochrome Sophistication",
    slug: "monochrome-sophistication",
    category: "t-clean", 
    group: "Classic & Typography", 
    prompt: "Use a monochrome style restricted to one primary hue with variations in brightness and saturation. Build hierarchy through scale, weight, and contrast rather than multiple colors. Use clean typography and minimal decoration. The overall interface should feel restrained, refined, and highly cohesive.",
    tags: ["minimal","clean","elegant"]
  },
  { 
    id: 26, 
    name: "Japanese Minimalism",
    slug: "japanese-minimalism",
    category: "t-clean", 
    group: "Classic & Typography", 
    prompt: "Use a Japanese minimalism style with extreme simplicity, abundant negative space, and precise alignment. Employ a limited color palette with off-whites, blacks, and a single accent color (like red). Use refined typography with subtle weight changes and minimal decoration. The interface should feel calm, balanced, and quietly intentional.",
    tags: ["minimal","clean","japanese","elegant"]
  },
  { 
    id: 27, 
    name: "Dark Academia",
    slug: "dark-academia",
    category: "t-dark", 
    group: "Classic & Typography", 
    prompt: "Use a Dark Academia style with rich, muted tones like deep brown, forest green, and burgundy. Incorporate textures reminiscent of leather, old paper, and cloth. Use classic serif typography, underlines, and small ornaments. The design should evoke old libraries, study rooms, and classical scholarship in a digital context.",
    tags: ["dark","elegant","moody"]
  },
  { 
    id: 45, 
    name: "ASCII Art Modern",
    slug: "ascii-art-modern",
    category: "t-retro", 
    group: "Classic & Typography", 
    prompt: "Use an ASCII art style where interface elements are built from text characters and symbols. Construct shapes, borders, and icons using slashes, dashes, brackets, and monospaced type. Use minimal color (or a few terminal-like colors) and a grid of characters as the main structure. The design should feel like a playful, modern take on text-based interfaces.",
    tags: ["retro","nostalgic","elegant"]
  },
  { 
    id: 69, 
    name: "Swiss Style International",
    slug: "swiss-style-international",
    category: "t-clean", 
    group: "Classic & Typography", 
    prompt: "Use a Swiss International Typographic Style with a strict grid, flush-left alignment, and generous margins. Use clean sans-serif type, strong typographic hierarchy, and minimal decoration. Rely on bold blocks of color and simple shapes for emphasis instead of icons or illustrations. Keep everything precise, ordered, and highly legible.",
    tags: ["minimal","clean","elegant"]
  },

  // FASE 5: DATA & SCIENCE
  { 
    id: 29, 
    name: "Data Visualization",
    slug: "data-visualization",
    category: "t-clean", 
    group: "Data & Science", 
    prompt: "Use a data visualization-focused style with clear charts, grids, and numeric emphasis. Organize the layout around dashboards, graphs, and metric cards. Use a restrained color palette with a few strong accent colors for key data points. Prioritize clarity, legibility, and alignment, making the interface feel analytical and evidence-driven.",
    tags: ["minimal","clean","data"]
  },
  { 
    id: 33, 
    name: "Terminal Aesthetic",
    slug: "terminal-aesthetic",
    category: "t-retro", 
    group: "Data & Science", 
    prompt: "Use a terminal aesthetic with dark backgrounds (black or near-black) and monospaced typography. Rely on a limited color palette of green, cyan, amber, or magenta for text and highlights. Use simple boxes, underlines, and blinking cursors as visual elements. Avoid gradients and photos; the interface should look like a modern command-line console.",
    tags: ["retro","nostalgic","tech","data"]
  },
  { 
    id: 35, 
    name: "Quantum Aesthetic",
    slug: "quantum-aesthetic",
    category: "t-neon", 
    group: "Data & Science", 
    prompt: "Use a quantum aesthetic with particle fields, wave patterns, and overlapping translucent layers. Incorporate dotted connections, orbit-like paths, and interference patterns. Use deep dark backgrounds with bright neon accents (cyan, magenta, violet). The interface should feel abstract, scientific, and slightly mysterious.",
    tags: ["glow","dark","neon","data"]
  },
  { 
    id: 58, 
    name: "Thermal Imaging",
    slug: "thermal-imaging",
    category: "t-neon", 
    group: "Data & Science", 
    prompt: "Use a thermal imaging style with hot-to-cold color gradients ranging from deep blue through green and red to bright white. Shapes and figures should be defined by temperature-like color transitions rather than outlines. Use dark backgrounds to enhance contrast. The interface should feel like a heatmap or infrared camera view.",
    tags: ["glow","dark","neon","data"]
  },
  { 
    id: 60, 
    name: "Military HUD",
    slug: "military-hud",
    category: "t-neon", 
    group: "Data & Science", 
    prompt: "Use a military HUD style with transparent overlays, targeting reticles, and gridlines on top of darker backgrounds. Employ sharp angles, numeric readouts, and status indicators like ammo, health, and coordinates. Use a limited palette of greens, ambers, or cyans. The interface should feel tactical, precise, and combat-ready.",
    tags: ["glow","dark","neon","cyberpunk","data"]
  },
  { 
    id: 63, 
    name: "Sci-Fi Hologram",
    slug: "sci-fi-hologram",
    category: "t-neon", 
    group: "Data & Science", 
    prompt: "Use a sci-fi hologram style with semi-transparent panels, bright edge glows, and floating UI elements. Employ wireframes, volumetric projections, and light beams. Use mostly cool colors like cyan and blue with white highlights. The interface should feel like a futuristic control room with holographic displays.",
    tags: ["glow","dark","neon","data"]
  },

  // FASE 6: SPATIAL & THEMATIC
  { 
    id: 30, 
    name: "Retro-Futurism",
    slug: "retro-futurism",
    category: "t-neon", 
    group: "Spatial & Thematic", 
    prompt: "Use a retro-futurist style that blends vintage aesthetics with imagined future tech. Combine bold geometric shapes, neon accents, and gradients with old-school typography and analog textures. Use motifs like radar grids, starfields, and plastic panels. The design should feel like the future as imagined in the 70s or 80s.",
    tags: ["glow","dark","neon","retro"]
  },
  { 
    id: 31, 
    name: "Morphing Interfaces",
    slug: "morphing-interfaces",
    category: "t-clay", 
    group: "Spatial & Thematic", 
    prompt: "Use a morphing interface style with organic, blobby shapes that look like they are mid-transition. Elements should have soft edges, fluid curves, and overlapping layers. Use gradients and soft shadows to emphasize the sense of movement and transformation. Avoid rigid grids; the layout should feel alive and shape-shifting.",
    tags: ["3d","soft","rounded"]
  },
  { 
    id: 34, 
    name: "Solarpunk",
    slug: "solarpunk",
    category: "t-clean", 
    group: "Spatial & Thematic", 
    prompt: "Use a Solarpunk style with bright, warm lighting, lush greenery, and clean white or light-colored architecture. Incorporate solar panels, wind turbines, and organic forms integrated with tech. Use a palette of greens, golds, and sky blues. The design should feel optimistic, sustainable, and harmonious between nature and technology.",
    tags: ["minimal","clean"]
  },
  { 
    id: 36, 
    name: "Metaverse Ready",
    slug: "metaverse-ready",
    category: "t-neon", 
    group: "Spatial & Thematic", 
    prompt: "Use a metaverse-ready style with avatar silhouettes, digital spaces, and layered interface panels floating in 3D. Combine holographic overlays, subtle glows, and depth of field. Use gradients and neon accents over dark or cosmic backgrounds. The design should feel social, immersive, and spatial rather than flat.",
    tags: ["glow","dark","neon"]
  },
  { 
    id: 42, 
    name: "Frutiger Aero",
    slug: "frutiger-aero",
    category: "t-clean", 
    group: "Spatial & Thematic", 
    prompt: "Use a Frutiger Aero style with glossy buttons, shiny highlights, and realistic environmental imagery like blue skies, green fields, and water. Combine clean sans-serif typography with slightly rounded UI elements. Use reflections, glassy surfaces, and saturated natural colors. The interface should feel like mid-2000s optimistic tech.",
    tags: ["minimal","clean"]
  },
  { 
    id: 43, 
    name: "Win95 / OS Style",
    slug: "win95-os-style",
    category: "t-retro", 
    group: "Spatial & Thematic", 
    prompt: "Use a classic operating system style inspired by mid-90s desktops. Use grey window panels, beveled 3D buttons, and simple blue title bars. Employ pixel or bitmap-style icons and small, crisp fonts. Layouts should look like draggable windows, dialog boxes, and file explorers from that era.",
    tags: ["retro","nostalgic"]
  },
  { 
    id: 44, 
    name: "Teletext / VHS",
    slug: "teletext-vhs",
    category: "t-retro", 
    group: "Spatial & Thematic", 
    prompt: "Use a teletext and VHS style with blocky low-resolution text, limited color palettes, and CRT-like scanlines. Simulate noise, tracking errors, and slight RGB misalignment. Use boxy layouts and grid-like segmentation of content. The interface should feel like an old broadcast screen or analog TV menu.",
    tags: ["retro","nostalgic"]
  },
  { 
    id: 56, 
    name: "Gorpcore Tech",
    slug: "gorpcore-tech",
    category: "t-clean", 
    group: "Spatial & Thematic", 
    prompt: "Use a Gorpcore tech style with visuals inspired by outdoor gear and technical clothing. Incorporate topographic lines, map overlays, carabiners, straps, and stitching details. Use earthy tones (olive, tan, charcoal) combined with high-visibility accents like safety orange or neon yellow. The interface should feel rugged, functional, and adventure-ready.",
    tags: ["minimal","clean","tech"]
  },
  { 
    id: 57, 
    name: "Mysticism / Astrology",
    slug: "mysticism-astrology",
    category: "t-dark", 
    group: "Spatial & Thematic", 
    prompt: "Use a mysticism and astrology style with deep midnight backgrounds, fine golden linework, and celestial symbols. Include zodiac wheels, constellations, moons, and geometric sigils. Use elegant, slightly decorative typography. The interface should feel arcane, refined, and quietly magical.",
    tags: ["dark","elegant"]
  },
  { 
    id: 61, 
    name: "Competitive Neon",
    slug: "competitive-neon",
    category: "t-neon", 
    group: "Spatial & Thematic", 
    prompt: "Use a competitive neon style with bold, angular panels and strong team-color accents. Use high contrast between dark backgrounds and bright neons (pink, cyan, lime). Incorporate sharp icons, ranking badges, and match stats. The interface should feel fast, energetic, and esports-ready.",
    tags: ["glow","dark","neon"]
  },
  { 
    id: 62, 
    name: "Horror Vintage",
    slug: "horror-vintage",
    category: "t-dark", 
    group: "Spatial & Thematic", 
    prompt: "Use a vintage horror style with grainy textures, dark desaturated colors, and cinematic typography. Incorporate subtle film noise, vignettes, and flickering effects in the visuals. Use red or off-white titles with serif or slab fonts reminiscent of old horror posters. The interface should feel eerie, nostalgic, and suspenseful.",
    tags: ["dark","elegant","retro","moody"]
  },
  { 
    id: 64, 
    name: "Automotive Luxury",
    slug: "automotive-luxury",
    category: "t-dark", 
    group: "Spatial & Thematic", 
    prompt: "Use an automotive luxury style with sleek, dark cockpits, glossy highlights, and precise instrument graphics. Use thin, high-contrast dials, modern sans-serif typography, and subtle metallic accents. Backgrounds should resemble dashboard materials (brushed metal, leather, carbon fiber). The interface should feel fast, premium, and driver-focused.",
    tags: ["dark","elegant","luxury"]
  },
  { 
    id: 65, 
    name: "Magical Sparkle",
    slug: "magical-sparkle",
    category: "t-neon", 
    group: "Spatial & Thematic", 
    prompt: "Use a magical sparkle style with soft gradients, glowing particles, and light trails. Incorporate stars, sparkles, and subtle bokeh around key elements. Use pastel or jewel-tone colors with luminous highlights. The interface should feel whimsical, enchanting, and family-friendly, like an interactive fairy tale.",
    tags: ["glow","dark","neon"]
  },
  { 
    id: 70, 
    name: "Spatial Design",
    slug: "spatial-design",
    category: "t-glass", 
    group: "Spatial & Thematic", 
    prompt: "Use a spatial UI style that feels like floating panels in 3D space. Elements should have realistic lighting, soft shadows, and slight parallax between layers. Cards and windows should appear as thin, semi-solid surfaces with subtle depth, not just flat rectangles. Use gentle glows and highlight edges where light hits. Backgrounds should be soft, blurred, and unobtrusive, enhancing the sense of depth. The overall feel should be calm, immersive, and futuristic.",
    tags: ["blur","transparent","gradient"]
  },

  // FASE 7: CREATIVE & LO-FI
  { 
    id: 28, 
    name: "Sticker Book",
    slug: "sticker-book",
    category: "t-clean", 
    group: "Creative & Lo-Fi", 
    prompt: "Use a sticker book style with simple patterned backgrounds. Elements should look like die-cut stickers with white borders and slight lift shadows.",
    tags: ["minimal","clean","creative"]
  },
  { 
    id: 38, 
    name: "Biomorphic Design",
    slug: "biomorphic-design",
    category: "t-clay", 
    group: "Creative & Lo-Fi", 
    prompt: "Use a biomorphic design style with organic, cell-like shapes and flowing lines. Avoid straight edges and hard corners; panels and buttons should curve and bulge like living tissue or plant forms. Use gradients and soft shadows to emphasize volume. The interface should feel alive, fluid, and inspired by biology.",
    tags: ["3d","soft","rounded","creative"]
  },
  { 
    id: 41, 
    name: "Cyberpunk Interface",
    slug: "cyberpunk-interface",
    category: "t-neon", 
    group: "Creative & Lo-Fi", 
    prompt: "Use a cyberpunk interface style with dark city-night backgrounds, neon highlights, and dense HUD overlays. Include angled panels, scanlines, and subtle glitch or noise. Use vibrant accent colors (magenta, cyan, yellow) against deep blacks and purples. The design should feel like a high-tech, slightly dystopian control system.",
    tags: ["glow","dark","neon","cyberpunk","creative"]
  },
  { 
    id: 46, 
    name: "8-Bit / Pixelscape",
    slug: "8-bit-pixelscape",
    category: "t-retro", 
    group: "Creative & Lo-Fi", 
    prompt: "Use an 8-bit pixel art style with chunky, low-resolution graphics and blocky shapes. Every element, including icons and characters, should be made of visible square pixels. Use a limited color palette inspired by retro game consoles. The interface should feel like a game menu or world map from a classic video game.",
    tags: ["retro","nostalgic","pixel","creative"]
  },
  { 
    id: 47, 
    name: "Gamified Cartoon",
    slug: "gamified-cartoon",
    category: "t-brutal", 
    group: "Creative & Lo-Fi", 
    prompt: "Use a gamified cartoon style with bright colors, exaggerated icons, and UI elements that resemble game HUDs. Include badges, progress bars, coins, and XP indicators. Use rounded shapes, thick strokes, and playful character illustrations. The interface should feel fun, rewarding, and game-like.",
    tags: ["bold","contrast","raw","playful","creative"]
  },
  { 
    id: 48, 
    name: "Toy-Inspired 3D",
    slug: "toy-inspired-3d",
    category: "t-clay", 
    group: "Creative & Lo-Fi", 
    prompt: "Use a toy-inspired 3D style with chunky, colorful objects that look like plastic toys. Emphasize rounded edges, simple geometry, and soft reflections. Buttons and cards should feel like physical blocks or tokens. The design should feel tactile, childlike, and approachable.",
    tags: ["3d","soft","rounded","creative"]
  },
  { 
    id: 49, 
    name: "Storybook Digital",
    slug: "storybook-digital",
    category: "t-clean", 
    group: "Creative & Lo-Fi", 
    prompt: "Use a storybook style with illustrated scenes, soft outlines, and textures resembling watercolor or ink on paper. Use warm, muted colors and hand-drawn details. Layouts should feel like book pages with framed content and decorative borders. The interface should evoke bedtime stories and illustrated children’s books.",
    tags: ["minimal","clean","creative"]
  },
  { 
    id: 50, 
    name: "Kawaii Tech",
    slug: "kawaii-tech",
    category: "t-clay", 
    group: "Creative & Lo-Fi", 
    prompt: "Use a kawaii tech style with pastel colors, cute mascots, and rounded UI elements. Incorporate emotive faces on icons, soft shadows, and bubbly typography. Use small stickers, hearts, stars, and sparkles as decorative accents. The interface should feel adorable, friendly, and non-intimidating.",
    tags: ["3d","soft","rounded","tech","creative"]
  },
  { 
    id: 51, 
    name: "Doodle Universe",
    slug: "doodle-universe",
    category: "t-clean", 
    group: "Creative & Lo-Fi", 
    prompt: "Use a doodle universe style with hand-drawn, sketchy lines and playful scribbles filling the environment. Combine simple cosmic motifs like planets, stars, and rockets drawn as if in a notebook. Use off-white backgrounds and marker-like colors. The interface should feel like a playful universe drawn in the margins of a notebook.",
    tags: ["minimal","clean","creative"]
  },
  { 
    id: 52, 
    name: "Paper Craft Digital",
    slug: "paper-craft-digital",
    category: "t-clean", 
    group: "Creative & Lo-Fi", 
    prompt: "Use a paper craft style with layered “cut-out” shapes, subtle drop shadows, and textures that resemble real paper. Elements should look like they are stacked or glued onto the surface. Use simple color blocks and folded corners to suggest depth. The design should feel tactile, handcrafted, and crisp.",
    tags: ["minimal","clean","creative"]
  },
  { 
    id: 53, 
    name: "Play-Doh Digital",
    slug: "play-doh-digital",
    category: "t-clay", 
    group: "Creative & Lo-Fi", 
    prompt: "Use a Play-Doh-inspired style with thick, sculpted shapes that look like they were molded by hand. Surfaces should have slight imperfections and soft fingerprints. Use bright, primary colors and bulky forms. The interface should feel chunky, fun, and almost edible.",
    tags: ["3d","soft","rounded","creative"]
  },

  // FASE 8: ATMOSPHERE & CULTURE
  { 
    id: 19, 
    name: "Gradient Mesh",
    slug: "gradient-mesh",
    category: "t-glass", 
    group: "Atmosphere & Culture", 
    prompt: "Use a gradient mesh style with smooth, multi-stop gradients that blend several colors in organic shapes. Backgrounds should feel fluid and atmospheric, with gradients that subtly shift direction and intensity. Foreground elements should be simple and flat to contrast the complex gradients. Avoid harsh edges; focus on soft transitions and color blending.",
    tags: ["blur","transparent","gradient"]
  },
  { 
    id: 23, 
    name: "Ambient Design",
    slug: "ambient-design",
    category: "t-glass", 
    group: "Atmosphere & Culture", 
    prompt: "Use an ambient design style with soft gradients, diffused lighting, and low-contrast elements that blend smoothly into the background. Focus on mood rather than sharp structure. Use subtle glows, blurred shapes, and slow-vibe visuals. Typography should be clean and understated; the experience should feel calm, atmospheric, and meditative.",
    tags: ["blur","transparent","gradient"]
  },
  { 
    id: 25, 
    name: "Parallax Storytelling",
    slug: "parallax-storytelling",
    category: "t-clean", 
    group: "Atmosphere & Culture", 
    prompt: "Use a parallax storytelling style with multiple visual layers that feel like they move at different depths. Stack backgrounds, mid-ground imagery, and foreground UI elements in a way that clearly separates them. Use large hero visuals that suggest motion and depth, even in static form. Layout should feel like a narrative journey rather than a flat page.",
    tags: ["minimal","clean"]
  },
  { 
    id: 54, 
    name: "Scandinavian Digital",
    slug: "scandinavian-digital",
    category: "t-clean", 
    group: "Atmosphere & Culture", 
    prompt: "Use a Scandinavian digital style with clean layouts, light neutral backgrounds, and small accents of muted color. Combine simple geometric shapes with subtle references to natural materials (like light wood textures). Use minimal sans-serif typography and plenty of white space. The interface should feel calm, functional, and warm.",
    tags: ["minimal","clean"]
  },
  { 
    id: 55, 
    name: "Afrofuturism",
    slug: "afrofuturism",
    category: "t-neon", 
    group: "Atmosphere & Culture", 
    prompt: "Use an Afrofuturist style blending African patterns, bold color palettes, and futuristic sci-fi elements. Incorporate geometric motifs, textiles, and hairstyles alongside advanced tech shapes and holographic forms. Use rich golds, deep purples, and vibrant greens or reds. The design should feel empowering, imaginative, and culturally grounded.",
    tags: ["glow","dark","neon"]
  },
  { 
    id: 59, 
    name: "Eco-Brutalism",
    slug: "eco-brutalism",
    category: "t-brutal", 
    group: "Atmosphere & Culture", 
    prompt: "Use an eco-brutalist style combining heavy, concrete-like blocks with lush greenery and organic textures. Layout elements should be strong, rectangular, and monolithic, while images and accents introduce plants, moss, and natural light. Use muted greys mixed with fresh greens and earthy tones. The design should feel raw yet environmentally conscious.",
    tags: ["bold","contrast","raw"]
  },

  // FASE 9: MEDICAL & SURGICAL (The Triad)
  { 
    id: 66, 
    name: "Precision Surgical UI",
    slug: "precision-surgical-ui",
    category: "t-medical", 
    group: "Medical & Surgical", 
    prompt: "Use a Precision Surgical UI style with ultra-clean clinical whitespace, thin typographic hierarchy, subtle grid divisions, and modular card structures inspired by electronic medical records. Incorporate micro-lines, dotted separators, surgical blue accents, and standardized labeling. Avoid decorative elements; all shapes exist to clarify information. Visuals must feel like a blend of scientific dashboards and operating-room documentation — precise, sterile, minimal, and highly trustworthy.",
    tags: ["professional","precise","tech","medical"]
  },
  { 
    id: 67, 
    name: "Scientific Atlas Modern",
    slug: "scientific-atlas-modern",
    category: "t-medical", 
    group: "Medical & Surgical", 
    prompt: "Use a Scientific Atlas Modern style with precise anatomical linework, layered cutaway diagrams, ultra-clear labeling, and a neutral clinical palette. Combine contemporary editorial typography with surgical-level detail. Integrate thin vector illustrations, grid-based layouts, cross-sections, and zone mapping. Avoid decoration; every element must serve anatomical clarity, tactical instruction, or scientific credibility. The aesthetic should feel like a fusion of a premium medical atlas, a peer-reviewed surgical publication, and a modern data-driven UI.",
    tags: ["professional","precise","tech","medical"]
  },
  { 
    id: 68, 
    name: "Surgical Blueprint",
    slug: "surgical-blueprint",
    category: "t-medical", 
    group: "Medical & Surgical", 
    prompt: "Use a Surgical Blueprint Aesthetic with thin technical linework, blueprint-style grids, cross-sectional diagrams, labeled vectors, and layered anatomical zones. Apply a monochrome palette (surgical blue, slate grey, white). Use precise measurements, dashed lines, and engineering-style annotations. Keep the interface minimal but highly technical, resembling a fusion of architectural schematics and modern surgical diagrams. Avoid decorative elements; every mark must serve anatomical clarity or structural explanation.",
    tags: ["professional","precise","tech","medical"]
  },

  // NOVOS ESTILOS ADICIONADOS
  { 
    id: 71, 
    name: "Material Design",
    slug: "material-design",
    category: "t-clean", 
    group: "Essential Tech", 
    prompt: "Use a Material Design 3 style with layered cards, soft elevations, and rounded corners. Employ a dynamic color system where accent colors are derived from a primary brand color. Use clear iconography, large touch targets, and spacious layouts. Shadows and depth should feel subtle and functional, not decorative.",
    tags: ["minimal","clean"]
  },
  { 
    id: 72, 
    name: "Crayon Texture",
    slug: "crayon-texture",
    category: "t-clean", 
    group: "Creative & Lo-Fi", 
    prompt: "Use a crayon texture style with irregular wavy borders and saturated colors. Apply grain textures to backgrounds to simulate drawing paper.",
    tags: ["minimal","clean","creative"]
  },
  { 
    id: 73, 
    name: "Wes Anderson",
    slug: "wes-anderson",
    category: "t-clean", 
    group: "Spatial & Thematic", 
    prompt: "Use a Wes Anderson style with a curated pastel palette, perfectly symmetrical layouts, centered serif typography, and meticulous spacing.",
    tags: ["minimal","clean"]
  },
  { 
    id: 74, 
    name: "Marvel HUD",
    slug: "marvel-hud",
    category: "t-neon", 
    group: "Spatial & Thematic", 
    prompt: "Use a Marvel-style HUD with dark backgrounds, iridescent blue and gold holographic shapes, and futuristic angular UI elements.",
    tags: ["glow","dark","neon","cyberpunk"]
  },
  { 
    id: 75, 
    name: "Matrix Code",
    slug: "matrix-code",
    category: "t-neon", 
    group: "Data & Science", 
    prompt: "Use a Matrix code style with absolute black backgrounds, bright green monospace text, and falling code animations with green glows.",
    tags: ["glow","dark","neon","tech","cyberpunk"]
  },
  { 
    id: 76, 
    name: "Stranger Things 80s",
    slug: "stranger-things-80s",
    category: "t-retro", 
    group: "Spatial & Thematic", 
    prompt: "Use a Stranger Things 80s horror style with black backgrounds, red neon typography, and subtle glitch animations.",
    tags: ["retro","nostalgic"]
  },
  { 
    id: 77, 
    name: "Minecraft Block",
    slug: "minecraft-block",
    category: "t-retro", 
    group: "Creative & Lo-Fi", 
    prompt: "Use a Minecraft block style with pixelated aesthetics, straight edges, and earthy block-like colors (green, brown, blue) using 3D shadows.",
    tags: ["retro","nostalgic","pixel","creative"]
  },
  { 
    id: 78, 
    name: "Deconstructivism",
    slug: "deconstructivism",
    category: "t-brutal", 
    group: "Artistic & Retro", 
    prompt: "Use a deconstructivist style with asymmetrical, fragmented layouts and rotated elements to create a 'broken' but balanced architectural feel.",
    tags: ["bold","contrast","raw"]
  },
  { 
    id: 79, 
    name: "Parametric Design",
    slug: "parametric-design",
    category: "t-clean", 
    group: "Data & Science", 
    prompt: "Use a parametric design style with soft gradients, complex organic flow lines, and compute-generated geometric patterns.",
    tags: ["minimal","clean","data"]
  },
  { 
    id: 80, 
    name: "Phosphorescent Glow",
    slug: "phosphorescent-glow",
    category: "t-neon", 
    group: "Atmosphere & Culture", 
    prompt: "Use a phosphorescent glow style with dark backgrounds and glow-in-the-dark colors like lime green and neon pink with diffused shadows.",
    tags: ["glow","dark","neon"]
  },
  { 
    id: 81, 
    name: "Anti-Design",
    slug: "anti-design",
    category: "t-brutal", 
    group: "Artistic & Retro", 
    prompt: "Use an Anti-Design style with intentionally broken layouts, clashing colors, and chaotic hierarchy. Allow overlapping elements, misaligned text, and unexpected spacing. Use mixed typefaces and inconsistent sizes to create a rebellious, experimental feel. Embrace visual tension and discomfort instead of balance and harmony.",
    tags: ["bold","contrast","raw"]
  },

  // ESTILOS PREMIUM ADICIONAIS
  { 
    id: 82, 
    name: "Brutalist Serif",
    slug: "brutalist-serif",
    category: "t-brutal", 
    group: "Classic & Typography", 
    prompt: "Use a brutalist serif style with high-contrast display typography on a strict grid with massive negative space and a single subtle accent color.",
    tags: ["bold","contrast","raw","elegant"]
  },
  { 
    id: 83, 
    name: "Lunarpunk",
    slug: "lunarpunk",
    category: "t-neon", 
    group: "Spatial & Thematic", 
    prompt: "Use a lunarpunk style with deep navy and charcoal backgrounds and bioluminescent accents in cyan, violet, and lime. Elements should be organic and fluid.",
    tags: ["glow","dark","neon"]
  },
  { 
    id: 84, 
    name: "Skeuomorphic Revival",
    slug: "skeuomorphic-revival",
    category: "t-dark", 
    group: "Tactile & Corp", 
    prompt: "Use a skeuomorphic revival style with hyper-realistic textures like milled aluminum or polished glass and micro-shadows for tactile depth.",
    tags: ["dark","elegant"]
  },
  { 
    id: 85, 
    name: "Art Deco Modern",
    slug: "art-deco-modern",
    category: "t-dark", 
    group: "Classic & Typography", 
    prompt: "Use an Art Deco modern style with gold geometric patterns on dark emerald backgrounds, using tall condensed sans-serif typography.",
    tags: ["dark","elegant"]
  },
  { 
    id: 86, 
    name: "AI-Fluid",
    slug: "ai-fluid",
    category: "t-glass", 
    group: "Data & Science", 
    prompt: "Use an AI-fluid style with iridescent moving blobs and liquid gradients with noise textures for a living, intelligent interface feel.",
    tags: ["blur","transparent","gradient","data"]
  },
  { 
    id: 87, 
    name: "Liminal Space",
    slug: "liminal-space",
    category: "t-clean", 
    group: "Atmosphere & Culture", 
    prompt: "Use a liminal space style with minimalist, empty backgrounds, flat lighting, and a desaturated palette to create a quiet, dream-like atmosphere.",
    tags: ["minimal","clean"]
  },
  { 
    id: 88, 
    name: "Ukiyo-e Modern",
    slug: "ukiyo-e-modern",
    category: "t-clean", 
    group: "Atmosphere & Culture", 
    prompt: "Use a modern Ukiyo-e style with strong outlines, flat color fills, and woodblock-inspired textures in indigo, vermillion, and off-white.",
    tags: ["minimal","clean","japanese"]
  },
  { 
    id: 89, 
    name: "Chrome OS Aesthetic",
    slug: "chrome-os-aesthetic",
    category: "t-clean", 
    group: "Essential Tech", 
    prompt: "Use a Chrome OS-inspired style with bright, airy backgrounds and soft card surfaces. Emphasize rounded shapes, pill buttons, and minimal borders. Use subtle shadows to separate layers and a palette of light neutrals with a few bold accent colors. Keep the interface extremely clean, approachable, and distraction-free.",
    tags: ["minimal","clean"]
  }
];