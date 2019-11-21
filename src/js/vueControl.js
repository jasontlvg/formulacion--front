export function vueControl(){
    // let io= function(){
    //     return {
    //         emit: function(x,y){
    //             return 'Hola';
    //         }
    //     }
    // }
    // const socket= io();
    card = new Vue({
        el: '#card',
        data: {
            message: 'Hello Vue!',
            list: [],
            temperature: 10,
            base: 10,
            grados: 0,
            longitud: 10,
            gradosdb: 0,
            longitudb: 0,
            list: [{grados:180, longitud: 10},{grados:45, longitud: 10},{grados:5, longitud: 6},{grados:7, longitud: 8}]
            
        },
        methods: {
            saludo(){
                console.log('ola k ase')
                $('.ui.modal').modal('show');
            },
            posicionar2: function(longitud){
                // console.log('The Final Countdown')
                let width,height, longitudXPixels, longitudYPixels, radianes, componentX, componentY;
                let dot= document.getElementById("position")
                width=145;
                height=130;

                longitudXPixels= (longitud*width)/this.base;
                longitudYPixels= (longitud*height)/this.base;
                radianes= ((this.grados*pi)/(180));


                componentX= (longitudXPixels)*(Math.cos(radianes));
                componentY= (longitudYPixels)*(Math.sin(radianes));
                dot.style.top= height-(componentY) + "px";
                dot.style.left= width+(componentX) + "px";
            },
            posicionar: function(width, height){
                let longitudXPixels, longitudYPixels, radianes, componentX, componentY;
                let dot= document.getElementById("position")
                
                longitudXPixels= (this.longitud*width)/this.base;
                longitudYPixels= (this.longitud*height)/this.base;
                radianes= ((this.grados*pi)/(180));


                componentX= (longitudXPixels)*(Math.cos(radianes));
                componentY= (longitudYPixels)*(Math.sin(radianes));
                dot.style.top= height-(componentY) + "px";
                dot.style.left= width+(componentX) + "px";
            },
            posicionardb: function(width, height){
                let longitudXPixels, longitudYPixels, radianes, componentX, componentY;
                let dot= document.getElementById("positiondb")
                
                longitudXPixels= (this.longitudb*width)/this.base;
                longitudYPixels= (this.longitudb*height)/this.base;
                radianes= ((this.gradosdb*pi)/(180));


                componentX= (longitudXPixels)*(Math.cos(radianes));
                componentY= (longitudYPixels)*(Math.sin(radianes));
                dot.style.top= height-(componentY) + "px";
                dot.style.left= width+(componentX) + "px";
            },
            modal: function(grados, longitud){
                this.gradosdb= grados;
                this.longitudb= longitud;
                let desktop= matchMedia('(min-width: 500px)').matches;
                if(desktop){
                    this.posicionardb(190,180);
                }else{
                    this.posicionardb(140,130);
                }
                
                $('.ui.modal').modal('show');
                console.log('Hola')

            }
            
        },
        computed: {
            
        }
    });
    // socket.emit("clientMotor1Value", 800)
}