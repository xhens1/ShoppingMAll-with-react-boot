package com.horkov.mall.Model;

import java.util.Date;

public class Item {
    
    private int id;
    private String title;
    private String content;
    private String writer;
    private String category;
    private int cost;
    private int lookup;
    private int todaylookup;
    private Date created;
    private int is_deleted;

    public Item(int id, String title, String content, String writer, String category, int cost, int lookup, int todaylookup)

    {
        super();
        this.id = id;
        this.title = title;
        this.content = content;
        this.writer = writer;
        this.category = category;
        this.cost = cost;
        this.lookup = lookup;
        this.todaylookup = todaylookup;
    }

    public int getId(){
        return id;
    }

    public void setId(int id){
        this.id = id;
    }

    public String getTitle(){
        return title;
    }

    public void setTitle(String title){
        this.title = title;
    }

    public String getContent(){
        return content;
    }

    public void setContent(String content){
        this.content = content;
    }

    public String getWriter(){
        return writer;
    }

    public void setWriter(String writer){
        this.writer = writer;
    }

    public String getCategory(){
        return category;
    }

    public void setCategory(String category){
        this.category = category;
    }

    public int getCost(){
        return cost;
    }

    public void setCost(int cost){
        this.cost = cost;
    }

    public int getLookup(){
        return lookup;
    }

    public void setLookup(int lookup){
        this.lookup = lookup;
    }

    public int getTodaylookup(){
        return todaylookup;
    }

    public void setTodaylookup(int todaylookup){
        this.todaylookup = todaylookup;
    }

    public Date getCreated(){
        return created;
    }

    public void setCreated(Date created){
        this.created = created;
    }

    public int getDeleted(){
        return is_deleted;
    }

    public void setDeleted(int is_deleted){
        this.is_deleted = is_deleted;
    }
}
