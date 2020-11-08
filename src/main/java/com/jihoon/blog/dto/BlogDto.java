package com.jihoon.blog.dto;


import lombok.Data;

public class BlogDto {

    @Data
    public static class ResDto{

       String title;
       String subTitle;
       String titleImage;

       String content;
       String lastUpdatedDate;
    }
    @Data
    public static class PostDto{
       String title;
       String subTitle;
       String titleImage;
       String content;
       String lastUpdatedDate;
       String createdDate;
    }
    @Data
    public static class ReqDto{
        String blogId;
    }

}
