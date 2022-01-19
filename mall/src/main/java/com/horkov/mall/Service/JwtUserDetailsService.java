package com.horkov.mall.Service;

import java.util.ArrayList;

import com.horkov.mall.Mapper.UserMapper;
import com.horkov.mall.config.PasswordEncoding;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

// DB와 front로 부터 받은 정보 비교
@Service
public class JwtUserDetailsService implements UserDetailsService {

    @Autowired
    UserMapper mapper;
    
    PasswordEncoding passwordEncoding = new PasswordEncoding();

    @Override
    public UserDetails loadUserByUsername(String userID) throws UsernameNotFoundException {
        if (mapper.getID(userID).equals(userID)) {
            String temp = passwordEncoding.encode(mapper.getPW(userID));
            return new User(userID, temp , new ArrayList<>());
        } else {
            throw new UsernameNotFoundException("User not found with username: " + userID);
        }
    }
}
