//rem ��̬��ȡhtml��font size
~function(desW){
    var winW=document.documentElement.clientWidth,
        ratio=winW/desW;
    document.documentElement.style.fontSize=ratio*100+'px'
}(640);

//swiper
var mySwiper=new Swiper(".swiper-container",{
        //setting ���õĲ���
    direction:'vertical', //Ĭ����ˮƽ���򻬶�,�涨����:��ֱ���򻬶�
    loop:true, //�޷�ѭ������
    onTransitionEnd:function(swiper){
        //�ص����� onSlideChangeEnd ��һ��slide����������һ��slideִ��
        //swiper.activeIndex ��ȡ��ǰ���������ֵ
        var slideAry=swiper.slides; //��ȡ���л��������
        var curIndex=swiper.activeIndex; //��ȡ���鵱ǰ������ֵ
        var targetId='page0';
        var total=slideAry.length;
        //��̬��ȡidֵ  0 ������ĵ�����2��  length-1  ������ĵ�1��
        switch(curIndex){
            case 0:
                targetId+=total-2; //��һ��
                break;
            case total-1:
                targetId+=1;  //���һ��
                break;
            default:
                targetId+=curIndex
        }
        //ѭ�������ÿһ��
        [].forEach.call(slideAry, function (item,index) {
            if(curIndex === index){ //�õ�ǰ������id  ������idΪnull
                item.id=targetId
            }else{
                item.id=null;
            }
        })

    }
});


//music  Ҫ����˭  �Ȼ�ȡ˭ �ö�ʱ�������ֲ�������һ���ӳٵ�ʱ��
var musicBox=document.querySelector('#musicBox'),
    musicAudio=document.querySelector('#musicAudio');
window.setTimeout(function(){
    //���ֲ��������� ������ ��û�����������
    musicAudio.play();
    //�¼����� canplay ����Ч��������
    musicAudio.addEventListener('canplay',function(){
        musicBox.className='music musicMove';
    },false);
},1000);
musicBox.addEventListener('click',function(){    
    //paused ��ͣ״̬
    //���ֲ��� ��������
    //���� ������ͣ �����ر�
    if(musicAudio.paused){
        musicAudio.play();
        musicBox.className='music musicMove';
    }else{
        musicAudio.pause();
        musicBox.className='music';
        musicBox.style.opacity=0.8;
    }
},false);
