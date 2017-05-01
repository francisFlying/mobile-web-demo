window.onload=function(){
  //ҳ�����js-header��ɫ
  setHeader();
  //����ʱ
  downTime();
  //�ֲ�ͼ
  banner();
}
  //��ҳ��Ĺ����¼�
window.onscroll=function(){
  setHeader();
}

function setHeader(){
  //��ȡҳ���������������߶�
  var sTop=document.body.scrollTop;
  //��ȡbanner�ĸ߶�
  var banner=document.querySelector('.jd-banner');
  var bannerHeight=banner.offsetHeight;
  //�洢͸���ȵı���
  var opacity=0;
  //alert(sTop);
  if(sTop<=bannerHeight){
    //��̬����͸����
    opacity=sTop/bannerHeight;
    if(opacity>0.8){
      opacity=0.8;
    }
  }else{
    opacity=0.8;
  }

  //��ͷ�����ñ���
  document.querySelector('.header-in').style.backgroundColor='rgba(201,21,35,'+opacity+')';
}

//����ʱ
function downTime(){
  var time=60*60*5;
  //��ʱ��
  var timer=setInterval(function(){
    time--;
    if(time<0){ //���Ϊ�� �����ʱ��
      clearInterval(timer);
    }
    //������ ת��ʱ����
    var h=Math.floor(time/3600);
    var m=Math.floor(time%3600/60);
    var s=Math.floor(time%60);
    //��ȡ����span
    var spans=document.querySelectorAll('.sk-time span');

    //Сʱ
    spans[0].innerHTML=Math.floor(h/10);
    spans[1].innerHTML=Math.floor(h%10);

    //����
    spans[3].innerHTML=Math.floor(m/10);
    spans[4].innerHTML=Math.floor(m%10);

    //��
    spans[6].innerHTML=Math.floor(s/10);
    spans[7].innerHTML=Math.floor(s%10);

  },1000);
}

//�ֲ�ͼ
/*
* ����
* 1-��ʱ���л��ֲ�ͼ
* 2-�߽��� ʵ���޷����
* 3-�Ǳ� �л�
* 4-�����ֲ�ͼ
*
* */

