import { Header } from './components/Header';
import { Todo } from './components/Todo';
import { Footer } from './components/Footer';
import { About } from './components/About';
import './App.css';
import { TodoItem } from './components/TodoItem';

let todolist = [
	{
		sno: 1,
		title: 'Learn React',
		desc: 'Learn React From Scratch',
	},
	{
		sno: 2,
		title: 'Learn Java',
		desc: 'Learn Java From Scratch',
	},
	{
		sno: 3,
		title: 'Learn Java-Scirpt',
		desc: 'Learn Java-Scirpt From Scratch',
	},
];

let empty = [];
function App() {
	return (
		<>
			<Header title='My Todos' navItem={['Home', 'About']} />
			<About />
			<Todo todolist={todolist} />
			<Footer />
		</>
	);
}

export default App;
