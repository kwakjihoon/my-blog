package com.jihoon.blog.controller;
import com.jihoon.blog.dto.BlogDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
public class BlogController {


    @GetMapping("/blog/{blogId}")
    public BlogDto.ResDto findBlogById(@PathVariable String blogId){
        BlogDto.ResDto resDto = new BlogDto.ResDto();
        resDto.setContent("### Content ####"+blogId);
        resDto.setTitle("제목입니다 제목 자바스크립트");
        resDto.setTitle("자바스크립트 이용법");
        resDto.setLastUpdatedDate("2020.10.22");
        return resDto;
    }
}
