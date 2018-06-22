package com.bonc.szqy.modules.pages.service;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bonc.szqy.modules.pages.dao.ProvMapper;


@Service
public class ProvService {

	@Autowired
	ProvMapper provMapper;
	
	public ProvMapper getMapper() {
		return provMapper;
	}
	
}