package com.aoruc.todo.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.aoruc.todo.model.TodoList;
import com.aoruc.todo.model.share.Result;
import com.aoruc.todo.service.TodoListService;

import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/todolists")
@Slf4j
public class TodoController {

	@Autowired
	TodoListService service;

	@PostMapping("")
	@ResponseStatus(code=HttpStatus.OK)
	public Result save(@RequestBody @Valid TodoList todoList) {

		log.debug("Saving");

		return service.save(todoList);
	}
	
	@PostMapping("/saveall")
	@ResponseStatus(code=HttpStatus.OK)
	public Result saveTodoLists(@RequestBody @Valid List<TodoList> todoLists) {

		log.debug("Saving");
		return service.saveAll(todoLists);
		
		
	}

	@GetMapping("")
	@ResponseStatus(code=HttpStatus.OK)
	public Result findAll() {

		log.debug("Find all");

		return service.findAll();
	}

	@GetMapping("/{id}")
	@ResponseStatus(code=HttpStatus.OK)
	public Result findById(@PathVariable String id) {

		log.debug("Finding");

		return service.findById(id);
	}

	@DeleteMapping("{id}")
	@ResponseStatus(code=HttpStatus.NO_CONTENT)
	public Result delete(@PathVariable String id) {

		log.debug("Saving");

		return service.delete(id);
	}
}
