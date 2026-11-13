# Isométrica: perspectiva isométrica e vistas ortográficas

Aplicativo desenvolvido para os alunos da disciplina de Desenho Técnico do curso de Agronomia da Universidade Federal do Tocantins (UFT), Câmpus Universitário de Gurupi.
Professor responsável: Jacinto Pereira Santos.

Versão: 2.1 (novembro de 2026)

## Arquivos

| Arquivo | Conteúdo |
|---|---|
| `index.html` | O aplicativo: motor geométrico, interface, avaliação e relatórios |
| `exercicios.js` | A lista de peças. É o único arquivo que precisa ser editado para incluir ou alterar peças |
| `vendor/jspdf.umd.min.js` | Gerador de PDF (biblioteca jsPDF 2.5.1, licença MIT), incluído para funcionar sem internet |
| `README.md` | Este guia |
| `CHANGELOG.md` | Histórico de versões |

Os três primeiros arquivos (e a pasta `vendor`) precisam ficar juntos na mesma pasta, tanto no computador quanto no GitHub.

## Publicar no GitHub Pages

1. No repositório `santosjp10.github.io`, abra a pasta `Perspectiva`.
2. Envie (Add file → Upload files) os arquivos `index.html`, `exercicios.js`, `README.md`, `CHANGELOG.md` e a pasta `vendor`, substituindo os antigos.
3. Aguarde alguns minutos e abra `https://santosjp10.github.io/Perspectiva/`. O rodapé mostra a versão em uso.

Sugestão: mantenha uma pasta de teste (por exemplo `Perspectiva-teste`) para conferir uma versão nova antes de substituir a dos alunos.

## Incluir uma peça

1. Abra o aplicativo e clique em **Painel do professor** (rodapé) → **Editor de peças**.
2. Monte a peça por camadas de blocos ou cole a definição em **Código (avançado)**. A pré-visualização mostra a perspectiva, as vistas e eventuais problemas.
3. Use **Testar no aplicativo** para desenhar a peça antes de publicá-la.
4. Clique em **Copiar código da peça** e cole a linha no fim da lista em `exercicios.js`, antes do `];` final.
5. Publique o `exercicios.js` e confira tudo em **Painel do professor** → **Verificar peças**.

Inclua peças novas sempre no fim da lista, para que os números das peças antigas não mudem.

## Links para a turma

| Link | Abre |
|---|---|
| `…/Perspectiva/` ou `#perspectiva` | Modo 1 (Vistas → Perspectiva), prática |
| `#vistas` | Modo 2 (Perspectiva → Vistas), prática |
| `#avaliacao` | Modo 1 em modo avaliação |
| `#avaliacao-vistas` | Modo 2 em modo avaliação |
| `…-lista-id1-id2-…` | Restringe a atividade às peças indicadas (gere pelo Painel do professor) |
| `#professor` | Abre o Painel do professor |

No modo avaliação, o gabarito fica desativado, as linhas faltantes não são destacadas e cada peça pode ser avaliada até 3 vezes por modo.

## Progresso dos alunos

O progresso fica no navegador de cada computador. Para trabalhar em mais de um computador e entregar o trabalho, o aluno usa **Salvar progresso**, que gera um arquivo `.json`. O professor abre esse arquivo com **Abrir progresso** e gera o relatório em PDF ou CSV. O código de verificação indica se o arquivo foi alterado manualmente.
