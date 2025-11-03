window.addEventListener('load', function() {
    const sound = document.getElementById('loader-sound');
    sound.play().catch(e => console.log("Sonido no reproducido:", e));

    const loader = document.getElementById('loader');
    loader.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    loader.style.transform = 'scale(1)';
    
    setTimeout(() => {
        loader.style.opacity = '0';
        loader.style.transform = 'scale(0.9)';
        setTimeout(() => {
            loader.style.display = 'none';
            document.querySelector('.content').style.display = 'block';
            document.querySelector('.content').style.opacity = '0';
            document.querySelector('.content').style.transition = 'opacity 0.8s ease';
            setTimeout(() => {
                document.querySelector('.content').style.opacity = '1';
            }, 50);
        }, 600);
    }, 2000);
});

function colores() {
    const colorPicker = document.getElementById('colorPicker');
    const selectedColor = colorPicker.value;
    const colorDisplay = document.getElementById('colorDisplay');
    colorDisplay.innerHTML = '';

    const mainColorBox = document.createElement('div');
    mainColorBox.style.width = '120px';
    mainColorBox.style.height = '120px';
    mainColorBox.style.backgroundColor = selectedColor;
    mainColorBox.style.border = '2px solid #000';
    mainColorBox.style.borderRadius = '12px';
    mainColorBox.style.display = 'flex';
    mainColorBox.style.alignItems = 'center';
    mainColorBox.style.justifyContent = 'center';
    mainColorBox.style.color = '#fff';
    mainColorBox.style.fontFamily = 'Arial, sans-serif';
    mainColorBox.style.marginBottom = '20px';
    mainColorBox.style.transition = 'all 0.3s ease';
    mainColorBox.textContent = selectedColor;

    const title = document.createElement('h3');
    title.textContent = 'Variantes del color:';
    title.style.fontFamily = 'Arial, sans-serif';
    title.style.marginBottom = '12px';

    const variantsContainer = document.createElement('div');
    variantsContainer.style.display = 'flex';
    variantsContainer.style.gap = '10px';
    variantsContainer.style.flexWrap = 'nowrap';
    variantsContainer.style.overflowX = 'auto';
    variantsContainer.style.scrollBehavior = 'smooth';
    variantsContainer.style.padding = '8px';

    const variants = generateColorVariants(selectedColor);
    variants.forEach(color => {
        const variantBox = document.createElement('div');
        variantBox.style.width = '60px';
        variantBox.style.height = '60px';
        variantBox.style.backgroundColor = color;
        variantBox.style.border = '1px solid #000';
        variantBox.style.borderRadius = '8px';
        variantBox.style.cursor = 'pointer';
        variantBox.style.transition = 'transform 0.2s, box-shadow 0.2s';
        variantBox.title = color;

        variantBox.onmouseover = () => {
            variantBox.style.transform = 'scale(1.2)';
            variantBox.style.boxShadow = '0 0 10px rgba(0,0,0,0.3)';
        };
        variantBox.onmouseleave = () => {
            variantBox.style.transform = 'scale(1)';
            variantBox.style.boxShadow = '0 0 2px rgba(0,0,0,0.1)';
        };

        variantBox.onclick = () => {
            mainColorBox.style.backgroundColor = color;
            mainColorBox.textContent = color;
        };

        variantsContainer.appendChild(variantBox);
    });

    colorDisplay.appendChild(mainColorBox);
    colorDisplay.appendChild(title);
    colorDisplay.appendChild(variantsContainer);
}

function generateColorVariants(hex) {
    const variants = [];
    for (let i = -5; i <= 5; i++) {
        variants.push(adjustColor(hex, i * 15));
    }
    return variants;
}

function adjustColor(hex, amount) {
    let col = hex.substring(1);
    const num = parseInt(col, 16);
    let r = (num >> 16) + amount;
    let g = ((num >> 8) & 0x00FF) + amount;
    let b = (num & 0x0000FF) + amount;

    r = Math.min(255, Math.max(0, r));
    g = Math.min(255, Math.max(0, g));
    b = Math.min(255, Math.max(0, b));

    return `#${(b | (g << 8) | (r << 16)).toString(16).padStart(6, '0')}`;
}
