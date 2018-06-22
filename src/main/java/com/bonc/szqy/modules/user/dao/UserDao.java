package com.bonc.szqy.modules.user.dao;

import java.util.Map;

import com.bonc.szqy.common.persistence.annotation.MyBatisDao;
import com.bonc.szqy.modules.user.entity.User;
import org.apache.ibatis.annotations.Param;

@MyBatisDao
public interface UserDao {
    int deleteByPrimaryKey(String userId);

    int insert(User record);

    int insertSelective(User record);

    User selectByPrimaryKey(String userId);

    int updateByPrimaryKeySelective(User record);

    int updateByPrimaryKey(User record);

	User selectByLoginName(String userName);

	void updatePwdByLoginId(@Param("loginId") String loginId, @Param("pwd") String pwd);
}