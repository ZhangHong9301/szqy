
package com.bonc.szqy.modules.user.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.bonc.szqy.modules.user.dao.UserDao;
import com.bonc.szqy.modules.user.entity.User;

import java.math.BigInteger;
import java.security.MessageDigest;


@Service
@Transactional(readOnly = true)
public class UserService {

    @Autowired
    private UserDao userDao;


	public User selectByLoginName(String userName) {
		return userDao.selectByLoginName(userName);
	}

	public UserDao getUserDao(){
		return userDao;
	}


    @Transactional(readOnly=false)
	public void replacePwdByUsername(String username, String userpwd) {

		MessageDigest md;
		try {
			// 生成一个MD5加密计算摘要
			md = MessageDigest.getInstance("MD5");
			// 计算md5函数
			md.update(userpwd.getBytes());
			// digest()最后确定返回md5 hash值，返回值为8为字符串。因为md5 hash值是16位的hex值，实际上就是8位的字符
			// BigInteger函数则将8位的字符串转换成16位hex值，用字符串来表示；得到字符串形式的hash值
			String pwd = new BigInteger(1, md.digest()).toString(16);

			userDao.updatePwdByLoginId(username,pwd);
		} catch (Exception e) {
			e.printStackTrace();
		}

	}

	}
