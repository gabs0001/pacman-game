//adicionando as imagens de acordo com o simbolo no mapa
const createMap = () => {
    map.forEach((row, i) => {
        row.forEach((symbol, j) => {
            switch (symbol) {
                case '-':
                boundaries.push(
                    new Boundary({
                    position: {
                        x: Boundary.width * j,
                        y: Boundary.height * i
                    },
                    image: createImage('./img/pipeHorizontal.png')
                    })
                )
                break
                case '|':
                boundaries.push(
                    new Boundary({
                    position: {
                        x: Boundary.width * j,
                        y: Boundary.height * i
                    },
                    image: createImage('./img/pipeVertical.png')
                    })
                )
                break
                case '1':
                boundaries.push(
                    new Boundary({
                    position: {
                        x: Boundary.width * j,
                        y: Boundary.height * i
                    },
                    image: createImage('./img/pipeCorner1.png')
                    })
                )
                break
                case '2':
                boundaries.push(
                    new Boundary({
                    position: {
                        x: Boundary.width * j,
                        y: Boundary.height * i
                    },
                    image: createImage('./img/pipeCorner2.png')
                    })
                )
                break
                case '3':
                boundaries.push(
                    new Boundary({
                    position: {
                        x: Boundary.width * j,
                        y: Boundary.height * i
                    },
                    image: createImage('./img/pipeCorner3.png')
                    })
                )
                break
                case '4':
                boundaries.push(
                    new Boundary({
                    position: {
                        x: Boundary.width * j,
                        y: Boundary.height * i
                    },
                    image: createImage('./img/pipeCorner4.png')
                    })
                )
                break
                case 'b':
                boundaries.push(
                    new Boundary({
                    position: {
                        x: Boundary.width * j,
                        y: Boundary.height * i
                    },
                    image: createImage('./img/block.png')
                    })
                )
                break
                case '[':
                boundaries.push(
                    new Boundary({
                    position: {
                        x: j * Boundary.width,
                        y: i * Boundary.height
                    },
                    image: createImage('./img/capLeft.png')
                    })
                )
                break
                case ']':
                boundaries.push(
                    new Boundary({
                    position: {
                        x: j * Boundary.width,
                        y: i * Boundary.height
                    },
                    image: createImage('./img/capRight.png')
                    })
                )
                break
                case '_':
                boundaries.push(
                    new Boundary({
                    position: {
                        x: j * Boundary.width,
                        y: i * Boundary.height
                    },
                    image: createImage('./img/capBottom.png')
                    })
                )
                break
                case '^':
                boundaries.push(
                    new Boundary({
                    position: {
                        x: j * Boundary.width,
                        y: i * Boundary.height
                    },
                    image: createImage('./img/capTop.png')
                    })
                )
                break
                case '+':
                boundaries.push(
                    new Boundary({
                    position: {
                        x: j * Boundary.width,
                        y: i * Boundary.height
                    },
                    image: createImage('./img/pipeCross.png')
                    })
                )
                break
                case '5':
                boundaries.push(
                    new Boundary({
                    position: {
                        x: j * Boundary.width,
                        y: i * Boundary.height
                    },
                    color: 'blue',
                    image: createImage('./img/pipeConnectorTop.png')
                    })
                )
                break
                case '6':
                boundaries.push(
                    new Boundary({
                    position: {
                        x: j * Boundary.width,
                        y: i * Boundary.height
                    },
                    color: 'blue',
                    image: createImage('./img/pipeConnectorRight.png')
                    })
                )
                break
                case '7':
                boundaries.push(
                    new Boundary({
                    position: {
                        x: j * Boundary.width,
                        y: i * Boundary.height
                    },
                    color: 'blue',
                    image: createImage('./img/pipeConnectorBottom.png')
                    })
                )
                break
                case '8':
                boundaries.push(
                    new Boundary({
                    position: {
                        x: j * Boundary.width,
                        y: i * Boundary.height
                    },
                    image: createImage('./img/pipeConnectorLeft.png')
                    })
                )
                break
                case '.':
                pellets.push(
                    new Pellet({
                    position: {
                        x: j * Boundary.width + Boundary.width / 2,
                        y: i * Boundary.height + Boundary.height / 2
                    }
                    })
                )
                break
                case 'p':
                powerUps.push(
                    new PowerUp({
                    position: {
                        x: j * Boundary.width + Boundary.width / 2,
                        y: i * Boundary.height + Boundary.height / 2
                    }
                    })
                )
                break
            }
        })
    })
}

const playerMovement = () => {
    //cima
    if(keys.w.pressed && lastKey === 'w') {
        for(let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i]
            if(circleCollidesWithRectangle({
                circle: {...player, velocity: {
                    x: 0,
                    y: -5
                }}, 
                rectangle: boundary
            })){
                player.velocity.y = 0
                break
            }
            else player.velocity.y = -5
        }
    }
    //esquerda
    else if(keys.a.pressed && lastKey === 'a') {
        for(let i = 0; i < boundaries.length; i++){
            const boundary = boundaries[i]
            if(circleCollidesWithRectangle({
                circle: {...player, velocity: {
                    x: -5,
                    y: 0
                }}, 
                rectangle: boundary
            })){
                player.velocity.x = 0
                break
            }
            else player.velocity.x = -5
        }
    }
    //baixo
    else if(keys.s.pressed && lastKey === 's') {
        for(let i = 0; i < boundaries.length; i++){
            const boundary = boundaries[i]
            if(circleCollidesWithRectangle({
                circle: {...player, velocity: {
                    x: 0,
                    y: 5
                }}, 
                rectangle: boundary
            })){
                player.velocity.y = 0
                break
            }
            else player.velocity.y = 5
        }
    }
    //direita
    else if(keys.d.pressed && lastKey === 'd') {
        for(let i = 0; i < boundaries.length; i++){
            const boundary = boundaries[i]
            if(circleCollidesWithRectangle({
                circle: {...player, velocity: {
                    x: 5,
                    y: 0
                }}, 
                rectangle: boundary
            })){
                player.velocity.x = 0
                break
            }
            else player.velocity.x = 5
        }
    }
}

