package com.aoruc.todo.repo;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.aoruc.todo.model.TodoList;

@Repository
public interface TodoListRepository extends MongoRepository<TodoList, String> {

}
