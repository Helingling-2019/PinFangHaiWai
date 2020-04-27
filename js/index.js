// 导航
	$(document).ready(function(){
		$('.m_nav ul li').on('mouseover',function(){
			$('.m_nav_list').hide();
	   })
	   $('.m_nav ul .nav_click').on('mouseover',function(){
			$(this).find('.m_nav_list').show();
	   })
	   $('.m_nav').on('mouseout',function(){
		  $('.m_nav_list').hide();
	   }) 
	   /* 二级部导航*/
	   $('.m-navigation ul li').on('mouseover',function(){
	   			$('.m-navigation-list').hide();
	   })
	   $('.m-navigation ul .navigation-click').on('mouseover',function(){
	   			$(this).find('.m-navigation-list').show();
	   })
	   $('.m-navigation').on('mouseout',function(){
	   		  $('.m-navigation-list').hide();
	   }) 
	 })
	/* 楼盘首页*/
	