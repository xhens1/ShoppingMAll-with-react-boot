package com.horkov.mall.Model;

import java.util.Date;

public class Member {

    private String userID;
    private String userPW;
    private String userName;
    private String userSex;
    private String userEmail;
    private String userPH;
    private Date created;
    private Date modified;
    private String role;

    public Member(String userID, String userPW, String userName, String userSex, String userEmail, String userPH, String role)
    {
        super();
        this.userID = userID;
        this.userPW = userPW;
        this.userName = userName;
        this.userSex = userSex;
        this.userEmail = userEmail;
        this.userPH = userPH;
        this.role = role;
    }

    public String getuserID(){
        return userID;
    }

    public void setuserID(String userID){
        this.userID = userID;
    }

    public String getuserPW(){
        return userPW;
    }

    public void setuserPW(String userPW){
        this.userPW = userPW;
    }

    public String getuserName(){
        return userName;
    }

    public void setuserName(String userName){
        this.userName = userName;
    }

    public String getuserSex(){
        return userSex;
    }

    public void setuserSex(String userSex){
        this.userSex = userSex;
    }

    public String getuserEmail(){
        return userEmail;
    }

    public void setuserEmail(String userEmail){
        this.userEmail = userEmail;
    }

    public String getuserPH(){
        return userPH;
    }

    public void setuserPH(String userPH){
        this.userPH = userPH;
    }

    public Date getCreated(){
        return created;
    }

    public void setCreated(Date created){
        this.created = created;
    }

    public Date getModified(){
        return modified;
    }

    public void setModified(Date modified){
        this.modified = modified;
    }

    public String getrole(){
        return role;
    }

    public void setrole(String role){
        this.role = role;
    }

}

