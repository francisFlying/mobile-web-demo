
// �ƶ��˵ĵ���¼�����300ms���ӳ� �Ż�
// ��������¼���
// �ȴ�����touch�¼�  ����ǵ���¼�   û��touchmove�¼�
// ������ʼ �� ���� ��ʱ��� ҪС�� 150ms
/*
* ����˵��
* obj���󶨵���¼��Ķ���
* callback: ����¼������� Ҫִ�еĴ���
* */

/* ȫ����Ⱦ */
// �����ռ�  ����ȫ����Ⱦ
var itcast={
  tap:function(obj,callback){
    if(typeof obj=="object"){
      //���������¼����
      var startTime=0;
      var isMove=false;
      //������ʼ
      obj.addEventListener('touchstart',function(){
        startTime=Date.now(); //ʱ���
      });

      //�����ƶ�
      obj.addEventListener('touchmove',function(){
        isMove=true;
      });

      //��������
      obj.addEventListener('touchend',function(e){
        //�ж� û���ƶ��� ʱ��С��150ms  Ϊ����¼�
        if(!isMove&&Date.now()-startTime<150){
          callback&&callback(e);
        }

        //��������
        isMove=false;
        startTime=0;
      });
  }
  }
};


