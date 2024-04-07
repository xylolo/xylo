document.addEventListener('DOMContentLoaded', (event) => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('animate-fadeIn');
            }
        });
    });

    document.querySelectorAll('[data-spotlight]').forEach((card) => {
        observer.observe(card);
    });
});