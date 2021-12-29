// entrada de dados
const formData = document.getElementById('formInput');

// onde vão ficar as tarefas
const taskList = document.getElementById('tasks');

formData.onsubmit = function (e) {
	e.preventDefault();

    const inputField = document.getElementById('new-task').value;

    if(inputField !== null && inputField !== '')  {
        addTask(inputField);
        formData.reset();
    }
};

// O inputField vem como parâmetro = taskvalue
function addTask(taskvalue) {
	const taskContainer = document.createElement('div');
	const newTask = document.createElement('input'); // cria o elemento input
	const taskLabel = document.createElement('label');
	const taskDescriptionNode = document.createTextNode(taskvalue);

    {/* Como vai ficar a lista na tela: checkbox - tarefa
    <div>
        <input id=inputField name=inputField type="checkbox"/>
        <label for="inputField">taskDescriptionNode</label>
    </div>
     */}
   
    // Cria o input type checkbox
	newTask.setAttribute('type', 'checkbox');
	newTask.setAttribute('name', taskvalue);
	newTask.setAttribute('id', taskvalue);

    // Cria o label onde na tela vão aparecer as tarefas
	taskLabel.setAttribute('for', taskvalue);
	taskLabel.appendChild(taskDescriptionNode);

    // Vai criar a lista propriaamente dita
	taskContainer.classList.add('task-item');
	taskContainer.appendChild(newTask);
	taskContainer.appendChild(taskLabel);

    // Tudo montado, vai para a tela na <div id="tasks"></div>
	taskList.appendChild(taskContainer);
}