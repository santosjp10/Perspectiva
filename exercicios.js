/* =====================================================================
   Isométrica — lista de peças (exercicios.js)
   Desenho Técnico — Agronomia — UFT, Câmpus Universitário de Gurupi
   Professor responsável: Jacinto Pereira Santos

   COMO INCLUIR UMA PEÇA
   1. Abra o aplicativo, clique em "Painel do professor" (rodapé) e use o
      "Editor de peças" para montar e conferir a peça.
   2. Clique em "Copiar código da peça" e cole a linha copiada no FIM da
      lista abaixo, antes do "];" final.
   3. Salve este arquivo e publique-o junto com o index.html.
   4. No Painel do professor, use "Verificar peças" para conferir tudo.

   CUIDADOS
   - Cada peça precisa de um id único, só com letras e números.
   - Inclua peças novas sempre no fim da lista: assim os números das peças
     antigas não mudam.
   - Uma vírgula ou colchete faltando impede o carregamento; nesse caso o
     aplicativo mostra um aviso. Peças com erro de cadastro são ignoradas
     e listadas no painel Exercício.

   FORMATOS
   layers: camadas de baixo para cima; em cada camada, as linhas vão do
           fundo para a frente da peça e as colunas da esquerda para a
           direita; "#" = bloco de 1 módulo, "." = vazio.
   prims:  B(x0,x1,y0,y1,z0,z1) = bloco;
           PR(eixo, de, até, [[a,b], ...]) = prisma de polígono convexo,
           extrudado ao longo do eixo ("x", "y" ou "z").
   ===================================================================== */
/* ACESSO AO PAINEL DO PROFESSOR
   Para proteger o painel com login e senha, abra o Painel do professor,
   seção "Acesso", gere a linha de acesso e substitua a linha abaixo por ela. */
window.ISO_PROFESSOR = null;

