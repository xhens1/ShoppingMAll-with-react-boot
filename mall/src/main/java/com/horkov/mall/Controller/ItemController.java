package com.horkov.mall.Controller;

import java.util.List;

import com.horkov.mall.Mapper.ItemMapper;
import com.horkov.mall.Model.Item;
import com.horkov.mall.Model.basket;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ItemController {

    private ItemMapper mapper;

    public ItemController(ItemMapper mapper) {
        this.mapper = mapper;
    }

    // id로 상품 GET
    @GetMapping("/item/{id}")
    public Item getItem(@PathVariable("id") int id) {
        return mapper.getItem(id);
    }

    // 모든 상품 GET
    @GetMapping("/item/all")
    public List<Item> getItemList() {
        return mapper.getItemList();
    }

    // 오늘의 상품 GET
    @GetMapping("/item/today")
    public List<Item> getTodayList() {
        return mapper.getTodayList();
    }

    // 베스트 3 상품 GET
    @GetMapping("/item/best3")
    public List<Item> getBestList(){
        return mapper.getBestList();
    }

    // 장바구니에 담긴 상품 GET
    @GetMapping("/basket/{id}")
    public List<basket> getBasketList(@PathVariable("id") String id) {
        return mapper.getBasketList(id);
    }

    // 검색 값에 해당하는 상품 GET
    @GetMapping("/search/{search}")
    public List<Item> getSearchList(@PathVariable("search") String search) {
        return mapper.getSearchList(search);
    }

    // 조회수를 업데이트
    @PutMapping("/item/{id}")
    public void updateItem(@RequestBody Item item){
        mapper.updateItem(item.getId(), item.getLookup(), item.getTodaylookup());
    }

    // 상품 수정
    @PutMapping("/item/write/{id}")
    public void re_writeItem(@RequestBody Item item){
        mapper.re_writeItem(item.getId(), item.getTitle(), item.getContent(), item.getCategory());
    }

    // 상품 등록
    @CrossOrigin("*")
    @PostMapping("/item")
    public void postItem(@RequestBody Item item){
        mapper.insertItem(item.getTitle(), item.getContent(), item.getWriter(), item.getCategory(), item.getCost());
    }

    // 장바구니에 상품 담기
    @CrossOrigin("*")
    @PostMapping("/boxup/{id}")
    public void BoxupItem(@RequestBody basket basket){
        mapper.BoxupItem(basket.getId(), basket.getItem_id(), basket.getTitle(), basket.getCost());
    }

    // 상품 삭제
    @DeleteMapping("/item/{id}")
    public void deleteItem(@PathVariable("id") int id){
        mapper.deleteItem(id);
    }
}