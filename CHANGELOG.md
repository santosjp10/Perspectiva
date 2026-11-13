# Histórico de versões

## 2.2 (novembro de 2026)
- Login e senha para o Painel do professor, configurados pelo próprio painel (seção Acesso) e gravados como código derivado da senha no `exercicios.js`.

## 2.1.1 (novembro de 2026)
- Gerador de PDF movido para a mesma pasta do aplicativo (sem a subpasta `vendor`), para facilitar o envio ao GitHub pelo navegador.

## 2.1 (novembro de 2026)
- Lista de peças separada no arquivo `exercicios.js`, com verificação de cada peça ao abrir: peças com erro de cadastro são ignoradas e listadas, sem impedir o funcionamento do aplicativo.
- Painel do professor (rodapé ou `#professor`): gerador de link de atividade (modo, avaliação e lista de peças), editor de peças com pré-visualização e verificação de todas as peças.
- Atividades com lista de peças: a nota geral e os relatórios consideram só as peças da atividade.
- Nota: o conceito "Excelente" (95 a 100) passa a exigir desenho sem erros; desenhos com algum erro ficam limitados a 94.
- Zoom e deslocamento da malha: botões + e −, Ajustar, ferramenta Mover, Ctrl + roda do mouse e gesto de pinça com dois dedos.
- Modo 2: botão Ampliar para ver a perspectiva em tamanho grande.
- Gerador de PDF incluído no pacote (funciona sem internet).
- Número da versão no rodapé, no relatório em PDF, no CSV e no arquivo de progresso.

## 2.0 (novembro de 2026)
- Arquivo de progresso (salvar e abrir) com código de verificação.
- Registro da nota da 1ª tentativa e da consulta ao gabarito; modo avaliação por link.
- Malha nas faces da perspectiva no modo 2.
- Modo 2: Perspectiva → Vistas, com seleção automática das peças dedutíveis e vista de trás.

## 1.x (outubro de 2026)
- Modo 1: Vistas → Perspectiva, com avaliação automática, progresso por aluno e relatórios em PDF e CSV.
