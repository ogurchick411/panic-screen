const macUpdate = document.getElementById('macUpdate');
const terminal = document.getElementById('terminal');
const termOutput = document.getElementById('termOutput');

const csLogs = [
  '[    0.004120] x86/fpu: Supporting XSAVE feature 0x001: \'x87 floating point registers\'',
  '[    0.008401] Allocating System RAM buffer: 0x0000000100000000 - 0x000000047fffffff',
  'gcc -O3 -Wall -Wextra -pthread -c core/scheduler.cpp -o build/scheduler.o',
  'gcc -O3 -Wall -Wextra -pthread -c core/mm/allocator.cpp -o build/allocator.o',
  'g++ -std=c++20 -O3 -flto -o bin/kernel_daemon build/*.o -lpthread -ldl',
  '[INFO] Resolving symbols against libc.so.6...',
  '[DEBUG] Section .text loaded at Virtual Address: 0x7ff8a0201000',
  '[DEBUG] Section .rodata size: 0x0004f120 [READ-ONLY]',
  '[WARN] LTO: Linking time optimization active. Inlining hot paths...',
  'Thread #0 (main): Worker queue initialized with 8 OS threads.',
  'Paging initialized: 4-level page table mapping (CR3: 0x0000000100200000)',
  'SIGUSR1 handler registered for PID 24819',
  '[OK] Kernel daemon successfully linked and bound to target socket.'
];

let i = 0;

setInterval(() => {
  if (!terminal.classList.contains('hidden')) {
    termOutput.innerText += '\n' + csLogs[i % csLogs.length];
    i++;
    
    
    window.scrollTo(0, document.body.scrollHeight);
  }
}, 300);

window.addEventListener('keydown', (e) => {
  if (e.key === '1') {
    macUpdate.classList.remove('hidden');
    terminal.classList.add('hidden');
  }
  if (e.key === '2') {
    terminal.classList.remove('hidden');
    macUpdate.classList.add('hidden');
  }
});