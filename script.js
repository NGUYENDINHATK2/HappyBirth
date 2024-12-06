const snowContainer = document.querySelector('.snow');

function createSnowflake() {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  snowflake.style.left = `${Math.random() * 100}vw`;
  snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
  snowflake.style.fontSize = `${Math.random() * 10 + 10}px`;
  snowflake.innerHTML = '❄';
  snowContainer.appendChild(snowflake);

  setTimeout(() => {
    snowflake.remove();
  }, 5000);
}

setInterval(createSnowflake, 200);
