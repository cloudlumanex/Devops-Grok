import { useEffect, useState } from 'react';
function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/tasks') // Change 'backend' to 'localhost'
      .then(res => res.json())
      .then(data => setTasks(data))
      .catch(err => console.error('Fetch error:', err));
  }, []);
  return (
    <div>
      <h1>Tasks</h1>
      <ul>{tasks.map(task => <li key={task.id}>{task.task}</li>)}</ul>
    </div>
  );
}
export default App;