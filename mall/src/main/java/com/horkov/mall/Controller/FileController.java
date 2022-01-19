package com.horkov.mall.Controller;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.math.BigInteger;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

import com.horkov.mall.Mapper.FileMapper;

import org.apache.commons.io.FileUtils;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.util.*;

@RestController
public class FileController {

    private FileMapper mapper;

    public FileController(FileMapper mapper){
        this.mapper = mapper;
    }

    // 해당 게시글에 몇개의 이미지 파일이 있는지 개수 반환
    @GetMapping(value = "/countimage/{item_id}")
    public int countImage(@PathVariable("item_id") int item_id) {
        return mapper.getCountImage_id(item_id);
    }

    // 로컬에 저장된 이미지를 알맞은 타입으로 변환 후 view로 전달
    // 43 게시글에 이미지가 5개면 '/showimage/43/0' ~ '/showimage/43/4' 까지
    @GetMapping(value = "/showimage/{item_id}/{num}", produces = MediaType.IMAGE_JPEG_VALUE)
    public ResponseEntity<Resource> viewImage(@PathVariable("item_id") int item_id, @PathVariable("num") int num) throws IOException{
        final ByteArrayResource inputStream = new ByteArrayResource(Files.readAllBytes(Paths.get(mapper.getItemList_id(item_id).get(num))));
        return ResponseEntity
                .status(HttpStatus.OK)
                .contentLength(inputStream.contentLength())
                .body(inputStream);
    }

    // 이미지 삭제
    @DeleteMapping("/deleteimage/{item_id}")
    public int deleteImage(@PathVariable("item_id") int item_id){
        return mapper.deleteImage(item_id);
    }
    

    // 업로드된 이미지를 중복이 되지않도록 해시값으로 변환 후 로컬에 저장 및 DB에 해당 이미지의 상품 ID와 로컬 주소 저장
    @CrossOrigin("*")
    @PostMapping("/upload")
    public void upload(@RequestParam("file") MultipartFile[] multipartFile) throws NoSuchAlgorithmException {

        for(int i=0;i<multipartFile.length;i++)
        {   
            MessageDigest m = MessageDigest.getInstance("MD5");
            m.reset();
            m.update(multipartFile[i].getOriginalFilename().getBytes());
            byte[] digest = m.digest();
            BigInteger bigInt = new BigInteger(1, digest);
            String hashtext = bigInt.toString(16);
            File targetFile = new File("src/main/resources/static/imgs/" + hashtext + ".jpg");
            try {
                InputStream fileStream = multipartFile[i].getInputStream();
                FileUtils.copyInputStreamToFile(fileStream, targetFile);
                mapper.insertFile("src/main/resources/static/imgs/" + hashtext + ".jpg");
            } catch (IOException e) {
                FileUtils.deleteQuietly(targetFile);
                e.printStackTrace();
            }
        }

    }
}