  function colores() {
    const colorPicker = document.getElementById('colorPicker');
    const selectedColor = colorPicker.value;
    const colorDisplay = document.getElementById('colorDisplay');
    colorDisplay.style.width = '100px';
    colorDisplay.style.height = '100px';
    colorDisplay.style.backgroundColor = selectedColor;
    colorDisplay.style.border = '1px solid #000';
    colorDisplay.style.marginTop = '10px';
    colorDisplay.style.display = 'flex';
    colorDisplay.style.alignItems = 'center';
    colorDisplay.style.justifyContent = 'center';
    colorDisplay.style.fontFamily = 'Arial, sans-serif';
    colorDisplay.style.fontSize = '14px';
    colorDisplay.style.textAlign = 'center';
    colorDisplay.style.boxSizing = 'border-box';
    colorDisplay.style.userSelect = 'none';
    colorDisplay.style.cursor = 'default';
    colorDisplay.style.color = '#fff';
    colorDisplay.innerText = `Color seleccionado: ${selectedColor}`;
}

function colores() {
    const colorPicker = document.getElementById('colorPicker');
    const selectedColor = colorPicker.value;
    const colorDisplay = document.getElementById('colorDisplay');

    colorDisplay.style.backgroundColor = selectedColor;
    colorDisplay.textContent = `Color seleccionado: ${selectedColor}`;
}

window.addEventListener('load', function() {
    const sound = document.getElementById('loader-sound');
    sound.play().catch(e => console.log("Sonido no reproducido (política de autoplay):", e));
    setTimeout(() => {
        const loader = document.getElementById('loader');
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
            document.querySelector('.content').style.display = 'block';
        }, 500); 
    }, 2000); 
});