function banner(){
  var banner=document.querySelector('.jd-banner');
  var ul=banner.querySelector('ul');
  var W=banner.offsetWidth; //��ȡһ���Ŀ��
  //��¼�л�������ֵ
  var index=1;

  //---------------------��װ���ô���---------------------

  //��ul��ӹ��ȵķ���
  var addTransition=function(){
    ul.style.transition="all 0.4s";
    ul.style.webkitTransition="all 0.4s";
  }

  //��ulɾ�����ȵķ���
  var removeTransition=function(){
    ul.style.transition="none";
    ul.style.webkitTransition="none";
  }

  //����ul��λ��
  var setTranslateX=function(x){
    ul.style.transform='translateX('+x+'px)';
    ul.style.webkitTransform='translateX('+x+'px)';
  }


  // -----------------1-��ʱ���л��ֲ�ͼ--------------------
  var timer=setInterval(function(){
    index++;
    addTransition(); //��ӹ���Ч��
    setTranslateX(-W*index); //����ul��λ��
  },2000);

  //-----------------2-�߽��� ʵ���޷����-----------------
  // ��ÿһ���л���ɺ����ж�index�Ƿ�Խ��

  //ul.addEventListener('transitionend',function(){
  //  if(index>=9){
  //    index=1;
  //    //ɾ������
  //    removeTransition();
  //    //��ul������ת���������غ�
  //    setTranslateX(-W*index);
  //  }
  //  if(index<=0){
  //    index=8;
  //    //ɾ������
  //    removeTransition();
  //    //��ul������ת���������غ�
  //    setTranslateX(-W*index);
  //  }
  //})
  //
  ////����webkit�ں˵��¼�
  //ul.addEventListener('webkitTransitionEnd',function(){
  //  if(index>=9){
  //    index=1;
  //    //ɾ������
  //    removeTransition();
  //    //��ul������ת���������غ�
  //    setTranslateX(-W*index);
  //  }
  //  if(index<=0){
  //    index=8;
  //    //ɾ������
  //    removeTransition();
  //    //��ul������ת���������غ�
  //    setTranslateX(-W*index);
  //  }
  //})
  //

  bindTransitionEnd(ul,function(){
    if(index>=9){
      index=1;
      //ɾ������
      removeTransition();
      //��ul������ת���������غ�
      setTranslateX(-W*index);
    }
    if(index<=0){
      index=8;
      //ɾ������
      removeTransition();
      //��ul������ת���������غ�
      setTranslateX(-W*index);
    }

    // ���ýǱ�
    setPoint(index);

  });

  //��װһ������ ��� ���ΰ󶨹����¼� �������������
  // obj Ҫ�󶨹��ɽ����¼��Ķ���
  // callback �����¼�������Ļص�����
  function bindTransitionEnd(obj,callback){
     if(typeof obj=='object'){ //������ݵĲ����Ƕ�������¼�
       obj.addEventListener('transitionend',function(){
          //if(callback){
          //  callback();
          //}
          callback&&callback();
       });

       obj.addEventListener('webkitTransitionEnd',function(){
         callback&&callback();
       });
     }
  }

//-------------------3-�Ǳ� �л�------------------------
  //index ��ʾ��ǰ����ͼ������ֵ
  function setPoint(index){
    var lis=banner.querySelectorAll('ol li');
    //����
    //�����ų����е�
    for(var i=0;i<lis.length;i++){
      lis[i].classList.remove('active');
    }
    //��ʾ�Լ�
    lis[index-1].classList.add('active');
  }

//*--------------- 4-�����ֲ�ͼ--------------------
  /*  ģ�黯 �߼�����
  * 1-������ʼ -��¼��ʼ����
  * 2-�����ƶ� - ��¼ �ƶ�������   ul������ָ�ƶ�
  * 3-�������� - �����ж�
  *   �����������
  *    3.1 �����ٽ�ֵ �л�ͼƬ
  *         distanceX>0  ��һ��
       *    distanceX<0   ��һ��
  *    3.2С���ٽ�ֵ ����ȥ  *
  * */

  //���������¼����
  var startX=0;
  var moveX=0;
  var distanceX=0;

  banner.addEventListener('touchstart',function(e){
    console.log('start');
    //��¼��ʼ����
    startX= e.targetTouches[0].clientX;
    //�����ʱ
    clearInterval(timer);
  })


  banner.addEventListener('touchmove',function(e){
    console.log('move');
    //��¼�ƶ�����
    moveX= e.targetTouches[0].clientX;
    //�����ֵ
    distanceX=moveX-startX;
    //���ul�Ĺ���Ч��
    removeTransition();
    //��ulλ��  -W*index+distanceX
    var x=-W*index+distanceX;
    setTranslateX(x);
  })


  banner.addEventListener('touchend',function(e){
    console.log('end');
    /*-�������� - �����ж�
    *   �����������
    *    3.1 �����ٽ�ֵ �л�ͼƬ
    *         distanceX>0  ��һ��
    *    distanceX<0   ��һ��
    *    3.2С���ٽ�ֵ ����ȥ  */

    if(Math.abs(distanceX)>W/3){
      //�л�ͼƬ
      if(distanceX>0){
        index--;//��һ��
      }
      if(distanceX<0){
        //��һ��
        index++;
      }

    }

    addTransition(); //��ӹ���
    setTranslateX(-W*index); //ulλ��

    //��������
    startX=0;
    moveX=0;
    distanceX=0;


    timer=setInterval(function(){
      index++;
      addTransition(); //��ӹ���Ч��
      setTranslateX(-W*index); //����ul��λ��
    },2000);

  })


}