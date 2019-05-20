package com.aoruc.todo.model;

import java.util.List;

import org.springframework.data.annotation.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@Data
@NoArgsConstructor
public class TodoList {
	@Id
	private String id;
	
	private List<Todo> todos;
	
	private String title;
}
