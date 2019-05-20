package com.aoruc.todo.model.share;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Result<T> {
	private String message;
	private boolean sucess;
	private T payload;
}
