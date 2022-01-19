package com.horkov.mall.Controller;

import java.util.List;

import com.horkov.mall.Mapper.UserMapper;
import com.horkov.mall.Model.Member;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
    
    private UserMapper mapper;

    public UserController(UserMapper mapper){
        this.mapper = mapper;
    }

    @CrossOrigin("*")
    @PostMapping("/login")
    public Member login(@RequestBody Member user){
        return mapper.login(user.getuserID());
    }

    @GetMapping("/user/{userID}")
    public Member getUserInfo(@PathVariable("userID") String userID){
        return mapper.login(userID);
    }

    @GetMapping("/user/all")
    public List<Member> getUserList(){
        return mapper.getUserList();
    }

    @CrossOrigin("*")
    @PostMapping("/user")
    public void putUser(@RequestBody Member user){
        mapper.insertUser(user.getuserID(), user.getuserPW(), user.getuserName(), user.getuserSex(), user.getuserEmail(), user.getuserPH());
    }

    @PutMapping("/user/{userID}")
    public void changeUserPW(@PathVariable("userID") String userID, @RequestParam("userPW") String userPW){
        mapper.updateUserPW(userID, userPW);
    }

    @CrossOrigin("*")
    @PostMapping("/changeInfo")
    public void changeUserInfo(@RequestBody Member user){
        mapper.updateUserInfo(user.getuserID(), user.getuserName(), user.getuserSex(), user.getuserEmail(), user.getuserPH());
    }

    @CrossOrigin("*")
    @PostMapping("/delete")
    public void deleteUser(@RequestBody Member user){
        mapper.deleteUser(user.getuserID());
    }

}