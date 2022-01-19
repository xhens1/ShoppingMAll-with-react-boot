package com.horkov.mall.Model;

public class File {
    
    private int item_id;
    private String src;

    public File(int item_id, String src)

    {
        super();
        this.item_id = item_id;
        this.src = src;
    }

    public int getItem_id(){
        return item_id;
    }

    public void setItem_id(int item_id){
        this.item_id = item_id;
    }

    public String getSrc(){
        return src;
    }

    public void setSrc(String src){
        this.src = src;
    }
}
