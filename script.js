document.getElementById('cli-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        const input = e.target.value;
        const logBox = document.getElementById('term-logs');
        
        const p = document.createElement('p');
        p.textContent = `> ${input}`;
        logBox.appendChild(p);

        const args = input.trim().split(' ');
        const cmd = args[0]toLowerCase();

        if (cmd === 'status') {
            const res = document.createElement('p');
            res.style.color = 'var(--orange)';
            res.textContent = '[SYSTEM] ALL SUBSYSTEMS NOMINAL.';
            logBox.appendChild(res);
        } else if (cmd === 'config') {
            if (args[1] === 'set' && args[2] && args[3]) {
                const key = args[2].toLowerCase();
                const val = args.slice(3).join(' ');
                localStorage.setItem(`ship_${key}`, val);
                const res = document.createElement('p');
                res.style.color = '#00ff66';
                res.textContent = `[CONFIG] Updated ${key} to: ${val}`;
                logBox.appendChild(res);
            }else if (args[1] === 'get' && args[2]) {
                const key = args[2].toLowerCase();
                const val = localStorage.getItem(`ship_${key}`) || 'DEFAULT';
                const res = document.createElement('p');
                res.textContent = `[CONFIG] ${key} = ${val}`;
                logBox.appendChild(res);
            } else {
                const res = document.createElement('p');
                res.style.color = '#ffcc00';
                res.textContent = 'Usage: config set <key> <value> | config get <key>';
                logBox.appendChild(res);
            }
        }
        
        e.target.value = '';
        logBox.scrollTop = logBox.scrollHeight;
    }
});
