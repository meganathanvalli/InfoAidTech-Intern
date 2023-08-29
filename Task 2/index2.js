        function Solve(val )
        {
        var v = document.getElementById('result');
        v.value += val;
        }

        function Result()
        {
        var num1 = document.getElementById('result').value;
        var num2 = eval(num1);
        document.getElementById('result').value = num2;
        }

        function Clear()
        {
            var inp = document.getElementById('result');
            inp.value = '';
        }

        function Back(){
            var ev = document.getElementById('result');
            ev.value = ev.value.slice(0,-1);
        }  

        function mouseover(){
            document.getElementById("hov").style.color="white";
            document.getElementById("hov").style.backgroundColor="green"
        }
        function mouseout(){
            document.getElementById("hov").style.color="black";
            document.getElementById("hov").style.backgroundColor="rgb(97, 163, 163)";
        }

        function mouseover2(){
            document.getElementById("hov1").style.color="white";
            document.getElementById("hov1").style.backgroundColor="green"
        }
        function mouseout2(){
            document.getElementById("hov1").style.color="black";
            document.getElementById("hov1").style.backgroundColor="rgb(97, 163, 163)";
        }

        function mouseover3(){
            document.getElementById("hov2").style.color="white";
            document.getElementById("hov2").style.backgroundColor="green"
        }
        function mouseout3(){
            document.getElementById("hov2").style.color="black";
            document.getElementById("hov2").style.backgroundColor="rgb(97, 163, 163)";
        }

        function mouseover4(){
            document.getElementById("hov3").style.color="white";
            document.getElementById("hov3").style.backgroundColor="green"
        }
        function mouseout4(){
            document.getElementById("hov3").style.color="black";
            document.getElementById("hov3").style.backgroundColor="rgb(97, 163, 163)";
        }

        function mouseover5(){
            document.getElementById("hov4").style.color="white";
            document.getElementById("hov4").style.backgroundColor="green"
        }
        function mouseout5(){
            document.getElementById("hov4").style.color="black";
            document.getElementById("hov4").style.backgroundColor="rgb(97, 163, 163)";
        }

        function mouseover6(){
            document.getElementById("hov5").style.color="white";
            document.getElementById("hov5").style.backgroundColor="green"
        }
        function mouseout6(){
            document.getElementById("hov5").style.color="black";
            document.getElementById("hov5").style.backgroundColor="rgb(97, 163, 163)";
        }

        function mouseover7(){
            document.getElementById("hov6").style.color="white";
            document.getElementById("hov6").style.backgroundColor="green"
        }
        function mouseout7(){
            document.getElementById("hov6").style.color="black";
            document.getElementById("hov6").style.backgroundColor="rgb(97, 163, 163)";
        }

        function mouseover8(){
            document.getElementById("hov7").style.color="darkblue";
            document.getElementById("hov7").style.backgroundColor="white";
        }
        function mouseout8(){
            document.getElementById("hov7").style.color="rgb(4, 7, 4)";
            document.getElementById("hov7").style.backgroundColor="rgb(149, 177, 149)";
        }