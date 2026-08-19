document.getElementById('cli-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        const input = e.target.value;
        const logBox = document.getElementById('term-logs');
      
      // Add user command to log
        const p = document.createElement('p');
        p.textContent = `> ${input}`;
        logBox.appendChild(p);
      
      // Basic Command Handling
        if (input.toLowerCase() === 'status') {
            const res = document.createElement('p');
            res.style.color = 'var(--orange)';
            res.textContent = '[SYSTEM] ALL SUBSYSTEMS NOMINAL.';
            logBox.appendChild(res);
        }
      e.target.value = ''; // Clear input
        logBox.scrollTop = logBox.scrollHeight; // Auto-scroll
    }
});
