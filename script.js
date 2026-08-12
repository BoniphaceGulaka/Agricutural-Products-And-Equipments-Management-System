// Form handling
document.getElementById('farmerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = this.querySelector('button');
    const originalText = btn.innerHTML;
    
    // Simulate API call
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
    
    setTimeout(() => {
        btn.innerHTML = '<i class="fas fa-check"></i> Registration Successful!';
        btn.classList.replace('bg-primary', 'bg-green-600');
        this.reset();
        
        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 2000);
    }, 1500);
});

// Scroll Header effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('py-2', 'shadow-md');
        header.classList.remove('py-4', 'shadow-sm');
    } else {
        header.classList.add('py-4', 'shadow-sm');
        header.classList.remove('py-2', 'shadow-md');
    }
});

// Mobile menu toggle (simple version)
document.querySelector('.md\\:hidden').addEventListener('click', function() {
    const nav = document.querySelector('ul');
    nav.classList.toggle('hidden');
    nav.classList.toggle('absolute');
    nav.classList.toggle('top-20');
    nav.classList.toggle('left-0');
    nav.classList.toggle('w-full');
    nav.classList.toggle('bg-white');
    nav.classList.toggle('p-4');
    nav.classList.toggle('flex-col');
    nav.classList.toggle('space-y-4');
});






// Form handling
document.getElementById('farmerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = this.querySelector('button');
    const originalText = btn.innerHTML;
    
    // Simulate API call
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
    
    setTimeout(() => {
        btn.innerHTML = '<i class="fas fa-check"></i> Registration Successful!';
        btn.classList.replace('bg-primary', 'bg-green-600');
        this.reset();
        
        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 2000);
    }, 1500);
});

// Scroll Header effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('py-2', 'shadow-md');
        header.classList.remove('py-4', 'shadow-sm');
    } else {
        header.classList.add('py-4', 'shadow-sm');
        header.classList.remove('py-2', 'shadow-md');
    }
});

// Mobile menu toggle (simple version)
document.querySelector('.md\\:hidden').addEventListener('click', function() {
    const nav = document.querySelector('ul');
    nav.classList.toggle('hidden');
    nav.classList.toggle('absolute');
    nav.classList.toggle('top-20');
    nav.classList.toggle('left-0');
    nav.classList.toggle('w-full');
    nav.classList.toggle('bg-white');
    nav.classList.toggle('p-4');
    nav.classList.toggle('flex-col');
    nav.classList.toggle('space-y-4');
});
