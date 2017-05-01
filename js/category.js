window.onload=function(){
  //��໬��
  swipeLeft();
  //�Ҳ໬��
  swipeRight();
}


//��໬��
/*
* 1����� li�ƶ�������  ��ɫtr
*
*
* 2����������
*    touchstar �� ��¼����
*    touchmove �� ul ����
*    touchend  : �ж�  ���ul Խ�� ��Ҫ��λ
* */
function swipeLeft() {
  var leftBox = document.querySelector('.con-left');
  var ul = leftBox.querySelector('ul');
  var lis = ul.querySelectorAll('li');
  var currentY = 0; //ul��ǰ��λ��


  //-------------�ٽ�ֵ-------------
  //  ��λ�ٽ�ֵ
  var maxTop = 0;
  var minTop = leftBox.offsetHeight - ul.offsetHeight;

  //�����ٽ�ֵ
  var swipeMax=maxTop+150;
  var swipeMin=minTop-150;
  //-----------------------��װ���ô���-----------------------
  //��ӹ���
  var addTransition = function () {
    ul.style.transition = "all 0.3s";
    ul.style.webkitTransition = "all 0.3s";
  }

  //ɾ������
  var removeTransition = function () {
    ul.style.transition = "none";
    ul.style.webkitTransition = "none";
  }

  //����ulλ��
  var setTranslateY = function (y) {
    ul.style.transform = 'translateY(' + y + 'px)';
    ul.style.webkitTransform = 'translateY(' + y + 'px)';
  }

  //------------------��� li�ƶ�������  ��ɫ------------------------
  //1.��leftBox�󶨵���¼�
  itcast.tap(leftBox, function (e) {
    console.log(e.target.parentNode);//e.target  ���Ի�ȡ�����¼���СԪ��
    var target = e.target.parentNode; //�������li��ǩ
    //����
    for (var i = 0; i < lis.length; i++) {
      lis[i].classList.remove('active');
      lis[i].index = i;
    }
    target.classList.add('active'); //��ʾ�Լ�

    //ul����
    addTransition();
    //�����ul����  �����ĸ߶�=li����ֵ*-50
    var y = -target.index * 50;
    //��֤����
    if (y > maxTop) {
      y = maxTop;
    }
    if (y < minTop) {
      y = minTop;
    }
    setTranslateY(y);
    currentY = y;
  })


  //------------------------��������---------------------------
  //��¼��������
  var startY = 0;
  var moveY = 0;
  var distanceY = 0;

  leftBox.addEventListener('touchstart', function (e) {
    //��¼��ʼ����ֵ
    startY = e.targetTouches[0].clientY;
  })

  leftBox.addEventListener('touchmove', function (e) {

    moveY = e.targetTouches[0].clientY; //��¼ �ƶ�������ֵ

    distanceY = moveY - startY;  //������

    removeTransition();//ɾ������

    //Ȼulλ��  ����=currentY+distanceY;
    var y = currentY + distanceY;

    //�������ݼ��
    if(y>swipeMax){
      y=swipeMax;
    }
    if(y<swipeMin){
      y=swipeMin;
    }

    setTranslateY(y);//ulλ��
  })


  leftBox.addEventListener('touchend',function(e){
    currentY=currentY+distanceY; //���±���ul��ǰ�ƶ���λ��

    //�ж� ���ul��λ��
    //Խ�� �������λ�ٽ�ֵ С�� ��С�Ķ�λ�ٽ�ֵ  ������ȥ
    if(currentY>maxTop){
      currentY=maxTop;
    }
    if(currentY<minTop){
      currentY=minTop;
    }

    addTransition();//��ӹ���
    setTranslateY(currentY); //��ulλ��

    //��������
    startY=0;
    moveY=0;
    distanceY=0;


  });


}


function swipeRight() {
  var leftBox = document.querySelector('.con-right');
  var ul = leftBox.querySelector('.right-in');
  var currentY = 0; //ul��ǰ��λ��

  //-------------�ٽ�ֵ-------------
  //  ��λ�ٽ�ֵ
  var maxTop = 0;
  var minTop = leftBox.offsetHeight - ul.offsetHeight;

  //�����ٽ�ֵ
  var swipeMax=maxTop+150;
  var swipeMin=minTop-150;
  //-----------------------��װ���ô���-----------------------
  //��ӹ���
  var addTransition = function () {
    ul.style.transition = "all 0.3s";
    ul.style.webkitTransition = "all 0.3s";
  }

  //ɾ������
  var removeTransition = function () {
    ul.style.transition = "none";
    ul.style.webkitTransition = "none";
  }

  //����ulλ��
  var setTranslateY = function (y) {
    ul.style.transform = 'translateY(' + y + 'px)';
    ul.style.webkitTransform = 'translateY(' + y + 'px)';
  }


  //------------------------��������---------------------------
  //��¼��������
  var startY = 0;
  var moveY = 0;
  var distanceY = 0;

  leftBox.addEventListener('touchstart', function (e) {
    //��¼��ʼ����ֵ
    startY = e.targetTouches[0].clientY;
  })

  leftBox.addEventListener('touchmove', function (e) {

    moveY = e.targetTouches[0].clientY; //��¼ �ƶ�������ֵ

    distanceY = moveY - startY;  //������

    removeTransition();//ɾ������

    //Ȼulλ��  ����=currentY+distanceY;
    var y = currentY + distanceY;

    //�������ݼ��
    if(y>swipeMax){
      y=swipeMax;
    }
    if(y<swipeMin){
      y=swipeMin;
    }

    setTranslateY(y);//ulλ��
  })


  leftBox.addEventListener('touchend',function(e){
    currentY=currentY+distanceY; //���±���ul��ǰ�ƶ���λ��

    //�ж� ���ul��λ��
    //Խ�� �������λ�ٽ�ֵ С�� ��С�Ķ�λ�ٽ�ֵ  ������ȥ
    if(currentY>maxTop){
      currentY=maxTop;
    }
    if(currentY<minTop){
      currentY=minTop;
    }

    addTransition();//��ӹ���
    setTranslateY(currentY); //��ulλ��

    //��������
    startY=0;
    moveY=0;
    distanceY=0;


  });


}