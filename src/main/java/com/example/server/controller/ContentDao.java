package com.example.server.controller;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import com.example.server.model.Content;

@Mapper
public interface ContentDao {
	@Select("select * from content where id = #{id}")
	public Content findById(long id);
}
