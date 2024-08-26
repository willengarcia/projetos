const { Aki } = require('aki-api'); // Importando a função Aki de aki-api
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const region = 'pt'; // Mude para 'pt' para português

async function startGame() {
  const aki = new Aki({ region });

  await aki.start();

  while (aki.progress < 90 && aki.currentStep < 80) {
    console.log(aki.question);
    for (let i = 0; i < aki.answers.length; i++) {
      console.log(`${i}. ${aki.answers[i]}`);
    }

    const answer = await new Promise((resolve) => {
      rl.question('Escolha uma opção: ', (response) => {
        resolve(parseInt(response));
      });
    });

    await aki.step(answer);
  }

  await aki.win();
  console.log(`Personagem: ${aki.answers[0].name}`);
  console.log(`Descrição: ${aki.answers[0].description}`);
  console.log(`Link: ${aki.answers[0].absolute_picture_path}`);

  rl.close();
}

startGame();
