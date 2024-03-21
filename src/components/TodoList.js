import React, { useRef, useState } from 'react'
import Task from './Task';

function TodoList() {
    const taskInput = useRef();
    const [tasks, setTasks] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskInput.current.value !== '') {
            const lastId = tasks[tasks.length - 1]?.id;
            const id = lastId ? lastId + 1 : 1;
            const newTask = { id: id, task: taskInput.current.value, completed: false, count: 0 }
            setTasks([...tasks, newTask]);
            taskInput.current.value = ''
        }
    }

    return (
        <div className="text-white">
            <header className="mt-10">
                <p className="font-bold text-4xl text-center">Your To-Do list</p>
            </header>
            <main className="flex flex-col justify-center items-center mt-14 w-full">
                <form className="grid grid-cols-3 items-center w-1/3" onSubmit={handleSubmit}>
                    <input ref={taskInput} className="col-span-2 w-full px-4 py-2 rounded-l-md border border-gray-700 bg-gray-700 text-gray-200 outline-none" placeholder="Enter your task" />
                    <button type="submit" className="w-full px-4 py-2 rounded-r-md bg-blue-500 hover:bg-blue-600 text-white font-bold text-clip transition duration-200 ease-in-out focus:outline-none focus:ring focus:ring-blue-300">Add task</button>
                </form>

                <table className="table-auto grid grid-cols-1 w-3/5 px-1 mt-16">
                    <tbody>
                        {tasks.map((task) => {
                            return (
                                <Task
                                    key={task.id}
                                    task={task}
                                    setTasks={setTasks}
                                />
                            );
                        })}
                    </tbody>
                </table>

            </main>
        </div>
    );
}

export default TodoList