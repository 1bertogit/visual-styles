import { StyleDefinition } from '../types';

export const styles: StyleDefinition[] = [
  // FASE 1: ESSENTIAL TECH
  { 
    id: 1, 
    name: "Clean / Flat 2.0", 
    category: "t-clean", 
    group: "Essential Tech", 
    prompt: "Crie uma Hero Section em duas colunas, com texto e botões à esquerda e um placeholder de imagem de produto limpa à direita. O CSS deve usar uma fonte sem serifa, fundo quase branco e botões com cor sólida e cantos arredondados, focando na clareza e alto contraste." 
  },
  { 
    id: 2, 
    name: "Bento Grids", 
    category: "t-clean", 
    group: "Essential Tech", 
    prompt: "Crie uma Hero Section organizada num layout Bento Grid (colmeia modular). O layout deve usar display: grid; para exibir 5 cartões (células) de tamanhos variados. O CSS deve focar na criação de bordas suaves e sombras subtis para os cartões." 
  },
  { 
    id: 3, 
    name: "Dark Mode Futurist", 
    category: "t-neon", 
    group: "Essential Tech", 
    prompt: "Crie uma Hero Section Dark Mode centrada. O CSS deve usar um fundo cinza muito escuro e cores neon (ex: roxo ou ciano) em títulos e botões. Adicione text-shadow e box-shadow para dar aos elementos um efeito de brilho intenso (neon glow)." 
  },
  { 
    id: 4, 
    name: "Glassmorphism", 
    category: "t-glass", 
    group: "Essential Tech", 
    prompt: "Crie uma Hero Section com um cartão de conteúdo central. O CSS deve aplicar o efeito Glassmorphism ao cartão, usando backdrop-filter e transparência. O fundo body ou section deve usar um linear-gradient ou radial-gradient suave e colorido (efeito Aurora) para maximizar o desfoque visual." 
  },
  { 
    id: 5, 
    name: "Isometric 3D", 
    category: "t-clean", 
    group: "Essential Tech", 
    prompt: "Crie uma Hero Section no estilo Isometric 3D. O layout deve ser em duas colunas com o texto à esquerda. O CSS deve ser profissional e focado na clareza. O placeholder à direita deve ser um bloco grande e limpo, pronto para receber uma ilustração 3D de alta qualidade." 
  },
  { 
    id: 6, 
    name: "Abstract 3D Hero", 
    category: "t-clean", 
    group: "Essential Tech", 
    prompt: "Crie uma Hero Section no estilo Abstract 3D Hero. O layout deve ter o texto centrado. O CSS deve usar position: absolute; para colocar um placeholder (.abstract-shape) atrás do título. Use radial-gradient e um box-shadow suave e colorido na forma para simular a iluminação e a profundidade de um objeto 3D flutuante." 
  },
  { 
    id: 7, 
    name: "Neobrutalism", 
    category: "t-brutal", 
    group: "Essential Tech", 
    prompt: "Crie uma Hero Section no estilo Neobrutalismo. O CSS deve usar uma cor de fundo vibrante (ex: amarelo ou rosa choque) e aplicar bordas pretas grossas (4px) a todos os elementos. A chave é a sombra dura (box-shadow sem desfoque) para dar o aspeto 'recortado' do estilo." 
  },
  { 
    id: 8, 
    name: "Aurora UI", 
    category: "t-glass", 
    group: "Essential Tech", 
    prompt: "Crie uma Hero Section no estilo Aurora UI (Mesh Gradients). O CSS deve usar um background-image com radial-gradient complexos, misturando 3 a 4 cores suaves para simular o efeito de luzes do norte. O texto deve ser branco e nítido sobre este fundo atmosférico." 
  },
  { 
    id: 11, 
    name: "Technical Wireframe", 
    category: "t-medical", 
    group: "Essential Tech", 
    prompt: "Crie uma Hero Section com o visual Technical / Wireframe Aesthetic. O CSS deve usar uma fonte monoespaçada e um background-image repetido para criar um fundo com linhas de grade finas e visíveis. Use cores limitadas (azul técnico, preto e branco) para simular um blueprint ou console de engenharia." 
  },

  // FASE 2: TACTILE & CORPORATE
  { 
    id: 9, 
    name: "Neumorphism", 
    category: "t-clean", 
    group: "Tactile & Corp", 
    prompt: "Crie uma Hero Section no estilo Neumorphism (Soft UI). O CSS deve usar um fundo de cor sólida neutra. O cartão deve ter um box-shadow que simula um relevo: uma sombra clara vinda do canto superior esquerdo e uma sombra escura vinda do canto inferior direito." 
  },
  { 
    id: 10, 
    name: "Corporate Memphis", 
    category: "t-clean", 
    group: "Tactile & Corp", 
    prompt: "Crie uma Hero Section no estilo Corporate Memphis com um layout de duas colunas. O CSS deve usar cores sólidas e planas, e o placeholder da ilustração deve ser simples, sem sombras, para replicar a estética vetorial e amigável." 
  },
  { 
    id: 12, 
    name: "Claymorphism", 
    category: "t-clay", 
    group: "Tactile & Corp", 
    prompt: "Crie uma Hero Section no estilo Claymorphism. O CSS deve aplicar um border-radius muito alto e box-shadow complexo (com sombras internas e externas suaves) para criar a aparência tridimensional e 'inchada' do clay." 
  },
  { 
    id: 13, 
    name: "Hand-Drawn / Doodle", 
    category: "t-clean", 
    group: "Tactile & Corp", 
    prompt: "Crie uma Hero Section no estilo Hand-Drawn / Doodle. O CSS deve usar uma fonte manuscrita e aplicar um box-shadow ou border que simule linhas duplas e ligeiramente desalinhadas para dar o aspeto de um desenho a caneta." 
  },
  { 
    id: 32, 
    name: "Micro-Animations", 
    category: "t-clean", 
    group: "Tactile & Corp", 
    prompt: "Crie uma Hero Section no estilo Micro-Animations. O CSS deve focar em estados de hover e transições suaves em todos os elementos interativos (botões, cartões), sugerindo responsividade e vida." 
  },
  { 
    id: 37, 
    name: "Hyper-Real 3D", 
    category: "t-clean", 
    group: "Tactile & Corp", 
    prompt: "Crie uma Hero Section no estilo Hyper-Real 3D. O layout deve destacar um elemento central renderizado com alta fidelidade. O CSS deve ser minimalista para não competir com a riqueza visual do elemento 3D." 
  },

  // FASE 3: ARTISTIC & RETRO
  { 
    id: 15, 
    name: "Scrapbook / Collage", 
    category: "t-brutal", 
    group: "Artistic & Retro", 
    prompt: "Crie uma Hero Section no estilo Scrapbook / Colagem Digital. O CSS deve usar position: absolute e transform: rotate() para criar elementos sobrepostos e desalinhados. Use uma fonte manuscrita e bordas grossas nos elementos para simular pedaços de papel colados." 
  },
  { 
    id: 16, 
    name: "Maximalism", 
    category: "t-brutal", 
    group: "Artistic & Retro", 
    prompt: "Crie uma Hero Section no estilo Maximalism. O CSS deve usar um fundo com padrão ou textura. Use cores muito saturadas e permita que os elementos se sobreponham (z-index). A tipografia deve ser grande e com detalhes decorativos." 
  },
  { 
    id: 18, 
    name: "Liquid Metal", 
    category: "t-dark", 
    group: "Artistic & Retro", 
    prompt: "Crie uma Hero Section no estilo Liquid Metal. O CSS deve usar um fundo muito escuro. O foco está em aplicar linear-gradient e webkit-background-clip: text aos títulos para criar um efeito de metal polido e reflexivo, com realces de luz (highlights) finos e brancos." 
  },
  { 
    id: 20, 
    name: "Risograph Style", 
    category: "t-brutal", 
    group: "Artistic & Retro", 
    prompt: "Crie uma Hero Section no estilo Risograph. O CSS deve aplicar uma textura de grão (noise) ao fundo. A chave é usar um text-shadow deslocado (ex: 2px 2px 0px [cor_contraste]) e sem desfoque para simular as camadas de tinta ligeiramente desalinhadas da impressão Risograph." 
  },
  { 
    id: 21, 
    name: "Xerography / Punk Zine", 
    category: "t-brutal", 
    group: "Artistic & Retro", 
    prompt: "Crie uma Hero Section no estilo Xerography / Punk Zine. O CSS deve aplicar uma textura de grão (noise) ao fundo. Use filter: contrast() para aumentar o contraste de forma agressiva. Os divs podem ter transform: rotate() para simular recortes desalinhados." 
  },
  { 
    id: 39, 
    name: "Y2K / Acid Graphics", 
    category: "t-neon", 
    group: "Artistic & Retro", 
    prompt: "Crie uma Hero Section no estilo Y2K / Acid Graphics. O CSS deve usar uma paleta néon e fontes arrojadas. A chave é aplicar um text-shadow colorido e, se possível, um background-clip: text com gradientes brilhantes para simular o visual cromado ou glossy dos anos 2000." 
  },
  { 
    id: 40, 
    name: "Vaporwave", 
    category: "t-glass", 
    group: "Artistic & Retro", 
    prompt: "Crie uma Hero Section no estilo Vaporwave. O CSS deve usar um background: linear-gradient em tons pastel (rosa, roxo, azul). Aplique um text-shadow subtil e desalinhado ao título para simular o efeito de glitch ou estéreo, e use linhas de grade subtis no fundo." 
  },

  // FASE 4: CLASSIC & TYPOGRAPHY
  { 
    id: 14, 
    name: "Bold Minimalism", 
    category: "t-clean", 
    group: "Classic & Typography", 
    prompt: "Crie uma Hero Section no estilo Bold Minimalism. O CSS deve usar uma fonte sem serifa preta e pesada (font-weight: 900) sobre um fundo branco. O título deve ser gigantesco (font-size: 10vw) e ocupar o centro do ecrã, com muito espaço negativo ao redor." 
  },
  { 
    id: 17, 
    name: "Kinetic Typography", 
    category: "t-brutal", 
    group: "Classic & Typography", 
    prompt: "Crie uma Hero Section no estilo Kinetic Typography. O CSS deve incluir uma animação (@keyframes) que aplique movimento, rotação ou escala ao elemento principal do título. A tipografia deve ser grande e em caixa alta." 
  },
  { 
    id: 22, 
    name: "Editorial Luxury", 
    category: "t-clean", 
    group: "Classic & Typography", 
    prompt: "Crie uma Hero Section no estilo Editorial Luxury. O CSS deve usar uma tipografia serifada elegante para os títulos. Use letter-spacing e line-height ajustados para precisão editorial. Inclua um divisor fino (border-bottom: 1px solid...) para separar secções." 
  },
  { 
    id: 24, 
    name: "Monochrome Sophistication", 
    category: "t-clean", 
    group: "Classic & Typography", 
    prompt: "Crie uma Hero Section no estilo Monochrome Sophistication. O CSS deve usar uma paleta de cores estritamente baseada em variações de um único tom (ex: azul marinho). A hierarquia deve ser criada apenas através do font-weight e do font-size, não através de cores de acento." 
  },
  { 
    id: 26, 
    name: "Japanese Minimalism", 
    category: "t-clean", 
    group: "Classic & Typography", 
    prompt: "Crie uma Hero Section no estilo Japanese Minimalism. O CSS deve usar um fundo quase branco e aplicar margin e padding massivos para criar muito espaço negativo. A tipografia deve ser simples, limpa e a paleta de cores restrita a neutros, com um toque de uma única cor de acento." 
  },
  { 
    id: 27, 
    name: "Dark Academia", 
    category: "t-dark", 
    group: "Classic & Typography", 
    prompt: "Crie uma Hero Section no estilo Dark Academia. O CSS deve usar uma paleta de cores rica e escura. Use tipografia serifada. O fundo deve ter uma background-image subtil que sugira textura (couro ou papel antigo) e box-shadow quente para dar profundidade." 
  },
  { 
    id: 45, 
    name: "ASCII Art Modern", 
    category: "t-retro", 
    group: "Classic & Typography", 
    prompt: "Crie uma Hero Section no estilo ASCII Art Modern. O CSS deve usar uma fonte monoespaçada e alta densidade de caracteres. O design das caixas deve ser construído diretamente no HTML ou com border que simule caixas de texto (sem border-radius)." 
  },
  { 
    id: 69, 
    name: "Swiss Style International", 
    category: "t-clean", 
    group: "Classic & Typography", 
    prompt: "Crie uma Hero Section no estilo Swiss Style (Bauhaus). O CSS deve usar uma display: grid; estrita. Aplique cores primárias sólidas (Vermelho, Azul, Amarelo) como fundos de blocos. A tipografia deve ser sem serifa, limpa e alinhada à esquerda." 
  },

  // FASE 5: DATA & SCIENCE
  { 
    id: 29, 
    name: "Data Visualization", 
    category: "t-clean", 
    group: "Data & Science", 
    prompt: "Crie uma Hero Section no estilo Data Visualization Aesthetic. O CSS deve usar display: grid; para organizar cartões de métricas. O foco deve ser na clareza tipográfica para números e no uso de cores de acento restritas para destacar dados, mantendo um fundo neutro e limpo." 
  },
  { 
    id: 33, 
    name: "Terminal Aesthetic", 
    category: "t-retro", 
    group: "Data & Science", 
    prompt: "Crie uma Hero Section no estilo Terminal Aesthetic. O CSS deve usar um fundo preto, font-family: monospace; e texto em cor única (ex: verde terminal). Inclua uma pequena @keyframes para simular o cursor intermitente." 
  },
  { 
    id: 35, 
    name: "Quantum Aesthetic", 
    category: "t-neon", 
    group: "Data & Science", 
    prompt: "Crie uma Hero Section no estilo Quantum Aesthetic. O CSS deve usar um fundo escuro e tipografia limpa. O elemento visual deve ser um diagrama abstrato feito de linhas finas, pontilhadas e círculos transparentes para simular órbitas e partículas quânticas." 
  },
  { 
    id: 58, 
    name: "Thermal Imaging", 
    category: "t-neon", 
    group: "Data & Science", 
    prompt: "Crie uma Hero Section no estilo Thermal Imaging. O CSS deve usar um fundo preto. A chave é aplicar um radial-gradient no elemento visual principal que simula a escala de calor (azul -> verde -> vermelho -> branco), definindo formas apenas pela cor e não por bordas." 
  },
  { 
    id: 60, 
    name: "Military HUD", 
    category: "t-neon", 
    group: "Data & Science", 
    prompt: "Crie uma Hero Section no estilo Military HUD (FPS Style). O CSS deve usar clip-path para dar às caixas de informação ângulos militares/táticos. Use uma paleta de cores restrita (ex: preto, cinza, ciano) e tipografia tecnológica." 
  },
  { 
    id: 63, 
    name: "Sci-Fi Hologram", 
    category: "t-neon", 
    group: "Data & Science", 
    prompt: "Crie uma Hero Section no estilo Sci-Fi Hologram. O CSS deve usar um fundo muito escuro. O elemento principal deve ser semi-transparente (holográfico) e ter um box-shadow azul ou ciano intenso e difuso (glow) para simular a projeção de luz." 
  },

  // FASE 6: SPATIAL & THEMATIC
  { 
    id: 30, 
    name: "Retro-Futurism", 
    category: "t-neon", 
    group: "Spatial & Thematic", 
    prompt: "Crie uma Hero Section no estilo Retro-Futurism. O CSS deve usar um fundo escuro com linhas de grelha subtis (radar). Use um linear-gradient com cores de néon e aplique um text-shadow simples para dar um brilho subtil." 
  },
  { 
    id: 31, 
    name: "Morphing Interfaces", 
    category: "t-clay", 
    group: "Spatial & Thematic", 
    prompt: "Crie uma Hero Section no estilo Morphing Interfaces. O CSS deve usar border-radius com múltiplas porcentagens para criar uma forma orgânica e fluida (blob). Inclua uma animação @keyframes sutil que altere o border-radius lentamente para simular a transformação." 
  },
  { 
    id: 34, 
    name: "Solarpunk", 
    category: "t-clean", 
    group: "Spatial & Thematic", 
    prompt: "Crie uma Hero Section no estilo Solarpunk. O CSS deve usar uma paleta de cores baseada em verdes, ouro e branco brilhante. Use box-shadow suave e quente para simular a luz solar e mantenha a tipografia limpa e moderna." 
  },
  { 
    id: 36, 
    name: "Metaverse Ready", 
    category: "t-neon", 
    group: "Spatial & Thematic", 
    prompt: "Crie uma Hero Section no estilo Metaverse Ready. O CSS deve usar um fundo escuro e aplicar um brilho de borda (box-shadow ciano/magenta) aos painéis de UI, dando-lhes um aspeto holográfico e imersivo." 
  },
  { 
    id: 42, 
    name: "Frutiger Aero", 
    category: "t-clean", 
    group: "Spatial & Thematic", 
    prompt: "Crie uma Hero Section no estilo Frutiger Aero. O CSS deve usar background brilhante e aplicar um box-shadow interno branco na parte superior dos botões/painéis para simular o reflexo de luz e o efeito glossy característico." 
  },
  { 
    id: 43, 
    name: "Win95 / OS Style", 
    category: "t-retro", 
    group: "Spatial & Thematic", 
    prompt: "Crie uma Hero Section no estilo Win95 / OS Style. O CSS deve usar cores cinzas de sistema. A chave é aplicar bordas duplas (uma clara e uma escura) aos botões e janelas para criar o efeito 3D chanfrado (beveled) característico dos sistemas operativos dos anos 90." 
  },
  { 
    id: 44, 
    name: "Teletext / VHS", 
    category: "t-retro", 
    group: "Spatial & Thematic", 
    prompt: "Crie uma Hero Section no estilo Teletext / VHS. O CSS deve usar cores escuras e limitadas (azul, branco, amarelo). Use um background-image para simular as scanlines (linhas horizontais finas) de um ecrã CRT e um text-shadow para criar um efeito de glitch ou sombra dupla." 
  },
  { 
    id: 56, 
    name: "Gorpcore Tech", 
    category: "t-clean", 
    group: "Spatial & Thematic", 
    prompt: "Crie uma Hero Section no estilo Gorpcore Tech. O CSS deve usar uma paleta de tons de terra com um acento neon. Inclua linhas finas (simulando linhas topográficas) no fundo. Os botões devem ter um visual robusto e funcional." 
  },
  { 
    id: 57, 
    name: "Mysticism / Astrology", 
    category: "t-dark", 
    group: "Spatial & Thematic", 
    prompt: "Crie uma Hero Section no estilo Mysticism / Astrology UI. O CSS deve usar um fundo de céu noturno escuro. A chave é o uso de linhas finas e precisas, com uma cor de acento dourada (gold) para simular a joalharia e os símbolos celestiais." 
  },
  { 
    id: 61, 
    name: "Competitive Neon", 
    category: "t-neon", 
    group: "Spatial & Thematic", 
    prompt: "Crie uma Hero Section no estilo Competitive Neon (Hero Shooter Style). O CSS deve usar clip-path para criar elementos angulares e dinâmicos. Use cores neon de alto contraste (ex: azul e vermelho) e um box-shadow que simule o brilho de luzes em elementos-chave." 
  },
  { 
    id: 62, 
    name: "Horror Vintage", 
    category: "t-dark", 
    group: "Spatial & Thematic", 
    prompt: "Crie uma Hero Section no estilo Horror Vintage (80s TV Style). O CSS deve usar cores escuras e mutadas. Aplique um filter (ex: sepia) para desaturar a imagem. O título deve ser grande e serifado, com um text-shadow subtil." 
  },
  { 
    id: 64, 
    name: "Automotive Luxury", 
    category: "t-dark", 
    group: "Spatial & Thematic", 
    prompt: "Crie uma Hero Section no estilo Automotive Luxury. O CSS deve usar um fundo escuro e tipografia fina e moderna. Use border-radius: 50% e border fino para simular o design circular dos medidores de painel, com brilhos subtis para dar um aspeto premium." 
  },
  { 
    id: 65, 
    name: "Magical Sparkle", 
    category: "t-neon", 
    group: "Spatial & Thematic", 
    prompt: "Crie uma Hero Section no estilo Magical Sparkle. O CSS deve usar um fundo escuro e cores de joias. Aplique box-shadow e text-shadow com alto desfoque para simular o brilho mágico e as partículas cintilantes nos elementos de UI." 
  },
  { 
    id: 70, 
    name: "Spatial Design", 
    category: "t-glass", 
    group: "Spatial & Thematic", 
    prompt: "Crie uma Hero Section no estilo Spatial Design. O CSS deve usar uma paleta de cores claras e box-shadow suaves e multicamadas para dar a sensação de que o painel está flutuando no espaço, com iluminação realista." 
  },

  // FASE 7: CREATIVE & LO-FI
  { 
    id: 28, 
    name: "Sticker Book", 
    category: "t-clean", 
    group: "Creative & Lo-Fi", 
    prompt: "Crie uma Hero Section no estilo Sticker Book. O CSS deve usar um fundo com padrão simples. Os elementos devem parecer adesivos die-cut com bordas brancas e sombras leves de descolamento." 
  },
  { 
    id: 38, 
    name: "Biomorphic Design", 
    category: "t-clay", 
    group: "Creative & Lo-Fi", 
    prompt: "Crie uma Hero Section no estilo Biomorphic Design. O CSS deve usar border-radius com múltiplas porcentagens para criar uma forma orgânica e curva ('blob') para o contentor principal. Evite linhas retas e use gradientes suaves para dar um aspeto tridimensional orgânico." 
  },
  { 
    id: 41, 
    name: "Cyberpunk Interface", 
    category: "t-neon", 
    group: "Creative & Lo-Fi", 
    prompt: "Crie uma Hero Section no estilo Cyberpunk Interface. O CSS deve usar um fundo preto e cores neon agressivas. Use clip-path para criar cantos cortados nos cartões e botões. Inclua um efeito de glitch no texto usando text-shadow e animação." 
  },
  { 
    id: 46, 
    name: "8-Bit / Pixelscape", 
    category: "t-retro", 
    group: "Creative & Lo-Fi", 
    prompt: "Crie uma Hero Section no estilo 8-Bit / Pixelscape. O CSS deve usar uma fonte pixelada. Aplique box-shadow com zero desfoque e um pequeno deslocamento para simular o efeito de profundidade em pixel art. Mantenha a paleta de cores estritamente limitada e saturada." 
  },
  { 
    id: 47, 
    name: "Gamified Cartoon", 
    category: "t-brutal", 
    group: "Creative & Lo-Fi", 
    prompt: "Crie uma Hero Section no estilo Gamified Cartoon. O CSS deve usar cores vibrantes, bordas grossas e elementos de UI que lembrem jogos (barras de vida, badges), com um tom divertido e energético." 
  },
  { 
    id: 48, 
    name: "Toy-Inspired 3D", 
    category: "t-clay", 
    group: "Creative & Lo-Fi", 
    prompt: "Crie uma Hero Section no estilo Toy-Inspired 3D. O CSS deve usar cores primárias vibrantes. Use gradientes lineares bruscos nos fundos para simular o reflexo de luz em plástico brilhante e duro." 
  },
  { 
    id: 49, 
    name: "Storybook Digital", 
    category: "t-clean", 
    group: "Creative & Lo-Fi", 
    prompt: "Crie uma Hero Section no estilo Storybook Digital. O CSS deve usar uma fonte de estilo de conto de fadas. O background deve ter uma textura suave de papel. A chave é usar um border que simule um traço de tinta à mão livre (irregularidade subtil)." 
  },
  { 
    id: 50, 
    name: "Kawaii Tech", 
    category: "t-clay", 
    group: "Creative & Lo-Fi", 
    prompt: "Crie uma Hero Section no estilo Kawaii Tech. O CSS deve usar cores pastel. Aplique border-radius extremos (bolhas/pílulas) a botões e cartões. O box-shadow deve ser muito suave para manter o aspeto macio e fofo." 
  },
  { 
    id: 51, 
    name: "Doodle Universe", 
    category: "t-clean", 
    group: "Creative & Lo-Fi", 
    prompt: "Crie uma Hero Section no estilo Doodle Universe. O CSS deve usar um fundo claro e simular desenhos feitos à mão com caneta, usando fontes manuscritas e bordas irregulares." 
  },
  { 
    id: 52, 
    name: "Paper Craft Digital", 
    category: "t-clean", 
    group: "Creative & Lo-Fi", 
    prompt: "Crie uma Hero Section no estilo Paper Craft Digital. O CSS deve usar box-shadow com um deslocamento definido e zero desfoque para dar a aparência de que os elementos são pedaços de papel com espessura e sombra discretas." 
  },
  { 
    id: 53, 
    name: "Play-Doh Digital", 
    category: "t-clay", 
    group: "Creative & Lo-Fi", 
    prompt: "Crie uma Hero Section no estilo Play-Doh Digital. O CSS deve usar border-radius alto e cores primárias. O box-shadow deve ser suave e difuso para dar a sensação de volume e textura da massa de modelar." 
  },

  // FASE 8: ATMOSPHERE & CULTURE
  { 
    id: 19, 
    name: "Gradient Mesh", 
    category: "t-glass", 
    group: "Atmosphere & Culture", 
    prompt: "Crie uma Hero Section no estilo Gradient Mesh. O CSS deve usar múltiplos radial-gradient sobrepostos com cores suaves e vibrantes. Aplique um filter: blur() elevado ao fundo para garantir que as cores se misturam organicamente, sem linhas duras." 
  },
  { 
    id: 23, 
    name: "Ambient Design", 
    category: "t-glass", 
    group: "Atmosphere & Culture", 
    prompt: "Crie uma Hero Section no estilo Ambient Design. O CSS deve usar uma paleta de cores neutras e calmantes. Use box-shadow e gradientes muito suaves e difusos para criar 'poças de luz' em vez de formas sólidas." 
  },
  { 
    id: 25, 
    name: "Parallax Storytelling", 
    category: "t-clean", 
    group: "Atmosphere & Culture", 
    prompt: "Crie uma Hero Section no estilo Parallax Storytelling. O CSS deve usar múltiplos layers de fundo e imagens com velocidades de scroll diferentes (simuladas ou com perspective CSS) para criar profundidade e narrativa visual." 
  },
  { 
    id: 54, 
    name: "Scandinavian Digital", 
    category: "t-clean", 
    group: "Atmosphere & Culture", 
    prompt: "Crie uma Hero Section no estilo Scandinavian Digital. O CSS deve usar muito espaço em branco e uma paleta de cores neutra e quente (cremes e cinzas suaves). A tipografia deve ser sans-serif, limpa e funcional." 
  },
  { 
    id: 55, 
    name: "Afrofuturism", 
    category: "t-neon", 
    group: "Atmosphere & Culture", 
    prompt: "Crie uma Hero Section no estilo Afrofuturism. O CSS deve usar uma paleta de cores ricas (Ouro, Roxo, Preto). Tente incorporar (via CSS gradients ou bordas) padrões geométricos repetitivos inspirados em têxteis africanos." 
  },
  { 
    id: 59, 
    name: "Eco-Brutalism", 
    category: "t-brutal", 
    group: "Atmosphere & Culture", 
    prompt: "Crie uma Hero Section no estilo Eco-Brutalism. O CSS deve usar fontes de sistema padrão (serif ou mono). A paleta deve misturar cinzentos crus (concreto) com verdes vibrantes. Evite sombras suaves; use bordas simples e layout em blocos." 
  },

  // FASE 9: MEDICAL & SURGICAL (The Triad)
  { 
    id: 66, 
    name: "Precision Surgical UI", 
    category: "t-medical", 
    group: "Medical & Surgical", 
    prompt: "Crie uma Hero Section no estilo Precision Surgical UI. O CSS deve ser ultra-limpo e estéril, com fundo branco. Use linhas divisórias muito finas e cores 'azul cirúrgico' para acentos. A tipografia deve ser pequena, precisa e altamente legível." 
  },
  { 
    id: 67, 
    name: "Scientific Atlas Modern", 
    category: "t-medical", 
    group: "Medical & Surgical", 
    prompt: "Crie uma Hero Section no estilo Scientific Atlas Modern. O CSS deve combinar uma tipografia serifada de autoridade com uma estética de livro científico. Use linhas finas para conectar etiquetas (labels) aos elementos visuais." 
  },
  { 
    id: 68, 
    name: "Surgical Blueprint", 
    category: "t-medical", 
    group: "Medical & Surgical", 
    prompt: "Crie uma Hero Section no estilo Surgical Blueprint Aesthetic. O CSS deve usar um fundo que simule papel milimétrico ou blueprint. Use fontes monoespaçadas e linhas tracejadas para simular anotações de medidas e cortes transversais." 
  },

  // NOVOS ESTILOS ADICIONADOS
  { 
    id: 71, 
    name: "Material Design", 
    category: "t-clean", 
    group: "Essential Tech", 
    prompt: "Crie uma Hero Section no estilo Material Design (Google). O CSS deve usar elevação através de box-shadow em múltiplas camadas, cores vibrantes mas harmoniosas, e border-radius de 4px nos elementos. Use tipografia Roboto e transições suaves de 300ms nos estados de hover." 
  },
  { 
    id: 72, 
    name: "Crayon Texture", 
    category: "t-clean", 
    group: "Creative & Lo-Fi", 
    prompt: "Crie uma Hero Section no estilo Crayon Texture. O CSS deve simular a textura irregular de lápis de cera, usando bordas onduladas (border-radius variável) e cores saturadas mas suaves. Aplique um efeito de textura granulada ao fundo para simular papel de desenho." 
  },
  { 
    id: 73, 
    name: "Wes Anderson", 
    category: "t-clean", 
    group: "Spatial & Thematic", 
    prompt: "Crie uma Hero Section no estilo Wes Anderson. O CSS deve usar uma paleta de cores pastel cuidadosamente curada (rosa pálido, amarelo mostarda, verde menta). O layout deve ser perfeitamente simétrico com tipografia centrada e serifada. Use bordas finas e espaçamento meticuloso." 
  },
  { 
    id: 74, 
    name: "Marvel HUD", 
    category: "t-neon", 
    group: "Spatial & Thematic", 
    prompt: "Crie uma Hero Section no estilo Marvel HUD (Iron Man/Avengers). O CSS deve usar um fundo escuro com elementos holográficos em azul e dourado. Use clip-path para criar formas angulares futurísticas e box-shadow com glow azul intenso. A tipografia deve ser tecnológica e em caixa alta." 
  },
  { 
    id: 75, 
    name: "Matrix Code", 
    category: "t-neon", 
    group: "Data & Science", 
    prompt: "Crie uma Hero Section no estilo Matrix Code. O CSS deve usar fundo preto absoluto (#000) com texto verde brilhante (#00ff00). A fonte deve ser monoespaçada e incluir uma animação @keyframes que simule código caindo verticalmente. Use text-shadow verde para o efeito de brilho." 
  },
  { 
    id: 76, 
    name: "Stranger Things 80s", 
    category: "t-retro", 
    group: "Spatial & Thematic", 
    prompt: "Crie uma Hero Section no estilo Stranger Things / 80s Horror. O CSS deve usar um fundo preto com tipografia vermelha em estilo néon (text-shadow vermelho com múltiplas camadas). Inclua um efeito de glitch sutil usando transform e opacity em animação. A paleta deve ser preto, vermelho e branco." 
  },
  { 
    id: 77, 
    name: "Minecraft Block", 
    category: "t-retro", 
    group: "Creative & Lo-Fi", 
    prompt: "Crie uma Hero Section no estilo Minecraft Block. O CSS deve usar uma estética pixelada com bordas retas (border-radius: 0). Use cores sólidas que lembrem blocos (verde grama, marrom terra, azul céu). A fonte deve ser pixelada e os elementos devem parecer construídos com blocos 3D usando box-shadow." 
  },
  { 
    id: 78, 
    name: "Deconstructivism", 
    category: "t-brutal", 
    group: "Artistic & Retro", 
    prompt: "Crie uma Hero Section no estilo Deconstructivism (Arquitetura). O CSS deve usar layouts assimétricos e fragmentados com transform: rotate() e skew() nos elementos. As formas devem parecer 'quebradas' ou deslocadas. Use uma paleta monocromática com toques de cor vibrante em pontos de tensão visual." 
  },
  { 
    id: 79, 
    name: "Parametric Design", 
    category: "t-clean", 
    group: "Data & Science", 
    prompt: "Crie uma Hero Section no estilo Parametric Design. O CSS deve usar gradientes suaves e formas orgânicas criadas com border-radius complexo. Simule linhas de fluxo (flow lines) usando borders curvos repetidos. A paleta deve ser minimalista com foco em geometria computacional elegante." 
  },
  { 
    id: 80, 
    name: "Phosphorescent Glow", 
    category: "t-neon", 
    group: "Atmosphere & Culture", 
    prompt: "Crie uma Hero Section no estilo Phosphorescent Glow. O CSS deve usar um fundo muito escuro com elementos que parecem brilhar no escuro (glow-in-the-dark). Use cores fosforescentes (verde-limão, ciano, rosa) com box-shadow e text-shadow extremamente difusos para simular a fosforescência." 
  },
  { 
    id: 81, 
    name: "Anti-Design", 
    category: "t-brutal", 
    group: "Artistic & Retro", 
    prompt: "Crie uma Hero Section no estilo Anti-Design. O CSS deve quebrar propositalmente todas as regras de design: tipografia desalinhada, cores que colidem, elementos sobrepostos de forma caótica. Use transform: rotate() com ângulos estranhos e misture fontes completamente diferentes. O objetivo é ser visualmente perturbador mas memorável." 
  },

  // ESTILOS PREMIUM ADICIONAIS
  { 
    id: 82, 
    name: "Brutalist Serif", 
    category: "t-brutal", 
    group: "Classic & Typography", 
    prompt: "Crie uma Hero Section no estilo Brutalist Serif com tipografia serifada de alto contraste (como Feature Display ou Reckless) para títulos. Combine com um grid estrito, bordas mínimas e muito espaço negativo. Use uma paleta monocromática com uma única cor de acento suave (verde floresta profundo ou bordô). A interface deve parecer uma ponte entre um livro de literatura clássica e uma ferramenta de código de alto nível." 
  },
  { 
    id: 83, 
    name: "Lunarpunk", 
    category: "t-neon", 
    group: "Spatial & Thematic", 
    prompt: "Crie uma Hero Section no estilo Lunarpunk com fundos em azul marinho profundo e carvão. Incorpore acentos bioluminescentes em ciano, violeta e verde limão. Os elementos de UI devem ter formas orgânicas e fluidas com brilhos internos suaves. Use campos sutis de partículas para sugerir uma atmosfera mágica mas high-tech. A interface deve parecer uma floresta à noite alimentada por tecnologia avançada e silenciosa." 
  },
  { 
    id: 84, 
    name: "Skeuomorphic Revival", 
    category: "t-dark", 
    group: "Tactile & Corp", 
    prompt: "Crie uma Hero Section no estilo Skeuomorphic Revival com texturas hiper-realistas. Os botões devem parecer alumínio fresado ou vidro polido com reflexos táteis. Use micro-sombras para criar profundidade física real. Incorpore materiais como metal escovado para cabeçalhos e texturas de couro suave para fundos. A UI deve parecer um objeto físico premium que você quase pode tocar." 
  },
  { 
    id: 85, 
    name: "Art Deco Modern", 
    category: "t-dark", 
    group: "Classic & Typography", 
    prompt: "Crie uma Hero Section no estilo Art Deco Modern com padrões geométricos repetitivos (leques, chevrons, raios de sol) em linhas douradas ou champanhe sobre fundos esmeralda escuro ou preto. Use tipografia sans-serif alta e condensada. Os divisores de UI devem ser traços finos dourados. A interface deve evocar a opulência dos anos 1920 misturada com precisão digital moderna." 
  },
  { 
    id: 86, 
    name: "AI-Fluid", 
    category: "t-glass", 
    group: "Data & Science", 
    prompt: "Crie uma Hero Section no estilo AI-Fluid com blobs iridescentes em movimento e gradientes líquidos. Use texturas de 'noise' sobre os gradientes para dar sensação física. A tipografia deve ser limpa e branca para contrastar com o fundo complexo e mutável. Os elementos devem parecer 'emergir' dos dados fluidos. A interface deve parecer viva, constantemente mudando e inteligente." 
  },
  { 
    id: 87, 
    name: "Liminal Space", 
    category: "t-clean", 
    group: "Atmosphere & Culture", 
    prompt: "Crie uma Hero Section no estilo Liminal Space com ambientes minimalistas e vazios como fundos. Use iluminação plana e direta e uma paleta desaturada (bege, azul pálido, cinza). Os layouts devem ser extremamente esparsos, com pontos focais únicos. A UI deve parecer quieta, levemente estranha, e focada numa única interação por vez, como um corredor de sonho." 
  },
  { 
    id: 88, 
    name: "Ukiyo-e Modern", 
    category: "t-clean", 
    group: "Atmosphere & Culture", 
    prompt: "Crie uma Hero Section no estilo Ukiyo-e Modern com contornos fortes, preenchimentos de cor planos, e texturas reminiscentes de xilogravuras tradicionais japonesas. Incorpore motivos como ondas estilizadas, nuvens ou montanhas no fundo. Use uma paleta de índigo, vermelhão e texturas de papel off-white. A tipografia deve ser vertical para elementos decorativos e limpa para texto funcional." 
  }
];