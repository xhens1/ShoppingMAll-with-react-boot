package com.horkov.mall.Model;

public class basket {
    
    private String id;
    private int item_id;
    private String title;
    private int cost;


    public basket(String id, int item_id, String title, int cost)

    {
        super();
        this.id = id;
        this.item_id = item_id;
        this.title = title;
        this.cost = cost;
    }

    public String getId(){
        return id;
    }

    public void setId(String id){
        this.id = id;
    }

    public int getItem_id(){
        return item_id;
    }

    public void setItem_id(int item_id){
        this.item_id = item_id;
    }

    public String getTitle(){
        return title;
    }

    public void setTitle(String title){
        this.title = title;
    }

    public int getCost(){
        return cost;
    }

    public void setCost(int cost){
        this.cost = cost;
    }
}
