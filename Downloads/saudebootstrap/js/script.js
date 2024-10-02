document.getElementById('health-form').addEventListener('submit', function (event) {
  event.preventDefault();

  const activityType = document.getElementById('activity-type').value;
  const CaloriasInput = document.getElementById('Calorias').value;
  const Calorias = parseInt(CaloriasInput);

  if (isNaN(Calorias) || Calorias <= 0) {
    document.getElementById('error-message').innerText = 'Por favor, insira um valor válido.';
    return;
  } else {
    document.getElementById('error-message').innerText = '';
  }

  let unidade;
  if (activityType === 'Comer') {
    unidade = 'calorias'; 
  } else {
    unidade = 'minutos'; 
  }

  const report = document.getElementById('report');
  const newEntry = document.createElement('p');
  newEntry.innerText = `Atividade: ${activityType}, ${Calorias} ${unidade}: `;
  report.appendChild(newEntry);

  syncData({ activityType, Calorias });
});

async function syncData(data) {
  try {
    const response = await fetch('https://api.exemplo.com/sync', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    console.log('Sincronizado com sucesso:', result);
  } catch (error) {
    console.error('Erro ao sincronizar:', error);
  }
}
