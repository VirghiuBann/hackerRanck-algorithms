function staircase(n) {
  const character = '#',
    space = ' ';

  for (var i = 1; i <= n; i++) {
    console.log(space.repeat(n - i) + character.repeat(i));
  }
}

staircase(6);
