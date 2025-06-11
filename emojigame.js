
  const emojiList = ['😎', '🙂', '😇', '🤪', '😱', '🥰', '😍', '🤭'];
  let emojis = [...emojiList, ...emojiList];
  const gameContainer = document.getElementById('game');
  const messageEl = document.getElementById('message');

  let firstGuess = null;
  let secondGuess = null;
  let lockBoard = false;
  let matchedPairs = 0;
  let matchedEmojis = [];

  // Initialize the game board
  function createBoard() {
    gameContainer.innerHTML = '';
    emojis.forEach((emoji, idx) => {
      const tile = document.createElement('div');
      tile.classList.add('tile');
      tile.textContent = emoji;

      // Initially hide tiles unless matched
      if (!matchedEmojis.includes(emoji)) {
        tile.classList.add('hidden');
      }

      tile.addEventListener('click', () => handleTileClick(tile, emoji));
      gameContainer.appendChild(tile);
    });
  }

  // Shuffle emojis array
  function shuffleEmojis() {
    for (let i = emojis.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [emojis[i], emojis[j]] = [emojis[j], emojis[i]];
    }
  }

  
  function handleTileClick(tile, emoji) {
    if (lockBoard || !tile.classList.contains('hidden') || tile === firstGuess) return;

    tile.classList.remove('hidden');

    if (!firstGuess) {
      firstGuess = tile;
    } else {
      secondGuess = tile;
      lockBoard = true;

      if (firstGuess.textContent === secondGuess.textContent) {
        // Matched pair
        matchedPairs++;
        matchedEmojis.push(emoji);
        firstGuess = null;
        secondGuess = null;
        lockBoard = false;

        if (matchedPairs === emojiList.length) {
          messageEl.textContent = 'Well done!✨';
        }

        
        shuffleUnmatchedTiles();

      } else {
       
        setTimeout(() =>  {
          firstGuess.classList.add('hidden');
          secondGuess.classList.add('hidden');
          firstGuess = null;
          secondGuess = null;
          lockBoard = false;
        }, 1000);
      }
    }
  }

  // Shuffle only the unmatched tiles
  function shuffleUnmatchedTiles() {
    // Keep matched emojis at their positions
    const unmatchedTiles = emojis.filter(e => !matchedEmojis.includes(e));

    // Shuffle the unmatched tiles
    for (let i = unmatchedTiles.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [unmatchedTiles[i], unmatchedTiles[j]] = [unmatchedTiles[j], unmatchedTiles[i]];
    }

    // Merge back: matched tiles stay, unmatched shuffled
    let idx = 0;
    emojis = emojis.map(e => {
      if (matchedEmojis.includes(e)) {
        return e;
      } else {
        return unmatchedTiles[idx++];
      }
    });

    createBoard();
  }

  // Initial shuffle and create
  shuffleEmojis();
  createBoard();