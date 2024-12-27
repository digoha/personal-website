
document.addEventListener("click", function() {
    const buttons = document.querySelectorAll('.filter-button');
    

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove a classe 'selected' de todos os botões
            buttons.forEach(btn => btn.classList.remove('selected'));
            // Adiciona a classe 'selected' ao botão clicado
            this.classList.add('selected');

            
        });
    });
});

document.addEventListener("click", projectShow)

function projectShow(button) {
    const projects = document.querySelectorAll('.project');

    projects.forEach((project) => {
        project.classList.remove('show');
        if((button === 'all-btn') || project.classList.contains(button)){
            project.classList.add('show');
        }
    })
}

