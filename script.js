const cmd = args[0].toLowerCase();

if (cmd === 'status') {
    const currentName = localStorage.getItem('user_ship_name') || 'DEFAULT VESSEL';
    const res = document.createElement('p');
    res.style.color = 'var(--orange)';
    res.textContent = `[SYSTEM] ${currentName}: ALL SUBSYSTEMS NOMINAL.`;
    logBox.appendChild(res);
} 
else if (cmd === 'name') {
    if (args[1]) {
        const newName = args.slice(1).join(' ');
        localStorage.setItem('user_ship_name', newName);
        
        const res = document.createElement('p');
        res.style.color = '#00ff66';
        res.textContent = `[SUCCESS] Vessel designation updated to: ${newName}`;
        logBox.appendChild(res);
    } else {
        const res = document.createElement('p');
        res.style.color = '#ffcc00';
        res.textContent = 'Usage: name <your_custom_name>';
        logBox.appendChild(res);
    }
}
