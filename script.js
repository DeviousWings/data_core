document.getElementById('cli-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        const input = e.target.value;
        const logBox = document.getElementById('term-logs');
        
        // 1. Echo user input to the terminal log
        const p = document.createElement('p');
        p.textContent = `> ${input}`;
        logBox.appendChild(p);

        // 2. Break down the input into command and arguments
        const args = input.trim().split(' ');
        const cmd = args[0].toLowerCase();
        
        
        // 3. Command: Check status (uses custom name if saved)
        if (cmd === 'status') {
            const currentName = localStorage.getItem('user_ship_name') || 'DEFAULT VESSEL';
            const res = document.createElement('p');
            res.style.color = 'var(--orange)';
            res.textContent = `[SYSTEM] ${currentName}: ALL SUBSYSTEMS NOMINAL.`;
            logBox.appendChild(res);
        }
        
        // 4. Command: Set a custom name (e.g., "name Aurora")
        else if (cmd === 'name') {
            if (args[1]) {
                // Grab everything after the "name" command in case it's multiple words
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
        
        // 5. Clean up input field and auto-scroll to the bottom
        e.target.value = '';
        logBox.scrollTop = logBox.scrollHeight;
    }
});