//verifica se o player e o inimigo estão em contato
//se o fantasma estiver assustado, o player pode comê-lo
const removeGhosts = () => {
    for(let i = ghosts.length - 1; 0 <= i; i--) {
        const ghost = ghosts[i]
        //colisão do fantasma com o player
        if(Math.hypot(
          ghost.position.x - player.position.x, ghost.position.y - player.position.y) < 
          ghost.radius + player.radius
        ){
          if(ghost.scared) ghosts.splice(i, 1)
          else cancelAnimationFrame(animationId)
        }
    }
}

const winCondition = () => {
    if(pellets.length === 0) {
        console.log('you win')
        cancelAnimationFrame(animationId)
    }
}

//removen o powerup conforme o player colide com ele
const removePowerup = () => {
    for(let i = powerUps.length - 1; 0 <= i; i--) {
        const powerUp = powerUps[i]
        powerUp.draw()
        //colisão do player com o powerup
        if(Math.hypot(
          powerUp.position.x - player.position.x, powerUp.position.y - player.position.y) < 
          powerUp.radius + player.radius
        ){
          powerUps.splice(i, 1)
          ghosts.forEach(ghost => {
            ghost.scared = true
            setTimeout(() => ghost.scared.false , 5000)
          })
        }
    }
}

//remove as bolinhas conforme o player colide com elas e acrescenta 10 pontos no placar
const removePellets = () => {
    for(let i = pellets.length - 1; 0 <= i; i--) {
        const pellet = pellets[i]
        pellet.draw()
        //colisão do jogador com as bolinhas
        if(Math.hypot(
          pellet.position.x - player.position.x, pellet.position.y - player.position.y) < 
          pellet.radius + player.radius
        ){
            pellets.splice(i, 1)
            score += 10
            scoreEl.innerHTML = score
        }
    }
}

//checagem de colisão com os limites da tela do game
const boundaryCollision = () => {
    boundaries.forEach(boundary => {
        boundary.draw()
        //colisão do player com os limites da tela
        if(circleCollidesWithRectangle({circle: player, rectangle: boundary})){
            player.velocity.x = 0
            player.velocity.y = 0
        }
    })
}

const createGhosts = () => {
    ghosts.forEach(ghost => {
        ghost.update()
        const collisions = []
        boundaries.forEach(boundary => {
            if(!collisions.includes('right') && circleCollidesWithRectangle({
                circle: {
                    ...ghost, 
                velocity: {
                    x: ghost.speed,
                    y: 0
                }}, 
                rectangle: boundary
            }))
            {
              collisions.push('right')
            }

            if(!collisions.includes('left') && circleCollidesWithRectangle({
                circle: {
                    ...ghost, 
                velocity: {
                    x: -ghost.speed,
                    y: 0
                }}, 
                rectangle: boundary
            }))
            {
              collisions.push('left')
            }

            if(!collisions.includes('up') && circleCollidesWithRectangle({
                circle: {
                    ...ghost, 
                velocity: {
                    x: 0,
                    y: -ghost.speed
                }}, 
                rectangle: boundary
            }))
            {
              collisions.push('up')
            }

            if(!collisions.includes('down') && circleCollidesWithRectangle({
                circle: {
                    ...ghost, 
                velocity: {
                    x: 0,
                    y: ghost.speed
                }}, 
                rectangle: boundary
            }))
            {
              collisions.push('down')
            }
        })

        if(collisions.length > ghost.prevCollisions.length) ghost.prevCollisions = collisions

        /* comparando os arrays de colisão anterior e colisão atual, verificando se há valores diferentes entre os dois e traçando os caminhos
        que o fantasma pode seguir */
        if(JSON.stringify(collisions) !== JSON.stringify(ghost.prevCollisions)){
            if(ghost.velocity.x > 0) ghost.prevCollisions.push('right')
            else if(ghost.velocity.x < 0) ghost.prevCollisions.push('left')
            else if(ghost.velocity.y < 0) ghost.prevCollisions.push('up')
            else if(ghost.velocity.y > 0) ghost.prevCollisions.push('down')
            const pathways = ghost.prevCollisions.filter(collision=>{
                return !collisions.includes(collision)
            })
            const direction = pathways[Math.floor(Math.random() * pathways.length)]
            switch(direction){
                case 'down':
                    ghost.velocity.y = ghost.speed
                    ghost.velocity.x = 0
                break
                case 'up':
                    ghost.velocity.y = -ghost.speed
                    ghost.velocity.x = 0
                break
                case 'right':
                    ghost.velocity.y = 0
                    ghost.velocity.x = ghost.speed
                break
                case 'left':
                    ghost.velocity.y = 0
                    ghost.velocity.x = -ghost.speed
                break
            }
            ghost.prevCollisions = []
        }
    })
}