from task_manager import models
from task_manager.database import Database
from typing import Any


def get_tasks() -> list[Any]:
    return Database.read()


def get_last_task_id()-> int:
    try:
        return int(Database.read()[-1]["id"])
    except (KeyError, IndexError):
        return 0


def get_task_by_id(id_: int):
    tasks = get_tasks()
    for task in tasks:
        if task["id"] == id_:
            return task
    raise ValueError(f"Task with id {id_} not found")


def create_task(name: str, completed: bool=False):
    if not isinstance(name, str): # type: ignore
        raise TypeError("Task name must be a string")

    if len(name) < 3:
        raise ValueError("Task name must have at least 3 characters")

    tasks = get_tasks()
    new_task = models.Task(get_last_task_id() + 1, name, completed)
    # para a classe virar dicionário:
    tasks.append(new_task.to_dict())
    Database.save(tasks)


def complete_task(id_: int):
    tasks = get_tasks()
    for task in tasks:
        if task["id"] == id_:
            task["completed"] = True
            return Database.save(tasks)
    raise ValueError(f"Task with id {id_} not found")


def delete_task(id_: int):
    tasks = get_tasks()
    new_tasks = [task for task in tasks if task["id"] != id_]
    if len(tasks) == len(new_tasks):
        raise ValueError(f"Task with id {id_} not found")
    Database.save(new_tasks)