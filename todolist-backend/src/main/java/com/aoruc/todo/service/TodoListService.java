package com.aoruc.todo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aoruc.todo.model.TodoList;
import com.aoruc.todo.model.share.Result;
import com.aoruc.todo.repo.TodoListRepository;

@Service
public class TodoListService {

	@Autowired
	TodoListRepository repo;

	public Result save(TodoList todoList) {
		repo.save(todoList);
		return new Result("Saved", true, null);
	}
	public Result saveAll(List<TodoList> todoLists) {
		todoLists.forEach(todoList->{
			repo.save(todoList);
		});

		return new Result("Saved", true, null);
	}

	public Result findAll() {

		return new Result("Find all", true, repo.findAll());
	}

	public Result findById(String id) {
		return new Result("Get", true, repo.findById(id));
	}

	public Result delete(String id) {
		repo.deleteById(id);
		return new Result("Deleted", true, null);
	}
}
