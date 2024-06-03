document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.getElementById('search'); //кнопка пошуку
    const searchBar = document.getElementById('searchbar'); //поле пошуку
     //форма, яка містить активні проєкти
    const activeProjects = document.getElementById('active_projects');
     //форма, яка містить архівні проєкти
    const archivedProjects = document.getElementById('arhived_projects');
    //умови перевіряють чи присутні форми для активних чи архівник проєктів
    //Умови створені для випадку, якщо користувач проглядає лише активні або архівні проєкти
    if (activeProjects !== null) {
        //список усіх активних проєктів
        activeProjectItems = activeProjects.querySelectorAll('.project');
    }
    if (archivedProjects !== null) {
        //список усіх архівних проєктів
        archivedProjectItems = archivedProjects.querySelectorAll('.project');
    }
    //обробник події натиснення на кнопку
    searchButton.addEventListener('click', function() {
        //змінна, що зберігає текст поля пошуку для порівняння
        const query = searchBar.value.toLowerCase();
        //цикл, який перебирає кожен проєкт в активного списку проєктів
        activeProjectItems.forEach(function(projectItem) {
            //змінна, яка зберігає назву проєкту для порівняння
            const title = projectItem.querySelector('.title').innerText.toLowerCase();
            //умова перевіряє назву проєкту зі змінною пошуку
            if (title.includes(query)) {
                //якщо назва містить символи пошуку, проєкт залишається на екрані
                projectItem.style.display = '';
            } else {
                //якщо назва не задовільняє полю пошуку, проєкт не відображається 
                projectItem.style.display = 'none';
            }
        });
        //цикл, який перебирає кожен проєкт в архівного списку проєктів
        archivedProjectItems.forEach(function(projectItem) {
             //змінна, що зберігає текст поля пошуку для порівняння
            const title = projectItem.querySelector('.title').innerText.toLowerCase();
            //умова перевіряє назву проєкту зі змінною пошуку
            if (title.includes(query)) {
                //якщо назва містить символи пошуку, проєкт залишається на екрані
                projectItem.style.display = '';
            } else {
                //якщо назва не задовільняє полю пошуку, проєкт не відображається
                projectItem.style.display = 'none';
            }
        });
    });
});