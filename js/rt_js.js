            var start = new Date().getTime();
            
            function getRandomColor() {
                var letters = '0123456789ABCDEF';
                var color = '#';
                for (var i = 0; i < 6; i++) {
                    color += letters[Math.floor(Math.random() * 16)];
                }
                return color;
            }
            
            function makeShapeAppear(){
                var top = Math.random() * 200;
                var left = Math.random() * 1150;
                var width = (Math.random() * 200) + 50;
                
                if(Math.random() > 0.5){
                    document.getElementById("shape").style.borderRadius = "50%";    
                }
                
                else{
                    document.getElementById("shape").style.borderRadius = "0%";
                }
                
                document.getElementById("shape").style.backgroundColor = getRandomColor();
                document.getElementById("shape").style.display = "block";
                document.getElementById("shape").style.top = top + "px";
                document.getElementById("shape").style.left = left + "px";
                document.getElementById("shape").style.width = width + "px";
                document.getElementById("shape").style.height = width + "px";
                start = new Date().getTime();
            }
            
            function DelayApp(){
                setTimeout(makeShapeAppear, Math.random() * 2000);
            }
            
            DelayApp();
            
            document.getElementById("shape").onclick = function(){
                var end = new Date().getTime();
                document.getElementById("shape").style.display = "none";
                var timeTaken = (end - start)/1000;
                document.getElementById("timeTaken").innerHTML = timeTaken + "s";
                DelayApp();
                
            }
            