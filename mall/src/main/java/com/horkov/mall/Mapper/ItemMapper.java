package com.horkov.mall.Mapper;

import org.apache.ibatis.annotations.Mapper;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import java.util.List;

import com.horkov.mall.Model.Item;
import com.horkov.mall.Model.basket;

@Mapper
public interface ItemMapper {

    @Select("SELECT * FROM items WHERE id=#{id}")
    Item getItem(@Param("id") int id);

    @Select("SELECT * FROM items ORDER BY lookup DESC")
    List<Item> getItemList();

    @Select("SELECT * FROM items ORDER BY todaylookup DESC")
    List<Item> getTodayList();

    @Select("SELECT * FROM items ORDER BY lookup DESC LIMIT 3")
    List<Item> getBestList();

    @Select("SELECT * FROM basket WHERE id=#{id}")
    List<basket> getBasketList(@Param("id") String id);

    @Select("SELECT * FROM items WHERE title LIKE CONCAT('%',#{search},'%') ")
    List<Item> getSearchList(@Param("search") String search);

    @Insert("INSERT INTO items(title, content, writer, category, cost) VALUES(#{title}, #{content}, #{writer}, #{category}, #{cost})")
    int insertItem(@Param("title") String title, @Param("content") String content, @Param("writer") String writer, @Param("category") String category, @Param("cost") int cost);

    @Insert("INSERT INTO basket(id, item_id, title, cost) VALUES(#{id}, #{item_id}, #{title}, #{cost})")
    int BoxupItem(@Param("id") String id, @Param("item_id") int item_id, @Param("title") String title, @Param("cost") int cost);

    @Update("UPDATE items SET title=#{title}, content=#{content}, category=#{category} WHERE id=#{id}")
    int re_writeItem(@Param("id") int id, @Param("title") String title, @Param("content") String content, @Param("category") String category);

    @Update("UPDATE items SET lookup=#{lookup}, todaylookup=#{todaylookup} WHERE id=#{id}")
    int updateItem(@Param("id") int id, @Param("lookup") int lookup, @Param("todaylookup") int todaylookup);

    @Delete("DELETE FROM items WHERE id=#{id}")
    int deleteItem(@Param("id") int id);


}