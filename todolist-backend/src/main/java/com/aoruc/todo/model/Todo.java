package com.aoruc.todo.model;

import org.springframework.data.annotation.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@Data
@NoArgsConstructor
public class Todo {
	@Id
	private String id;
	
	private String content;
	private long date;
}