(function(){
const B=(...a)=>({box:a}), PR=(axis,from,to,poly)=>({prism:{axis,from,to,poly}});
const G1='Ficha de vistas (24 peças)', G2='Modelos de cubo, série 1', G3='Modelos de cubo, série 2';
const G4='Exercício 6 – Perspectivas (12 peças)';
window.ISO_EXERCICIOS = [
  { id:'l', grupo:'Série básica', nome:'Bloco em L', nivel:'Fácil', layers:[["###","###"],["#..","#.."]] },
  { id:'t', grupo:'Série básica', nome:'Bloco em T invertido', nivel:'Fácil', layers:[["####","####"],[".##.",".##."],[".##.",".##."]] },
  { id:'u', grupo:'Série básica', nome:'Bloco com rasgo em U', nivel:'Fácil', layers:[["####","####"],["#..#","#..#"]] },
  { id:'degraus', grupo:'Série básica', nome:'Degraus', nivel:'Médio', layers:[["###","###","###"],["###","###","..."],["###","...","..."]] },
  { id:'escada', grupo:'Série básica', nome:'Escada lateral', nivel:'Médio', layers:[["####","####"],["###.","###."],["##..","##.."],["#...","#..."]] },
  { id:'canto', grupo:'Série básica', nome:'Canto escalonado', nivel:'Médio', layers:[["###","###","###"],["##.","#..","..."],["#..","...","..."]] },
  { id:'ponte', grupo:'Série básica', nome:'Ponte', nivel:'Médio', layers:[["#.#","#.#"],["###","###"]] },
  { id:'recorte', grupo:'Série básica', nome:'Bloco com recortes', nivel:'Difícil', layers:[["####","####","####"],["####","####","##.."],["##..","##..","...."]] },
  { id:'cruz', grupo:'Série básica', nome:'Cruz com espigão', nivel:'Difícil', layers:[[".#.","###",".#."],[".#.",".#.","..."],[".#.","...","..."]] },
  { id:'canal', grupo:'Série básica', nome:'Parede com canal', nivel:'Difícil', layers:[["###","###","###"],["#.#","#.#","###"],["...","...","###"]] },
  { id:'moldura', grupo:'Série básica', nome:'Moldura vazada', nivel:'Difícil', layers:[["###","###"],["#.#","#.#"],["###","###"]] },
  { id:'ap1', grupo:'Exemplos do material', nome:'Cubo com canto rebaixado', nivel:'Médio',
    layers:[["####","####","####","####"],["####","####","####","####"],["####","####","..##","..##"],["####","####","..##","..##"]] },
  { id:'ap2', grupo:'Exemplos do material', nome:'Bloco chanfrado', nivel:'Médio',
    prims:[{ prism:{ axis:'x', from:0, to:4, poly:[[0,0],[4,0],[4,4],[2,4],[0,2]] } }] },
  { id:'ap3', grupo:'Exemplos do material', nome:'Bloco com rampa', nivel:'Difícil',
    prims:[{ box:[0,4,0,4,0,2] }, { box:[0,2,2,4,2,4] }, { prism:{ axis:'x', from:2, to:4, poly:[[0,2],[4,2],[4,4]] } }] },
  { id:'ap4', grupo:'Exemplos do material', nome:'Suporte em L com furo passante', nivel:'Difícil',
    layers:[
      ["#####","#####","#####","#####","#####"],
      ["#####","#####",".....",".....","....."],
      ["##..#","##..#",".....",".....","....."],
      ["##..#","##..#",".....",".....","....."],
      ["#####","#####",".....",".....","....."]],
    centros:{ front:[[1.5,3,4.5,3],[3,1.5,3,4.5]], left:[[-0.4,3,2.4,3]], top:[[3,2.6,3,5.4]] } },
  { id:'b1', grupo:'Exemplos do material (2)', nome:'Bloco com rampa lateral e degraus', nivel:'Médio',
    prims:[{ prism:{ axis:'x', from:0, to:3, poly:[[0,0],[4,0],[4,2]] } }, { box:[3,6,0,2,0,3] }, { box:[3,6,2,4,0,5] }] },
  { id:'b2', grupo:'Exemplos do material (2)', nome:'Bloco com degrau e rampa', nivel:'Médio',
    prims:[{ box:[0,3,0,4,0,2] }, { box:[3,6,0,4,0,3] }, { prism:{ axis:'x', from:3, to:6, poly:[[2,3],[4,3],[4,4]] } }] },
  { id:'b3', grupo:'Exemplos do material (2)', nome:'Bloco com ressalto e rebaixo frontal', nivel:'Médio',
    layers:[["######","######","######","######"],["######","######","......","......"],["..####","..####","......","......"],["..####","..####","......","......"]] },
  { id:'b4', grupo:'Exemplos do material (2)', nome:'Bloco em cadeira', nivel:'Fácil',
    layers:[["#####","#####","#####"],["#####","...##","...##"],["...##","...##","...##"]] },
  { id:'b5', grupo:'Exemplos do material (2)', nome:'Bloco chanfrado com nervura central', nivel:'Difícil',
    prims:[{ box:[0,3,1,2,0,3] }, { prism:{ axis:'y', from:0, to:1, poly:[[0,0],[3,0],[3,3],[2,3],[0,1]] } }, { prism:{ axis:'y', from:2, to:3, poly:[[0,0],[3,0],[3,3],[2,3],[0,1]] } }] },
  { id:'b6', grupo:'Exemplos do material (2)', nome:'Bloco trapezoidal com rasgo', nivel:'Difícil',
    prims:[{ prism:{ axis:'x', from:0, to:2, poly:[[0,0],[6,0],[6,2],[4,6],[2,6],[0,2]] } }, { prism:{ axis:'x', from:4, to:6, poly:[[0,0],[6,0],[6,2],[4,6],[2,6],[0,2]] } }, { prism:{ axis:'x', from:2, to:4, poly:[[0,0],[6,0],[6,2],[5,4],[1,4],[0,2]] } }] },

 {id:'f01',grupo:G1,nome:'Base com encosto lateral',nivel:'Fácil',prims:[B(0,4,0,7,0,2),B(4,6,0,7,0,5)]},
 {id:'f02',grupo:G1,nome:'Base com aleta central',nivel:'Fácil',prims:[B(0,5,0,3,0,2),B(2,3,0,3,2,4)]},
 {id:'f03',grupo:G1,nome:'Base com parede e torre',nivel:'Fácil',prims:[B(0,3,0,2,0,1),B(0,2,2,3,0,3),B(2,3,2,3,0,4)]},
 {id:'f04',grupo:G1,nome:'Cubo com cunha frontal',nivel:'Difícil',prims:[B(3,6,0,6,0,6),PR('x',0,3,[[0,0],[6,0],[6,6],[3,6]])]},
 {id:'f05',grupo:G1,nome:'Bloco alto com rampa',nivel:'Médio',prims:[B(3,6,0,6,0,6),PR('x',0,3,[[0,0],[6,0],[6,3],[3,3]])]},
 {id:'f06',grupo:G1,nome:'Cubo com rebaixo inclinado',nivel:'Difícil',prims:[B(4,6,0,6,0,6),PR('x',0,4,[[0,0],[6,0],[6,6],[4,6],[0,2]])]},
 {id:'f07',grupo:G1,nome:'Base recortada com cubo',nivel:'Fácil',prims:[B(0,1,1,2,0,1),B(1,3,0,2,0,1),B(2,3,1,2,1,2)]},
 {id:'f08',grupo:G1,nome:'Base em L com torre escalonada',nivel:'Médio',prims:[B(0,2,2,3,0,1),B(1,2,0,2,0,1),B(2,3,0,1,0,2),B(2,3,1,3,0,3)]},
 {id:'f09',grupo:G1,nome:'Base com rebaixo e torre escalonada',nivel:'Médio',prims:[B(0,1,1,2,0,1),B(1,2,0,3,0,1),B(2,3,0,1,0,2),B(2,3,1,3,0,3)]},
 {id:'f10',grupo:G1,nome:'Encosto com rasgo frontal',nivel:'Médio',prims:[B(0,2,0,4,0,2),B(2,4,2,4,0,2),B(4,6,0,4,0,2),B(0,6,4,6,0,5)]},
 {id:'f11',grupo:G1,nome:'Base vazada com blocos',nivel:'Difícil',prims:[B(0,2,0,2,0,2),B(0,2,4,6,0,2),B(2,4,0,6,0,2),B(4,7,2,6,0,2),B(4,7,0,2,0,3),B(4,7,4,6,2,4)]},
 {id:'f12',grupo:G1,nome:'Bloco escalonado inclinado',nivel:'Difícil',prims:[PR('x',0,3,[[0,0],[7,0],[7,2],[1,2]]),PR('x',3,5,[[0,0],[7,0],[7,6],[3,6]])]},
 {id:'f13',grupo:G1,nome:'Bloco com recorte diagonal',nivel:'Difícil',prims:[B(0,8,0,5,0,3),B(0,8,3,5,3,7),PR('z',3,7,[[6,0],[8,0],[8,3],[3,3]])]},
 {id:'f14',grupo:G1,nome:'Base com bloco chanfrado',nivel:'Médio',prims:[B(0,7,0,5,0,2),PR('x',3,7,[[0,2],[5,2],[5,5],[3,5]])]},
 {id:'f15',grupo:G1,nome:'Bloco com rampa e degrau',nivel:'Difícil',prims:[B(0,7,5,8,0,5),B(2,5,0,2,0,1),PR('x',2,5,[[2,0],[5,0],[5,5],[2,2]])]},
 {id:'f16',grupo:G1,nome:'Bloco com canal superior',nivel:'Fácil',prims:[B(0,7,0,5,0,4),B(0,2,0,5,4,6),B(5,7,0,5,4,6)]},
 {id:'f17',grupo:G1,nome:'Caixa com fundo inclinado',nivel:'Difícil',prims:[B(0,5,0,4,0,1),B(3,5,0,4,1,4),PR('x',0,3,[[2,1],[4,1],[4,4],[3,4]])]},
 {id:'f18',grupo:G1,nome:'Perfil I assimétrico',nivel:'Médio',prims:[B(0,3,0,6,0,2),B(0,3,2,4,2,4),B(0,3,1,5,4,6)]},
 {id:'f19',grupo:G1,nome:'Casa sobre base chanfrada',nivel:'Difícil',prims:[PR('x',0,5,[[0,0],[6,0],[6,1],[5,2],[1,2],[0,1]]),PR('x',0,5,[[1,2],[5,2],[5,4],[3,6],[1,4]])]},
 {id:'f20',grupo:G1,nome:'Bloco com canal lateral',nivel:'Fácil',prims:[B(0,5,0,6,0,2),B(0,5,0,2,2,4),B(0,5,4,6,2,5)]},
 {id:'f21',grupo:G1,nome:'Telhado com encosto',nivel:'Difícil',prims:[B(0,6,3,5,0,5),PR('y',0,3,[[0,0],[6,0],[6,4],[4,5],[2,5],[0,4]])]},
 {id:'f22',grupo:G1,nome:'Rampa com cunha',nivel:'Difícil',prims:[PR('x',0,5,[[0,0],[5,0],[5,6],[3,6]]),PR('x',3,5,[[0,0],[1,2],[0,2]])]},
 {id:'f23',grupo:G1,nome:'Perfil I',nivel:'Fácil',prims:[B(0,3,0,6,0,2),B(0,3,2,4,2,4),B(0,3,0,6,4,6)]},
 {id:'f24',grupo:G1,nome:'Base com torres escalonadas',nivel:'Médio',prims:[B(0,3,0,6,0,2),B(3,5,0,2,0,6),B(3,5,2,4,0,4),B(3,5,4,6,0,5)]},
 {id:'s1a',grupo:G2,nome:'Poltrona com degrau',nivel:'Fácil',prims:[B(0,3,0,3,0,1),B(0,3,2,3,1,3),B(2,3,0,2,1,2)]},
 {id:'s1b',grupo:G2,nome:'Cantoneira com pilar',nivel:'Fácil',prims:[B(0,3,0,3,0,1),B(0,3,2,3,1,3),B(2,3,1,2,1,3)]},
 {id:'s1c',grupo:G2,nome:'Bloco com ressalto',nivel:'Fácil',prims:[B(0,3,0,3,0,2),B(2,3,0,3,2,3)]},
 {id:'s1d',grupo:G2,nome:'Cantoneira com escada',nivel:'Médio',prims:[B(0,3,0,3,0,1),B(0,3,2,3,1,3),B(1,3,0,2,1,2),B(1,3,1,2,2,3)]},
 {id:'s1e',grupo:G2,nome:'Cubo com rebaixo em L',nivel:'Médio',layers:[["###","###","###"],["###","#.#","..#"],["###","#.#","..#"]]},
 {id:'s1f',grupo:G2,nome:'Cubo com laje em balanço',nivel:'Médio',prims:[B(0,3,0,3,2,3),B(1,3,0,3,0,2)]},
 {id:'s2a',grupo:G3,nome:'Cubo com cavidade de canto',nivel:'Fácil',layers:[["###","###","###"],["###","..#","..#"],["###","..#","..#"]]},
 {id:'s2b',grupo:G3,nome:'Bloco com canal em U',nivel:'Fácil',prims:[B(0,3,0,3,0,1),B(0,1,0,3,1,2),B(2,3,0,3,1,2)]},
 {id:'s2c',grupo:G3,nome:'Cavidade com degrau',nivel:'Médio',layers:[["###","###","###"],["###",".##",".##"],["###","..#","..#"]]},
 {id:'s2d',grupo:G3,nome:'Bloco em C',nivel:'Fácil',prims:[B(0,3,0,3,0,1),B(0,3,0,3,2,3),B(2,3,0,3,1,2)]},
 {id:'s2e',grupo:G3,nome:'Cavidade com coluna',nivel:'Médio',prims:[B(0,3,0,3,0,1),B(0,3,2,3,1,3),B(1,2,0,2,1,3)]},
 {id:'s2f',grupo:G3,nome:'Pilar com canal em L',nivel:'Médio',layers:[["###","###","###"],["###","..#","#.#"],["###","..#","#.#"]]},
 {id:'p01',grupo:G4,nome:'6.1 – Cantoneira com rampa e parede oblíqua',nivel:'Difícil',prims:[B(0,1,0,1,0,1),B(1,4,0,3,0,1),PR('x',0,1,[[1,0],[3,0],[3,1]]),B(3,4,0,3,0,3),PR('z',1,3,[[2,3],[3,3],[3,1]])]},
 {id:'p02',grupo:G4,nome:'6.2 – Bloco em C com torre',nivel:'Médio',prims:[B(0,10,0,4,0,2),B(4,10,0,4,2,3),B(4,6,0,4,3,4),B(0,6,0,4,4,6),B(8,10,0,4,3,6)]},
 {id:'p03',grupo:G4,nome:'6.3 – Bloco com dois degraus',nivel:'Fácil',prims:[B(0,6,0,5,0,2),B(0,6,1,5,2,3),B(1,6,1,5,3,4)]},
 {id:'p04',grupo:G4,nome:'6.4 – Bloco vazado com canto rebaixado',nivel:'Difícil',prims:[B(0,5,4,5,0,4),B(4,5,0,4,0,4),B(0,1,3,4,0,4),B(3,4,0,1,0,4),B(0,1,0,3,0,3),B(0,3,0,1,0,3)]},
 {id:'p05',grupo:G4,nome:'6.5 – Bloco com degrau e cunha',nivel:'Médio',prims:[B(0,6,0,6,0,3),B(2,6,0,6,3,4),PR('y',1,6,[[2,4],[6,4],[6,6]])]},
 {id:'p06',grupo:G4,nome:'6.6 – Bloco com plano inclinado entre paredes',nivel:'Difícil',prims:[PR('x',0,8,[[0,0],[6,0],[6,5],[0,2]]),B(0,2,4,6,0,5),B(6,8,0,6,0,5)]},
 {id:'p07',grupo:G4,nome:'6.7 – Base com encosto em T',nivel:'Médio',prims:[B(0,7,1,4,0,1),B(2,5,0,1,0,1),B(0,7,3,4,1,3),B(2,5,3,4,3,4)]},
 {id:'p08',grupo:G4,nome:'6.8 – Bloco com túneis cruzados e furo central',nivel:'Difícil',prims:[B(0,2,0,2,0,4),B(4,6,0,2,0,4),B(0,2,4,6,0,4),B(4,6,4,6,0,4),B(2,4,0,2,2,4),B(2,4,4,6,2,4),B(0,2,2,4,2,4),B(4,6,2,4,2,4)]},
 {id:'p09',grupo:G4,nome:'6.9 – Bloco chanfrado com rasgo lateral',nivel:'Médio',prims:[PR('y',0,6,[[0,0],[4,0],[4,4],[2,4],[0,2]]),B(4,7,0,1,0,2),B(4,7,5,6,0,2),B(4,6,1,5,0,2)]},
 {id:'p10',grupo:G4,nome:'6.10 – Bloco com canal e rebaixos',nivel:'Médio',prims:[B(0,8,0,4,0,2),B(0,2,0,1,2,4),B(6,8,0,1,2,4),B(2,6,0,1,2,3),B(0,2,3,4,2,4),B(6,8,3,4,2,4),B(2,6,3,4,2,3)]},
 {id:'p11',grupo:G4,nome:'6.11 – Coluna com rampa',nivel:'Fácil',prims:[B(0,6,0,4,0,2),B(4,6,0,4,2,8),PR('y',0,4,[[2,2],[4,2],[4,6]])]},
 {id:'p12',grupo:G4,nome:'6.12 – Bloco com furos passantes cruzados',nivel:'Difícil',prims:[B(0,6,0,6,0,1),B(0,6,0,2,1,5),B(0,6,4,6,1,5),B(0,6,0,6,5,6),B(0,1,0,6,6,8),B(5,6,0,6,6,8),B(0,6,0,6,8,9)]}
];
})();
