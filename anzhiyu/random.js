var posts=["2022/11/20/EasyLua/","2022/12/01/Design-Patterns/","2022/11/20/EasyEngine/","2022/12/01/EasyDB/","2022/12/01/EasyDocker/","2022/12/01/EasyRPC/","2022/12/01/Game-making-from-my-perspective/","2022/12/01/GameUE-Slolo/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};