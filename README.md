## 🕹️ Pac-Man Game: Arquitetura Orientada a Objetos em 2D

Uma reimplementação do clássico jogo **Pac-Man**, desenvolvida do zero utilizando **JavaScript puro** e o **HTML5 Canvas**. O projeto demonstra habilidades avançadas em **Programação Orientada a Objetos (POO)** e na criação de uma lógica de jogo modular e de alta fidelidade.

-----

## ✨ Destaques Técnicos e Arquitetura

O coração deste projeto é a arquitetura modular e a precisão da lógica de colisão necessária para replicar a experiência clássica de Pac-Man.

  * **Programação Orientada a Objetos (POO):** O jogo é construído sobre uma forte fundação de classes, garantindo clareza, legibilidade e divisão de responsabilidades.
  * **Divisão de Responsabilidades:** Classes específicas foram criadas para gerenciar cada entidade do jogo:
      * `Player`: Lógica de movimento, direção e estado.
      * `Enemy` (Fantasmas): Lógica de perseguição e movimento.
      * `Boundary`: Criação dos limites do mapa para detecção de colisão.
      * `Pellet` (Bolinhas): Posição e lógica de captura.
  * **Detecção de Colisão de Precisão:** Implementação de um sistema de colisão complexo para:
      * **Extremidades/Muros:** O *player* e os inimigos só podem virar ao atingir um cruzamento e não podem atravessar paredes.
      * **Bolinhas/Itens:** Lógica de captura das bolinhas.
      * **Player vs. Inimigo:** Lógica de captura/eliminação do *player*.
  * **Desenho e Lógica Baseados em *Tiles***: O mapa é renderizado e a movimentação é controlada com base em uma matriz de *tiles*, garantindo o comportamento autêntico de **Pac-Man**.

-----

## 💻 Tecnologias Utilizadas

O projeto foi intencionalmente mantido sem *frameworks*, destacando o domínio da API do Canvas e do JavaScript.

  * **HTML5 Canvas** (Renderização gráfica 2D e *game loop*)
  * **JavaScript (Puro)** (Toda a lógica do jogo, POO e controle de estado)
  * **CSS3** (Estilização da tela e *layout* básico)

-----

## 🛠️ Primeiros Passos

Este projeto não requer dependências externas além de um navegador moderno.

### 📥 Instalação

1.  **Clone o repositório:**
    ```bash
    git clone https://docs.github.com/pt/repositories/creating-and-managing-repositories/quickstart-for-repositories
    ```
2.  **Navegue até a pasta do projeto:**
    ```bash
    cd pacman-game-clone
    ```
3.  **Abra o arquivo `index.html`** no seu navegador.

### 🕹️ Controles

| Ação | Tecla |
| :--- | :--- |
| Mover para Cima | **W** |
| Mover para Baixo | **S** |
| Mover para Esquerda | **A** |
| Mover para Direita | **D** |

-----

## ⚙️ Estrutura do Código (Visão POO)

A organização do projeto segue a arquitetura de Orientação a Objetos, com cada arquivo ou classe lidando com uma responsabilidade única:

  * `index.js` (ou `game.js`): Inicialização do Canvas, *game loop* e gerenciamento das instâncias do jogo.
  * `Player.js`: Lida com o input do usuário, movimento e estados do Pac-Man.
  * `Enemy.js` (ou `Ghost.js`): Lida com o movimento autônomo e o estado de perseguição/fuga.
  * `Boundary.js`: Define as barreiras invisíveis do mapa que controlam o movimento.
  * `Pellet.js`: Representa as bolinhas no mapa e gerencia sua coleta.
